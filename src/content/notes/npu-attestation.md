---
title: "NPU attestation: what are we even measuring?"
date: 2026-04-28
excerpt: "Boot attestation tells you the kernel is genuine. NPU attestation should tell you the model is too — and most current designs don't."
tags: [security, attestation, ml]
---

The Pluton + DICE + TPM stack on a Copilot+ PC can give a verifier a strong claim about what code booted, what firmware loaded, and what driver is binding the NPU. That's a meaningful primitive. It's also not what users actually need for on-device AI.

What I want a remote attestation of an NPU inference path to tell me:

1. Which **NPU silicon** I'm running on, and at what firmware revision.
2. Which **runtime / driver** is dispatching ops.
3. Which **model artifact** — by content hash, including the quantized weights — is loaded.
4. Which **input pre-processing graph** wraps it (tokenizer included).
5. That all of the above is bound into a single TPM-rooted quote that a relying party can verify with a freshness nonce.

Today's stack handles 1 and 2 well, 3 partially (the model *file* hash if you're disciplined, but rarely the loaded-into-NPU-memory image), and 4–5 essentially not at all. Call this the **model-attestation gap**: I can prove the engine is genuine but not the thing the engine is running.

It matters the moment a local model drives security-relevant decisions — a copilot summarizing a permission prompt, an on-device content filter, a recovery flow that asks the assistant "is this URL a known phish?". The trust boundary has shifted to *the actual weights answering the actual prompt*. A swapped, poisoned, or silently re-quantized model isn't caught by anything in the boot-time measurement chain.

The fix isn't novel: extend measured boot through model load. NPU firmware should hash the weights as it streams them into tile memory, extend a PCR with the measurement, and surface it in the quote alongside the runtime hash and a salted hash of the pre-processing graph. Pluton already does the analogous trick for OS components — the work is making it a standard interface rather than a per-vendor science project.

If you build a verifier and the only PCRs you care about are the OS ones, you've shipped a beautiful door with no lock on the cabinet behind it.

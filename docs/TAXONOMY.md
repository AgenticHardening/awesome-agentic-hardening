# Taxonomy & Design Rationale

[中文版](zh-CN/TAXONOMY.md)

## Design Philosophy

This awesome list organizes resources along the **"Attack Surface → Hardening Techniques → Evaluation & Testing → Governance & Standards"** pipeline. This structure ensures that:

1. **Red teamers** can quickly find threat intelligence and attack techniques (Categories 1–5)
2. **Blue teamers** can find corresponding defenses for each threat (Categories 6–9)
3. **Security engineers** can validate their defenses (Categories 10–11)
4. **Compliance officers** can find governance frameworks (Category 12)

The word "hardening" — the project's core identity — threads through every section: each threat category maps to specific hardening techniques.

## Taxonomy Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    awesome-agentic-hardening                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🔴 THREAT LANDSCAPE (Know Your Enemy)                          │
│  ├── 1. Prompt Injection & Jailbreaks                           │
│  ├── 2. Tool Misuse & Autonomous Exploitation                   │
│  ├── 3. Memory & Context Poisoning                              │
│  ├── 4. Multi-Agent & Protocol-Level Threats                    │
│  └── 5. Identity, Privilege & Supply Chain Risks                │
│                                                                  │
│  🔵 HARDENING TECHNIQUES (Proactive Defense)                    │
│  ├── 6. Prompt Hardening & Input Sanitization                   │
│  ├── 7. Runtime Sandboxing & Capability Confinement             │
│  ├── 8. Detection, Monitoring & Observability                   │
│  └── 9. Multi-Agent Security & Protocol Hardening               │
│                                                                  │
│  🟡 EVALUATION & TESTING (Measure & Validate)                   │
│  ├── 10. Red Teaming & Benchmarks                               │
│  └── 11. Datasets & Reproducible Research                       │
│                                                                  │
│  🟢 GOVERNANCE & STANDARDS (Institutional Guardrails)           │
│  └── 12. Frameworks, Standards & Compliance                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Alignment with Authoritative Sources

### OWASP Agentic Top 10 (2026)

| OWASP Risk | Our Category |
|------------|-------------|
| ASI01 – Prompt Injection | 1. Prompt Injection & Jailbreaks |
| ASI02 – Tool/Function Misuse | 2. Tool Misuse & Autonomous Exploitation |
| ASI03 – Excessive Agency | 5. Identity, Privilege & Supply Chain Risks |
| ASI04 – Memory Poisoning | 3. Memory & Context Poisoning |
| ASI05 – Privilege Escalation | 5. Identity, Privilege & Supply Chain Risks |
| ASI06 – Misaligned Behaviors | 8. Detection, Monitoring & Observability |
| ASI07 – Lack of Guardrails | 6. Prompt Hardening & Input Sanitization |
| ASI08 – Insufficient Monitoring | 8. Detection, Monitoring & Observability |
| ASI09 – Multi-Agent Exploitation | 4. Multi-Agent & Protocol-Level Threats |
| ASI10 – Cascading Hallucination | 9. Multi-Agent Security & Protocol Hardening |

### arXiv Academic Surveys

| Survey Category | Our Category |
|----------------|-------------|
| Prompt-based Attacks | 1. Prompt Injection & Jailbreaks |
| Tool-based Attacks | 2. Tool Misuse & Autonomous Exploitation |
| Memory-based Attacks | 3. Memory & Context Poisoning |
| Multi-Agent Attacks | 4. Multi-Agent & Protocol-Level Threats |
| Identity/Access Attacks | 5. Identity, Privilege & Supply Chain Risks |
| Input Sanitization Defense | 6. Prompt Hardening & Input Sanitization |
| Runtime Isolation Defense | 7. Runtime Sandboxing & Capability Confinement |
| Monitoring Defense | 8. Detection, Monitoring & Observability |
| Protocol Defense | 9. Multi-Agent Security & Protocol Hardening |

### Governance Frameworks

| Framework | Coverage |
|-----------|----------|
| NIST AI RMF Overlays | Risk management and governance |
| McKinsey Agentic AI Governance | Enterprise governance handbook |
| CSA AAGATE Platform | Cloud security alliance standards |
| Microsoft NIST-based Framework | Technical governance implementation |

## Threat-to-Hardening Mapping

Each threat category has a corresponding hardening category:

| Threat (🔴) | Hardening (🔵) |
|-------------|----------------|
| 1. Prompt Injection & Jailbreaks | 6. Prompt Hardening & Input Sanitization |
| 2. Tool Misuse & Autonomous Exploitation | 7. Runtime Sandboxing & Capability Confinement |
| 3. Memory & Context Poisoning | 8. Detection, Monitoring & Observability |
| 4. Multi-Agent & Protocol-Level Threats | 9. Multi-Agent Security & Protocol Hardening |
| 5. Identity, Privilege & Supply Chain | 7. Runtime Sandboxing (least privilege) + 12. Governance |

This mapping helps practitioners trace from a specific threat to its corresponding defense strategy.

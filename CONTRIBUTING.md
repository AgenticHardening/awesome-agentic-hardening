# Contributing to awesome-agentic-hardening

[中文版](docs/zh-CN/CONTRIBUTING.md)

Thank you for your interest in contributing! This project aims to be the most comprehensive and well-organized resource for agentic AI security hardening.

## How to Contribute

### Adding a Resource

1. **Fork** the repository
2. **Add** your resource to the appropriate category in `README.md` and `README_zh-CN.md`
3. **Submit** a pull request

### Resource Format

Each resource entry should follow this format:

```markdown
| [Resource Name](URL) | Type | Brief description (one sentence) |
```

**Type** should be one of:
- `📄 Paper` — Academic paper or technical report
- `🔧 Tool` — Open-source tool or library
- `📦 Framework` — Security framework or platform
- `📖 Guide` — Tutorial, guide, or best practice document
- `📊 Dataset` — Dataset or benchmark
- `🎯 CTF` — CTF challenge or red team exercise
- `📋 Standard` — Industry standard or compliance framework
- `🎥 Talk` — Conference talk or video presentation
- `📝 Blog` — Blog post or article

### Quality Standards

Before submitting, please ensure your resource:

- [ ] Is directly related to **agentic AI security** (not general LLM safety)
- [ ] Is placed in the **correct category** (refer to category descriptions)
- [ ] Has a **working link** that points to the original source
- [ ] Includes a **clear, concise description** in English
- [ ] Is **not a duplicate** of an existing entry
- [ ] Follows the **alphabetical order** within its category

### Category Guidelines

Our taxonomy follows the **"Attack Surface → Hardening → Evaluation → Governance"** pipeline:

| Category Range | Focus Area |
|----------------|------------|
| 1–5 | **Threat Landscape** — Attack vectors and threat modeling |
| 6–9 | **Hardening Techniques** — Defensive measures and controls |
| 10–11 | **Evaluation & Testing** — Benchmarks and validation |
| 12 | **Governance & Standards** — Policies and compliance |

If you're unsure which category fits, feel free to mention it in your PR description and we'll help place it.

### Bilingual Requirement

This project maintains both English (`README.md`) and Chinese (`README_zh-CN.md`) versions. When adding a resource:

- **Always** add the entry to `README.md` (English)
- **Optionally** add a translated entry to `README_zh-CN.md` (Chinese) — maintainers can help with translation if needed

## Suggesting a New Category

If you believe a new category is needed:

1. Open an **Issue** using the "Category Proposal" template
2. Describe the category scope and why existing categories don't cover it
3. Provide at least 3 example resources that would fit

## Reporting Issues

- **Broken links**: Open an issue with the "Broken Link" template
- **Incorrect categorization**: Open an issue or submit a PR with the correction
- **Duplicate entries**: Open an issue noting both entries

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Pull Request Process

1. Ensure your changes pass the automated link checks
2. Update both language versions if applicable
3. One resource per PR is preferred for faster reviews
4. Batch additions (e.g., all papers from a conference) are acceptable with clear descriptions

## Recognition

All contributors will be recognized in the project. Thank you for helping make agentic AI systems more secure! 🛡️

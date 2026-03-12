<p align="center">
  <img src="assets/logo.png" alt="awesome-agentic-hardening" width="200">
</p>

<h1 align="center">awesome-agentic-hardening</h1>

<p align="center">
  🛡️ 精选的 Agentic AI 系统安全加固工具、论文、框架与最佳实践列表
</p>

<p align="center">
  <a href="https://agentichardening.ai"><img src="https://img.shields.io/badge/🌐-agentichardening.ai-blue" alt="官网"></a>
  <a href="https://github.com/AgenticHardening/awesome-agentic-hardening"><img src="https://img.shields.io/github/stars/AgenticHardening/awesome-agentic-hardening?style=social" alt="Stars"></a>
  <a href="https://github.com/AgenticHardening/awesome-agentic-hardening/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="许可证"></a>
  <a href="https://github.com/sindresorhus/awesome"><img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/🇬🇧-English-blue" alt="English"></a>
  <a href="https://deepwiki.com/AgenticHardening/awesome-agentic-hardening"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</p>

<p align="center">
  涵盖提示词注入防御、运行时沙箱、协议安全、红队测试与治理标准
</p>

---

## 为什么需要这个列表？

Agentic AI 系统——基于 LLM 驱动的智能体，能够自主使用工具、访问数据并与其他智能体协作——引入了超越传统 LLM 漏洞的全新安全风险。本精选列表沿 **"攻击面 → 加固手段 → 评估验证 → 治理标准"** 主线组织资源，无论你从红队（攻击者）还是蓝队（防御者）视角出发，都能快速找到所需内容。

本分类体系对齐三大权威来源：

| 来源 | 覆盖范围 |
|------|----------|
| [OWASP Agentic Top 10 (2026)](https://genai.owasp.org/) | ASI01–ASI10 全部风险项 |
| [arXiv 学术综述](https://arxiv.org/html/2510.23883v2) | 五大威胁分类 + 四大防御分类 |
| NIST / McKinsey / CSA 治理框架 | 治理类别全覆盖 |

## 目录

- [威胁与攻击面](#威胁与攻击面)
  - [提示词注入与越狱攻击](#1-提示词注入与越狱攻击)
  - [工具滥用与自主利用](#2-工具滥用与自主利用)
  - [记忆与上下文投毒](#3-记忆与上下文投毒)
  - [多智能体与协议层威胁](#4-多智能体与协议层威胁)
  - [身份、权限与供应链风险](#5-身份权限与供应链风险)
- [加固技术](#加固技术)
  - [提示词加固与输入消毒](#6-提示词加固与输入消毒)
  - [运行时沙箱与能力限制](#7-运行时沙箱与能力限制)
  - [检测、监控与可观测性](#8-检测监控与可观测性)
  - [多智能体安全与协议加固](#9-多智能体安全与协议加固)
- [评估与测试](#评估与测试)
  - [红队测试与基准评测](#10-红队测试与基准评测)
  - [数据集与可复现研究](#11-数据集与可复现研究)
- [治理与标准](#治理与标准)
  - [框架、标准与合规](#12-框架标准与合规)
- [贡献指南](#贡献)

---

## 威胁与攻击面

> *知己知彼——了解 Agentic AI 系统的攻击面*

### 1. 提示词注入与越狱攻击

覆盖直接提示词注入（DPI）、间接提示词注入（IPI）、多模态注入（图像/音频/视频嵌入指令）、多语言混淆注入、Payload Splitting 等。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [Agentic AI Security: Threats, Defenses, Evaluation, and Open Challenges](https://arxiv.org/abs/2510.23883) | 📄 论文 | 全面综述，覆盖 Agentic AI 威胁分类体系（提示词注入、工具滥用、记忆投毒等）、防御策略与评估方法。（UC Davis，arXiv 2025） |

<sub>[回到顶部 ↑](#目录)</sub>

### 2. 工具滥用与自主利用

覆盖工具越权调用、自主漏洞利用（one-day CVE exploitation）、SQL 注入链、代码执行逃逸等。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| _即将添加_ | | |

<sub>[回到顶部 ↑](#目录)</sub>

### 3. 记忆与上下文投毒

覆盖长期记忆投毒、RAG 数据污染、会话上下文篡改。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| _即将添加_ | | |

<sub>[回到顶部 ↑](#目录)</sub>

### 4. 多智能体与协议层威胁

覆盖 MCP（模型上下文协议）和 A2A（智能体间通信）协议层攻击，包括假冒智能体注册、跨智能体传递式注入、协调操纵、通信信道投毒等。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [MCP Safety Audit](https://github.com/johnhalloran321/mcpSafetyScanner) | 🔧 工具 | 首个 MCP 服务器安全审计智能体工具。证明 MCP 设计存在严重安全漏洞，包括恶意代码执行、远程访问控制和凭证窃取。含 MCPSafetyScanner 工具。（arXiv 2025） |

<sub>[回到顶部 ↑](#目录)</sub>

### 5. 身份、权限与供应链风险

覆盖非人类身份（NHI）管理、权限滥用、凭证窃取、供应链投毒。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| _即将添加_ | | |

<sub>[回到顶部 ↑](#目录)</sub>

---

## 加固技术

> *主动防御——缩减 Agentic 系统的攻击面*

### 6. 提示词加固与输入消毒

覆盖提示词加固工程、输入/输出过滤、指令隔离、三明治防御（Sandwich Defense）、XML/Markdown 分隔符策略、基于释义的检测（paraphrase-based detection）等。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [MCP-Guard](https://arxiv.org/abs/2508.10991) | 📦 框架 | MCP 协议多层纵深防御框架。三阶段流水线：静态扫描 → 深度神经检测 → LLM 仲裁。检测精度达 96.01%。含 MCP-ATTACKBENCH 基准测试集（70,448 样本）。（arXiv 2025） |

<sub>[回到顶部 ↑](#目录)</sub>

### 7. 运行时沙箱与能力限制

覆盖运行时沙箱、最小权限工具调用、基于能力的访问控制（capability-based access control）。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| _即将添加_ | | |

<sub>[回到顶部 ↑](#目录)</sub>

### 8. 检测、监控与可观测性

覆盖行为异常检测、工具调用链审计、智能体行为画像、实时意图监控。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| _即将添加_ | | |

<sub>[回到顶部 ↑](#目录)</sub>

### 9. 多智能体安全与协议加固

覆盖协议级加固（MCP/A2A 认证与加密）、智能体身份验证、跨智能体信任链管理、通信信道完整性校验。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [G-Safeguard](https://github.com/wslong20/G-safeguard) | 🔧 工具 | 基于拓扑引导的 LLM 多智能体系统安全框架。利用图神经网络检测多智能体话语图异常，并通过拓扑干预进行攻击修复。在提示词注入攻击下恢复超过 40% 性能。（arXiv 2025） |

<sub>[回到顶部 ↑](#目录)</sub>

---

## 评估与测试

> *度量与验证——确保你的防御措施真正有效*

### 10. 红队测试与基准评测

覆盖安全评测基准（如 AgentHarm、InjectAgent、ASB）、红队工具、对抗性测试框架。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [AgentDojo](https://github.com/ethz-spylab/agentdojo) | 🔧 工具 | 动态评测框架，用于测试工具调用型 LLM Agent 的提示词注入攻防。含 97 个任务、629 个安全测试用例。（ETH Zurich，NeurIPS 2024） |
| [InjecAgent](https://github.com/uiuc-kang-lab/InjecAgent) | 📊 数据集 | 工具集成型 LLM Agent 的间接提示词注入基准测试。含 1,054 个测试用例，覆盖 17 种用户工具和 62 种攻击者工具。（UIUC，ACL 2024 Findings） |
| [Agent Security Bench (ASB)](https://github.com/agiresearch/ASB) | 📦 框架 | 全面的 LLM Agent 攻防形式化与基准测试框架。含 10 个场景、10 个智能体、400+ 工具、27 种攻防方法、7 项评估指标。最高平均攻击成功率 84.30%。（Rutgers，ICLR 2025） |

<sub>[回到顶部 ↑](#目录)</sub>

### 11. 数据集与可复现研究

覆盖公开的攻击/防御数据集、可复现实验、CTF 挑战赛资源。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| _即将添加_ | | |

<sub>[回到顶部 ↑](#目录)</sub>

---

## 治理与标准

> *制度保障——政策、标准与合规框架*

### 12. 框架、标准与合规

覆盖 OWASP Agentic Top 10、NIST AI RMF Overlays、微软 NIST-based 治理框架、CSA AAGATE 平台、McKinsey Agentic AI 治理手册等。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [OWASP Top 10 for Agentic Applications (2026)](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) | 📋 标准 | 同行评审框架，识别自主 AI Agent 的 10 大关键安全风险（ASI01–ASI10）。由 100+ 位专家共同开发。 |

<sub>[回到顶部 ↑](#目录)</sub>

---

## 贡献

欢迎贡献！提交 Pull Request 前请先阅读我们的[贡献指南](CONTRIBUTING.md)。

也请查看我们的[行为准则](CODE_OF_CONDUCT.md)。

## 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

本作品采用 [CC0 1.0 通用](LICENSE) 许可协议。

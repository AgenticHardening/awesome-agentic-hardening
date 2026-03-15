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
| [The Attack and Defense Landscape of Agentic AI](https://arxiv.org/abs/2603.11088) | 📄 论文 | Agentic AI 安全系统性综述，覆盖设计空间分析、完整攻击面与防御机制。含多个案例研究，揭示现有防御的薄弱环节。已被 USENIX Security 2026 接收。（UC Berkeley/UIUC，arXiv 2026） |
| [Palo Alto Unit 42: Web-Based Indirect Prompt Injection](https://unit42.paloaltonetworks.com/ai-agent-prompt-injection/) | 📄 报告 | Unit 42 实战威胁情报报告，记录攻击者如何在网页内容中嵌入间接提示词注入以劫持 AI Agent，含在野攻击实际案例。（Palo Alto Networks，2026） |
| [Palo Alto Unit 42: New Prompt Injection Attack Vectors Through MCP Sampling](https://unit42.paloaltonetworks.com/model-context-protocol-attack-vectors/) | 📄 报告 | 揭示 MCP Sampling 的三种新型攻击向量：**资源耗尽**（滥用 AI 计算配额）、**会话劫持**（持久化隐藏指令进行数据外泄）、**隐蔽工具调用**（在用户不知情时执行文件系统操作）。根因：MCP Sampling 采用隐式信任模型，无内置安全控制，允许服务端直接控制提示词内容并操纵 LLM 响应。（Palo Alto Networks，2025 年 12 月） |

<sub>[回到顶部 ↑](#目录)</sub>

### 2. 工具滥用与自主利用

覆盖工具越权调用、自主漏洞利用（one-day CVE exploitation）、SQL 注入链、代码执行逃逸等。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [ToolHijacker](https://arxiv.org/abs/2504.19793) | 📄 论文 | 首个针对 LLM Agent 工具选择的提示词注入攻击。通过注入恶意工具文档操纵检索与选择过程，攻击成功率达 96.7%。现有防御（StruQ、SecAlign、PPL 检测）均被证明无效。（HUST/Duke，NDSS 2026） |

<sub>[回到顶部 ↑](#目录)</sub>

### 3. 记忆与上下文投毒

覆盖长期记忆投毒、RAG 数据污染、会话上下文篡改。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [A-MemGuard](https://github.com/TangciuYueng/AMemGuard) | 📦 框架 | 首个 LLM Agent 记忆主动防御框架。结合共识验证与双记忆结构（从过去失败中提取"教训"）。将攻击成功率降低超过 95%，开销极小。（OSU/Indiana，arXiv 2025） |

<sub>[回到顶部 ↑](#目录)</sub>

### 4. 多智能体与协议层威胁

覆盖 MCP（模型上下文协议）和 A2A（智能体间通信）协议层攻击，包括假冒智能体注册、跨智能体传递式注入、协调操纵、通信信道投毒等。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [MCP Safety Audit](https://github.com/johnhalloran321/mcpSafetyScanner) | 🔧 工具 | 首个 MCP 服务器安全审计智能体工具。证明 MCP 设计存在严重安全漏洞，包括恶意代码执行、远程访问控制和凭证窃取。含 MCPSafetyScanner 工具。（arXiv 2025） |
| [From Prompt Injections to Protocol Exploits](https://www.sciencedirect.com/science/article/pii/S2405959525001997) | 📄 论文 | 首个统一的端到端威胁模型，同时覆盖主机-工具和智能体-智能体通信通道。涵盖 MCP/A2A 协议层攻击面与防御分类体系。（ScienceDirect，2025） |
| [Agentic AI as a Cybersecurity Attack Surface](https://arxiv.org/abs/2602.19555) | 📄 论文 | 提出"病毒式智能体循环"（Viral Agent Loop）概念——利用多智能体信任链的自传播生成式蠕虫。提出零信任运行时架构（Zero-Trust Runtime Architecture），通过加密意图证明约束工具执行。（arXiv 2026） |
| [Security Analysis of the Model Context Protocol Specification](https://arxiv.org/abs/2601.17549) | 📄 论文 | 对 MCP 协议规范本身（而非实现）进行系统性安全审计。识别设计级缺陷，包括智能体间信任链利用和跨会话攻击路径——从规范层面补充了工具层扫描器的不足。（arXiv，2026 年 1 月） |

<sub>[回到顶部 ↑](#目录)</sub>

### 5. 身份、权限与供应链风险

覆盖非人类身份（NHI）管理、权限滥用、凭证窃取、供应链投毒。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [Securing the AI Agent Revolution: A Practical Guide to MCP Security](https://www.coalitionforsecureai.org/securing-the-ai-agent-revolution-a-practical-guide-to-mcp-security/) | 📋 白皮书 | AI 安全联盟（CoSAI）MCP 安全最佳实践白皮书。涵盖 SPIFFE/SPIRE 工作负载身份、OAuth Token Exchange（RFC 8693）防止混淆代理攻击，以及注册表级别的供应链信任。 |
| [MCP Supply Chain Security & Risks](https://mcpmanager.ai/blog/mcp-supply-chain-security/) | 📄 文章 | 分析广泛使用的 MCP 服务器（Asana、Smithery、GitHub 等）中的供应链风险。涵盖 rugpull / 静默更新投毒攻击模式与缓解策略。 |
| [WEF: Non-Human Identities — Agentic AI's New Frontier of Cybersecurity Risk](https://www.weforum.org/stories/2025/10/non-human-identities-ai-cybersecurity/) | 📄 文章 | 世界经济论坛（WEF）从国家政策和密码学基础设施视角分析非人类身份（NHI）风险。多数零信任架构仅覆盖人类身份层，Agent API 密钥、服务账户和认证令牌处于治理盲区。引用 NSM-10、EO 14028 和 OMB M-23-02 实时加密资产清单要求，并强调后量子密码学（PQC）转型的紧迫性。（WEF，2025 年 10 月） |
| [Supply Chain Attacks 2026: From SolarWinds to AI Agent Compromise](https://dig8ital.com/articles/supply-chain-attacks-ai-era/) | 📄 文章 | AI 供应链攻击演进的深度技术分析，涵盖：**生成式投毒**（被污染模型按客户定制生成恶意载荷）、**共享上下文提示词注入**（通过第三方集成污染 RAG 数据源）、**对话隐写术**（通过自然语言编码隐蔽外泄敏感数据）。将攻击路径从 MCP 服务器层扩展至模型训练和推理管线。（2026 年 2 月） |
| [NHIcon 2026: Agentic AI and Security — Paradigm Shifts](https://nhimg.org/community/non-human-identity-management-general-discussions/agentic-ai-and-security-paradigm-shifts-from-nhicon-2026-insights/) | 📋 报告 | 非人类身份管理社区年度大会（NHIcon 2026）总结。系统性记录 AI Agent 对身份、信任和访问管理架构的范式级影响。提出专为 Agentic AI 设计的 NHI 治理框架——唯一聚焦 NHI 治理实践的社区级文档。与 CoSAI 白皮书和 IBM 指南互补。（2026 年 2 月） |

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
| [MELON](https://github.com/kaijiezhu11/MELON) | 🔧 工具 | 可证明的间接提示词注入（IPI）防御。通过掩码重新执行与工具对比检测攻击，防御超过 99% 的攻击同时保持实用性。（UCSB/Microsoft，ICML 2025） |

<sub>[回到顶部 ↑](#目录)</sub>

### 7. 运行时沙箱与能力限制

覆盖运行时沙箱、最小权限工具调用、基于能力的访问控制（capability-based access control）。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [MCP November 2025 Specification](https://modelcontextprotocol.io/specification/2025-11-25) | 📋 标准 | MCP 官方规范更新，引入异步执行、OAuth 2.1 授权流程和注册表级供应链信任。为多智能体部署定义了最小权限工具调用的能力范围（capability scoping）。 |
| [Best MCP Gateways & AI Agent Security Tools (2026)](https://www.integrate.io/blog/best-mcp-gateways-and-ai-agent-security-tools/) | 📋 指南 | MCP 网关解决方案全面对比，涵盖 OAuth 2.0 封装、最小权限端点执行、SOC 2 审计追踪和实时工具调用监控。（Integrate.io，2026） |

<sub>[回到顶部 ↑](#目录)</sub>

### 8. 检测、监控与可观测性

覆盖行为异常检测、工具调用链审计、智能体行为画像、实时意图监控。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [DRIFT](https://github.com/SaFoLab-WISC/DRIFT) | 📦 框架 | 动态规则隔离防御框架。安全规划器构建最小函数轨迹，动态验证器监控偏离，注入隔离器从记忆流中屏蔽冲突指令。在 AgentDojo 和 ASB 上验证有效。（UW-Madison，NeurIPS 2025） |
| [Lasso Security](https://www.lasso.security/) | 🔧 工具 | Agentic AI SaaS 可观测性平台。提供智能体-工具交互持续发现、上下文感知风险评分，以及多智能体管线的实时行为异常告警。 |

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
| [AgentHarm](https://huggingface.co/datasets/ai-safety-institute/AgentHarm) | 📊 数据集 | LLM Agent 危害性评测基准。含 110 个恶意任务（440 个增强版），覆盖 11 种危害类别。揭示前沿 LLM 在未越狱情况下即对恶意请求高度服从。（Gray Swan/UK AISI，ICLR 2025） |

<sub>[回到顶部 ↑](#目录)</sub>

### 11. 数据集与可复现研究

覆盖公开的攻击/防御数据集、可复现实验、CTF 挑战赛资源。

<!-- prettier-ignore -->
| 资源 | 类型 | 描述 |
|------|------|------|
| [MCP-ATTACKBENCH](https://arxiv.org/abs/2508.10991) | 📊 数据集 | 大规模基准数据集，含 70,448 个样本，用于评估 MCP 协议下 LLM-工具交互安全。覆盖提示词注入、工具劫持和协议层攻击变体。随 MCP-Guard 一起发布。（arXiv 2025） |

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
| [ISO/IEC 42001:2023 AI Management System](https://www.iso.org/standard/81230.html) | 📋 标准 | 国际 AI 管理系统标准。日益成为企业 Agentic AI 部署中与 NIST AI RMF 并列的强制合规基线。覆盖风险管理、透明度和问责要求。 |
| [TRiSM for Agentic AI](https://www.sciencedirect.com/science/article/pii/S2666651026000069) | 📄 论文 | Agentic AI 信任、风险与安全管理（TRiSM）框架综合评述。分析 arXiv 论文从 890 篇增长至 18,500+ 篇（2019–2024）的趋势，并梳理治理空白。（ScienceDirect，2026） |
| [IBM: A Guide to Agentic AI Security](https://www.ibm.com/think/insights/agentic-ai-security) | 📋 指南 | 企业级指南，涵盖 Agentic AI 部署中的身份联邦、最小权限原则和合规对齐。（IBM，2026 年 2 月） |

<sub>[回到顶部 ↑](#目录)</sub>

---

## 贡献

欢迎贡献！提交 Pull Request 前请先阅读我们的[贡献指南](CONTRIBUTING.md)。

也请查看我们的[行为准则](CODE_OF_CONDUCT.md)。

## 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

本作品采用 [CC0 1.0 通用](LICENSE) 许可协议。

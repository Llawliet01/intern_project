// Unified content database for Aetheris Systems

export const servicesData = {
  "custom-development": {
    title: "Custom Software Engineering",
    tagline: "Bespoke digital engines engineered for scale, reliability, and business impact.",
    description: "We design, build, and maintain custom software platforms tailored to your business operations. Our engineering methodology combines clean code, modern architectures, and robust security protocols.",
    metrics: [
      { value: "100%", label: "Cloud-Native Delivery" },
      { value: "2x", label: "Feature Velocity" },
      { value: "99.99%", label: "Application Uptime" }
    ],
    features: [
      "Custom Enterprise Platforms & ERPs",
      "Robust REST & GraphQL API Architectures",
      "High-Performance Database Systems (SQL & NoSQL)",
      "Legacy Monolith Modernization & Microservices Extraction"
    ],
    challenge: "Traditional software solutions fail to address unique workflow requirements, leading to fragmented processes, integration bottlenecks, and expensive maintenance of legacy monoliths.",
    solution: "We engineer customized, cloud-native platforms that map exactly to your workflows, integrating cleanly with your existing ecosystem while scaling dynamically.",
    techStack: ["Node.js", "Python", "Go", "PostgreSQL", "Kubernetes", "AWS"]
  },
  "mobile-apps": {
    title: "Native & Cross-Platform Mobile Engineering",
    tagline: "High-performance, immersive mobile applications for iOS and Android.",
    description: "We build intuitive, fluid mobile applications that provide excellent native experiences. Using both native tools and cross-platform frameworks, we deliver secure and high-speed applications.",
    metrics: [
      { value: "4.9★", label: "Average App Store Rating" },
      { value: "sub-100ms", label: "Interface Latency" },
      { value: "99.9%", label: "Crash-Free Sessions" }
    ],
    features: [
      "Native Swift & Kotlin Development",
      "Cross-Platform Mastery (Flutter & React Native)",
      "Offline-First Architectures & Real-Time Syncing",
      "App Store Optimization & Regulatory Compliance"
    ],
    challenge: "Users expect instantaneous responsiveness and intuitive user journeys, while organizations struggle with code fragmentation across iOS and Android platforms.",
    solution: "We deliver unified mobile applications with sub-100ms interface latencies and offline capabilities, streamlining codebases using Flutter or React Native without sacrificing performance.",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"]
  },
  "cloud-sre": {
    title: "Cloud Infrastructure & SRE",
    tagline: "Automated, secure, and infinitely scalable cloud environments.",
    description: "We design cloud-native architectures that eliminate single points of failure. By implementing GitOps, automated pipelines, and continuous reliability engineering, we maximize uptime and minimize costs.",
    metrics: [
      { value: "-40%", label: "Infrastructure Spend" },
      { value: "99.99%", label: "SLA Uptime" },
      { value: "<5 min", label: "Disaster Recovery Time" }
    ],
    features: [
      "Multi-Cloud Architectures (AWS, GCP, Azure)",
      "Infrastructure as Code (Terraform & Pulumi)",
      "GitOps-Driven CI/CD Automated Pipelines",
      "24/7 Site Reliability Engineering & Scaling"
    ],
    challenge: "Uncontrolled cloud spending, configuration drift, and manual deployments limit scaling and introduce significant security risks.",
    solution: "We automate entire cloud environments using Terraform, enabling GitOps-driven pipelines that scale automatically and reduce operational overhead.",
    techStack: ["AWS", "GCP", "Kubernetes", "Terraform", "GitLab CI", "Prometheus"]
  },
  "api-integrations": {
    title: "Enterprise API Design & Integration",
    tagline: "Connecting disparate platforms into a unified, real-time ecosystem.",
    description: "We construct secure API layers, middleware, and microservices that enable systems to communicate seamlessly, helping you leverage third-party APIs or open your data to external partners.",
    metrics: [
      { value: "50M+", label: "Daily API Calls Handled" },
      { value: "<50ms", label: "Average API Response Time" },
      { value: "100%", label: "Secure TLS Encryption" }
    ],
    features: [
      "Secure GraphQL, REST, and gRPC APIs",
      "Enterprise Service Bus & API Gateways",
      "Third-Party Service Integration & Syncing",
      "API Versioning, Auditing, and Documentation"
    ],
    challenge: "Data silos and fragmented systems prevent real-time decision-making and block modern digital integrations.",
    solution: "We design high-frequency API gateways and secure middleware that aggregate disparate database layers and services into a fast, unified data pipeline.",
    techStack: ["Node.js", "Go", "GraphQL", "gRPC", "Kong API Gateway", "Redis"]
  },
  "qa-performance": {
    title: "QA Automation & Performance Engineering",
    tagline: "Zero-defect deployments through automated quality gates.",
    description: "We design automated testing frameworks that run continuously inside your CI/CD pipelines, validating functionality, security compliance, and performance limits at scale.",
    metrics: [
      { value: "98%", label: "Automated Test Coverage" },
      { value: "10x", label: "Faster Quality Cycles" },
      { value: "0", label: "Regression Bugs in Prod" }
    ],
    features: [
      "End-to-End Automated Testing Pipelines",
      "Load, Stress, and Peak Performance Testing",
      "Security Scanning & Compliance Audits",
      "Continuous Integration Testing Frameworks"
    ],
    challenge: "Manual QA processes slow down feature delivery, increase release risks, and let critical regression bugs slip into production.",
    solution: "We build automated testing matrices (Playwright, Cypress) that execute on every code commit, validating system performance under heavy simulated loads.",
    techStack: ["Playwright", "Cypress", "JMeter", "GitHub Actions", "SonarQube"]
  },
  "managed-support": {
    title: "24/7 Managed Platform Support",
    tagline: "Continuous monitoring, rapid incident response, and upgrades.",
    description: "We offer tiered SLA-driven managed support to keep your critical business systems operational. Our incident handlers and SRE team monitor performance, patch vulnerabilities, and assist 24/7.",
    metrics: [
      { value: "<15 min", label: "Guaranteed SLA Response" },
      { value: "24/7/365", label: "Active Live Monitoring" },
      { value: "99.95%", label: "Incident Resolution Rate" }
    ],
    features: [
      "SLA-Backed Incident Detection & Resolution",
      "Security Patching & Kernel Upgrades",
      "Proactive Database Tuning & Backups",
      "Dedicated Helpdesk & Technical Advisory"
    ],
    challenge: "System outages occur outside of business hours, and internal teams struggle with the overhead of maintaining 24/7 shifts.",
    solution: "We act as your dedicated infrastructure division, monitoring metrics continuously and patching software vulnerabilities before they manifest as outages.",
    techStack: ["Datadog", "PagerDuty", "Grafana", "Slack Integration", "Jira Service Desk"]
  },
  "cybersecurity": {
    title: "Cybersecurity & Compliance Engineering",
    tagline: "Hardening your digital perimeter against sophisticated threats.",
    description: "We audit, architect, and monitor software systems to align with enterprise security benchmarks. From penetration testing to compliance consulting, we secure your core intellectual property.",
    metrics: [
      { value: "100%", label: "Compliance Readiness" },
      { value: "Zero", label: "Data Breaches Recorded" },
      { value: "Grade A", label: "Penetration Audit Score" }
    ],
    features: [
      "Penetration Testing & Vulnerability Assessment",
      "SOC2, ISO27001, and HIPAA Audits & Alignment",
      "Zero-Trust Networks & Role-Based Access Control",
      "Secure Software Development Lifecycle Setup"
    ],
    challenge: "Ransomware, compliance failures, and data breaches cost millions and permanently damage corporate trust.",
    solution: "We implement zero-trust network configurations and automate vulnerability scanning across your repositories to block attacks proactively.",
    techStack: ["Vault", "OpenVAS", "OWASP ZAP", "AWS IAM", "Cloudflare WAF"]
  },
  "data-ai": {
    title: "Data Engineering & Applied AI",
    tagline: "Transforming raw data pipelines into intelligent business engines.",
    description: "We architect high-volume data lakehouses, schedule automated ETL pipelines, and deploy custom Machine Learning models to optimize decision making and automate workflows.",
    metrics: [
      { value: "100x", label: "Analytics Query Speedup" },
      { value: "PB-Scale", label: "Data Pipeline Capability" },
      { value: "90%", label: "Prediction Accuracy" }
    ],
    features: [
      "Enterprise Data Lakehouses & Warehousing",
      "Automated ETL/ELT Streaming Pipelines",
      "Applied LLMs & Retrieval-Augmented Generation",
      "MLOps Pipelines & Production Deployment"
    ],
    challenge: "Organizations compile petabytes of raw data but remain unable to query it quickly or derive actionable predictions from it.",
    solution: "We implement analytical data warehouses (Snowflake/BigQuery) and connect streaming pipelines (Spark) to run custom AI recommendation models.",
    techStack: ["Python", "Apache Spark", "Airflow", "Snowflake", "TensorFlow", "Kubeflow"]
  },
  "ux-ui": {
    title: "UX/UI & Product Design",
    tagline: "Engineering visual harmony and frictionless user journeys.",
    description: "We combine behavioral research, interface heuristics, and functional components to design digital systems that are enjoyable to use, ensuring accessible and accessible products.",
    metrics: [
      { value: "+45%", label: "Conversion Rate Increase" },
      { value: "100%", label: "WCAG 2.1 AA Compliance" },
      { value: "0", label: "Visual Inconsistencies" }
    ],
    features: [
      "In-Depth User Research & Heuristic Reviews",
      "Scalable Design Systems & Theme tokens",
      "High-Fidelity Interactive Prototypes",
      "Accessibility Auditing & WCAG Remediation"
    ],
    challenge: "Complex product interfaces frustrate users, leading to high drop-off rates and increased customer service overhead.",
    solution: "We build scalable design libraries and prototype refined user flows that reduce interface complexity and ensure full accessibility compliance.",
    techStack: ["Figma", "Tailwind CSS", "Storybook", "React Components", "Adobe CC"]
  }
};

export const solutionsData = {
  "saas": {
    title: "SaaS Scaling Solutions",
    description: "Accelerate your software-as-a-service application with robust multi-tenant architectures, subscription engine integrations, dynamic resource allocation, and zero-downtime deployment pipelines.",
    features: [
      "Highly Isolated Multi-Tenant Database Patterns",
      "Seamless Stripe & Billing Engine Orchestration",
      "Granular Subscription Entitlements & Metering",
      "Real-time Usage Dashboards & User Analytics"
    ],
    metrics: [
      { value: "10x", label: "Scaling Headroom" },
      { value: "<2s", label: "Tenant Provisioning" },
      { value: "99.99%", label: "API Availability" }
    ],
    challenge: "SaaS platforms often face high latency during traffic spikes and security risks regarding database tenant isolation.",
    solution: "We implement dynamic resource isolation using schema-based multi-tenancy and configure horizontal auto-scaling nodes to manage volatile user volumes.",
    techStack: ["Node.js", "Kubernetes", "PostgreSQL", "Redis", "Stripe API"]
  },
  "fintech": {
    title: "FinTech Compliance & Core Platforms",
    description: "Secure, transaction-safe, and fully compliant financial platforms. We build custom ledger systems, integrate payment processors, and audit systems for PCI-DSS compliance.",
    features: [
      "Double-Entry Ledgers & Immutable Audit Logs",
      "PCI-DSS Tier 1 Security Implementations",
      "KYC/AML Automated Verification Integrations",
      "High-frequency Transaction Routing Systems"
    ],
    metrics: [
      { value: "Zero", label: "Ledger Discrepancies" },
      { value: "<100ms", label: "Transaction Settlement" },
      { value: "Grade A", label: "Security Compliance Score" }
    ],
    challenge: "Financial software requires strict transaction isolation, low latency, and adherence to strict regulatory standard audits.",
    solution: "We construct ledger databases backed by strict consistency guarantees, utilizing secure, containerized environments for payment data processing.",
    techStack: ["Go", "Java", "PostgreSQL", "Kafka", "AWS HSM", "Cloudflare"]
  },
  "healthcare": {
    title: "HIPAA Compliant Healthcare Solutions",
    description: "Secure health-tech software designed to improve patient care while complying with regulatory requirements. We build EHR integrations, telehealth portals, and medical analytics systems.",
    features: [
      "End-to-End Encryption for Patient Health Info",
      "Strict Audit Logging & Access Authentication",
      "HL7 & FHIR Interoperability Integrations",
      "Telehealth Video Streaming & Scheduling"
    ],
    metrics: [
      { value: "100%", label: "HIPAA Compliance Ready" },
      { value: "AES-256", label: "Data Encryption" },
      { value: "99.95%", label: "Video Call Quality SLA" }
    ],
    challenge: "Medical applications struggle to combine ease of use with the high security compliance standards required for patient records.",
    solution: "We implement automated encryption at rest and in transit, auditing access records to ensure complete HIPAA compliance.",
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "WebRTC", "Auth0"]
  },
  "retail": {
    title: "Retail & Omni-Channel eCommerce Engine",
    description: "Unified commerce platforms integrating brick-and-mortar operations with online stores. Features include real-time inventory management, unified POS syncing, and personalized checkouts.",
    features: [
      "Real-time Inventory Sync Across Channels",
      "Custom High-Speed Checkout & Cart Engines",
      "AI-driven Product Recommendations",
      "Unified POS & Warehousing API Interfaces"
    ],
    metrics: [
      { value: "+30%", label: "Conversion Rate Growth" },
      { value: "sub-200ms", label: "Inventory Sync Sync" },
      { value: "100K+", label: "Concurrent Cart Support" }
    ],
    challenge: "Inventory discrepancies across physical stores and online portals lead to cancelled orders and poor user experiences.",
    solution: "We build an event-driven stock synchronization engine using Kafka, pushing inventory updates instantly to all platforms.",
    techStack: ["React Native", "Next.js", ".NET Core", "MongoDB", "Kafka", "Elasticsearch"]
  }
};

export const productsData = {
  "icedeploy": {
    name: "IceDeploy",
    tagline: "Automate your release pipelines. Ship code safely and constantly.",
    description: "IceDeploy is an enterprise-grade delivery manager designed to orchestrate deployments across multi-cloud clusters. With built-in canary checks, automated rollback systems, and unified log visualization, your product teams can launch features without operational risk.",
    features: [
      "Canary & Blue-Green Orchestration Gates",
      "Automatic Rollover Triggered by Error Budgets",
      "Multi-Cluster Kubernetes Configuration Sync",
      "Integrated Security Scanning & Vulnerability Checks"
    ],
    metrics: [
      { value: "-75%", label: "Deployment Failure Rate" },
      { value: "5 min", label: "Average Rollback Speed" },
      { value: "4x", label: "Increase in Ship Velocity" }
    ],
    techStack: ["Go", "Kubernetes API", "Terraform", "Rust", "React", "gRPC"]
  },
  "iceinsight": {
    name: "IceInsight",
    tagline: "Real-time analytics engine. Convert database raw events to insight.",
    description: "IceInsight is a lightweight event aggregator and metrics visualizer. It hooks directly into your database replication streams and application logs, compiling metrics in real time. Predict traffic spikes, discover system bottlenecks, and build analytics dashboards instantly.",
    features: [
      "Non-intrusive CDC (Change Data Capture) Integration",
      "Sub-second Aggregation of High-Volume Logs",
      "Custom Dashboard Constructor & Alert Engine",
      "Machine-Learning System Load Forecasting"
    ],
    metrics: [
      { value: "sub-10ms", label: "Event Pipeline Latency" },
      { value: "100M+", label: "Events Compiled Daily" },
      { value: "40%", label: "Reduction in Debugging Time" }
    ],
    techStack: ["Rust", "Python", "ClickHouse", "Kafka", "React", "D3.js"]
  }
};

export const caseStudiesData = {
  "banking-core-modernization": {
    title: "Banking Core System Modernization",
    client: "NeoBank Digital",
    industry: "FinTech",
    duration: "18 months",
    description: "Migrated monolithic banking system to cloud-native microservices architecture with zero downtime.",
    metrics: [
      { value: "100%", label: "Migration" },
      { value: "0 hours", label: "Downtime" },
      { value: "+3x", label: "Performance" },
      { value: "-40%", label: "Cost Reduction" }
    ],
    challenge: "NeoBank Digital was running on a 15-year-old monolithic Java application that was becoming impossible to maintain. Every deployment required 6-hour maintenance windows, and adding new features took months due to tight coupling. They needed to modernize their entire core banking system while serving 5M+ customers without any downtime or data loss - a mission-critical transformation.",
    solution: "We executed a phased migration to modern cloud-native architecture with zero downtime. Using the Strangler Pattern, we incrementally extracted 45 microservices from the monolith over 18 months, running both systems in parallel using feature flags. We implemented Kafka-based event streaming for real-time data synchronization and migrated to a Multi-Cloud configuration with Kubernetes orchestration.",
    techStack: ["Java 17", "Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL", "Kubernetes", "Terraform", "Datadog"]
  },
  "edtech-lms-platform": {
    title: "EdTech Learning Management System",
    client: "LearnHub India",
    industry: "EdTech",
    duration: "8 months",
    description: "Built scalable LMS platform supporting 500K+ concurrent users with live video streaming and interactive assessments.",
    metrics: [
      { value: "500K+", label: "Concurrent Users" },
      { value: "<3s", label: "Video Latency" },
      { value: "High", label: "Completion Rate" }
    ],
    challenge: "LearnHub's existing e-learning system crashed repeatedly during peak study hours. The interactive virtual classrooms had high video lag, leading to low completion rates and student frustration.",
    solution: "We rebuilt their virtual classroom framework from the ground up using WebRTC and Node.js backend cluster, caching user profiles in Redis to manage concurrent authentication requests.",
    techStack: ["React", "Node.js", "WebRTC", "MongoDB", "Redis", "Multi-Cloud"]
  },
  "fintech-scale-up": {
    title: "FinTech Scale-Up: 10x Transaction Volume",
    client: "PayFlow Systems",
    industry: "FinTech",
    duration: "9 months",
    description: "Scaled payment processing infrastructure to handle massive transaction volume while achieving enterprise security compliance.",
    metrics: [
      { value: "10x", label: "Transaction Growth" },
      { value: "<100ms", label: "P95 Latency" },
      { value: "Enterprise", label: "Uptime" }
    ],
    challenge: "PayFlow Systems faced significant latency during payment reconciliation cycles, resulting in transactional timing failures and compliance issues.",
    solution: "We restructured their transactional ledger using database partition logic and optimized gRPC microservices to process high-velocity requests.",
    techStack: ["Node.js", "PostgreSQL", "Multi-Cloud", "Kubernetes", "gRPC", "Kafka"]
  },
  "government-citizen-portal": {
    title: "Government Citizen Services Portal",
    client: "Municipal Corporation",
    industry: "Public Sector",
    duration: "15 months",
    description: "Unified government services into a single secure platform handling 1M+ daily citizens.",
    metrics: [
      { value: "50+", label: "Services" },
      { value: "1M+", label: "Daily Users" },
      { value: "-90%", label: "Processing Time" },
      { value: "100%", label: "Security Compliance" }
    ],
    challenge: "Citizens were forced to visit government offices in person for everything from birth certificates to business licenses. With 50+ different services across multiple departments, each had separate forms, processes, and long waiting times.",
    solution: "We designed a unified Citizen Services Portal, integrating Aadhaar-based multi-factor authentication, digital document validation, and streamlined backend workflows to reduce processing latency by 90%.",
    techStack: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Kubernetes", "NIC Cloud"]
  },
  "healthcare-analytics": {
    title: "Healthcare Analytics Platform",
    client: "MediData Insights",
    industry: "Healthcare",
    duration: "12 months",
    description: "Built secure analytics platform for healthcare providers with real-time dashboards and secure PHI handling.",
    metrics: [
      { value: "10M+", label: "Data Processing" },
      { value: "Certified", label: "Security" },
      { value: "High", label: "User Adoption" }
    ],
    challenge: "Medical providers lacked a centralized analytical tool to track clinical outcomes, while having to adhere to strict HIPAA compliance.",
    solution: "We constructed an encrypted data warehouse utilizing role-based access rules and developed a clean dashboard visualization interface using React.",
    techStack: ["Python", "React", "Cloud Platform", "Security", "FastAPI", "BigQuery"]
  },
  "hospitality-booking-system": {
    title: "Hotel Chain Booking Platform",
    client: "GrandStay Hotels",
    industry: "Hospitality",
    duration: "10 months",
    description: "Unified booking system across 150+ properties with dynamic pricing AI integration.",
    metrics: [
      { value: "+60%", label: "Bookings" },
      { value: "+35%", label: "Revenue/Room" },
      { value: "<2s", label: "Load Time" },
      { value: "150+", label: "Properties" }
    ],
    challenge: "GrandStay Hotels operated 150+ properties but each used different booking systems. This fragmentation created inventory chaos, pricing inconsistencies, and a terrible customer experience with 70% mobile cart abandonment.",
    solution: "We engineered a unified core booking engine, integrating a machine-learning pricing model to calculate rates dynamically based on hotel occupancies.",
    techStack: ["React", "Next.js", "Node.js", "MySQL", "Redis", "Kubernetes", "S3"]
  },
  "insurance-digital-platform": {
    title: "Insurance Digital Transformation",
    client: "SecureLife Insurance",
    industry: "Insurance",
    duration: "14 months",
    description: "Digitized legacy insurance processes with online policy management and claims processing portals.",
    metrics: [
      { value: "Reduced", label: "Process Time" },
      { value: "High", label: "Customer Satisfaction" },
      { value: "Significant", label: "Cost Savings" }
    ],
    challenge: "SecureLife processed claims manually using spreadsheets, taking up to 3 weeks per claim and generating high processing overhead.",
    solution: "We deployed an automated claims processing flow that parses insurance applications using optical character recognition, accelerating approvals.",
    techStack: ["Java", "Spring Boot", "Oracle", "Multi-Cloud", "React", "OpenCV"]
  },
  "logistics-tracking-system": {
    title: "Real-Time Logistics Tracking",
    client: "SwiftShip Logistics",
    industry: "Logistics",
    duration: "11 months",
    description: "Implemented IoT-based fleet tracking and predictive maintenance scheduling.",
    metrics: [
      { value: "99.8%", label: "Tracking Accuracy" },
      { value: "25%", label: "Fuel Savings" },
      { value: "-30%", label: "Delivery Time" },
      { value: "5000+", label: "Fleet Size" }
    ],
    challenge: "SwiftShip Logistics was operating blind with no real-time tracking of their 5000+ vehicle fleet. Customers had no visibility into deliveries, route planning was inefficient, and unexpected breakdowns caused major delays and cost overruns.",
    solution: "We deployed MQTT-enabled IoT sensors on their fleet and engineered a tracking dashboard using TimescaleDB to handle telemetry feeds.",
    techStack: ["Python", "Django", "PostgreSQL", "TimescaleDB", "Redis", "Kafka", "GPS Modules", "MQTT"]
  },
  "manufacturing-iot-platform": {
    title: "Smart Manufacturing IoT Platform",
    client: "TechManufacture Ltd",
    industry: "Manufacturing",
    duration: "15 months",
    description: "Centralized predictive maintenance monitoring across 20+ automated factories.",
    metrics: [
      { value: "-65%", label: "Downtime" },
      { value: "+40%", label: "OEE Improvement" },
      { value: "10K+", label: "Sensors Connected" },
      { value: "95%", label: "Maintenance Prediction" }
    ],
    challenge: "TechManufacture Ltd was losing ₹5 crores annually to unplanned equipment failures. With 20+ factories and thousands of machines, they had no way to predict failures or monitor production efficiency in real-time.",
    solution: "We established a centralized IoT lakehouse, capturing telemetry from 10,000+ machine sensors and applying prediction algorithms (TensorFlow) to forecast mechanical failures.",
    techStack: ["Python", "FastAPI", "MQTT", "InfluxDB", "Apache Spark", "TensorFlow", "Multi-Cloud"]
  },
  "retail-omnichannel": {
    title: "Retail Omni-Channel Platform",
    client: "ShopUnited",
    industry: "Retail & eCommerce",
    duration: "10 months",
    description: "Unified online and in-store experience with real-time inventory synchronization.",
    metrics: [
      { value: "<200ms", label: "API Latency" },
      { value: "High", label: "Uptime" },
      { value: "Growth", label: "Revenue Growth" }
    ],
    challenge: "ShopUnited had major inventory sync errors, selling out of stock online when stock was purchased in physical retail locations.",
    solution: "We implemented an event-driven stock synchronization engine using Kafka, connecting store POS registers to the eCommerce database.",
    techStack: ["React Native", ".NET Core", "MongoDB", "Cloud Platform", "Next.js", "Kafka"]
  },
  "saas-devops": {
    title: "SaaS DevOps Transformation",
    client: "CloudOps Pro",
    industry: "SaaS",
    duration: "6 months",
    description: "Implemented automated CI/CD pipelines, SLO metrics, and observability stack.",
    metrics: [
      { value: "Faster", label: "Deploy Time" },
      { value: "Reduced", label: "MTTR" },
      { value: "5x", label: "Release Frequency" }
    ],
    challenge: "CloudOps Pro struggled with slow release schedules, releasing software manually once every quarter, leading to long feedback loops.",
    solution: "We fully automated their deployment pipeline using Gitlab CI and Docker containers, introducing automated testing gates to reduce risks.",
    techStack: ["GitLab", "Terraform", "Cloud Services", "Datadog", "Docker", "Kubernetes"]
  },
  "telecom-crm-system": {
    title: "Telecom Customer Management",
    client: "ConnectTel",
    industry: "Telecom",
    duration: "14 months",
    description: "Unified legacy customer data platforms to improve customer support workflows.",
    metrics: [
      { value: "10M+", label: "Subscribers" },
      { value: "<100ms", label: "Response Time" },
      { value: "-20%", label: "Churn Rate" },
      { value: "+300%", label: "Support Tickets" }
    ],
    challenge: "ConnectTel was managing 10M+ subscribers using 5 different legacy systems that didn't talk to each other. Customer service agents needed to toggle between multiple screens, leading to long wait times and frustrated customers.",
    solution: "We engineered an Angular-based CRM interface, exposing user statistics from the 5 backends through an API aggregation layer.",
    techStack: ["Angular", ".NET Core", "SQL Server", "Redis", "Elasticsearch", "AKS"]
  }
};

export const blogData = {
  "cloud-cost-guardrails": {
    title: "Cloud Cost Guardrails: Stop Runaway Spending",
    date: "May 10, 2026",
    category: "Cloud/SRE",
    author: "Neha Gupta",
    readTime: "8 min read",
    image: "/assets/images/blog/cloud.png",
    summary: "How to implement automated alerts, resource resizing, and lifecycle rules to lower cloud infrastructure spend by 30% without risking performance.",
    content: "Unmanaged cloud spending is a common challenge for growth-stage companies. As engineers push experimental instances, resources are forgotten, scaling logic operates unchecked, and billing invoices rise. Aetheris Systems advocates for automated guardrails. By utilizing Terraform policies and AWS budget automation, we can track asset allocations and automatically turn off idle sandbox services outside office hours, cutting costs while preserving system capabilities."
  },
  "cicd-regulated-environments": {
    title: "CI/CD in Regulated Environments",
    date: "April 28, 2026",
    category: "DevOps",
    author: "Rajesh Verma",
    readTime: "12 min read",
    image: "/assets/images/blog/DevOps.png",
    summary: "A practical guide to building deployment pipelines that satisfy SOC2, HIPAA, and ISO27001 requirements while maintaining deployment speed.",
    content: "Enterprise software teams often think compliance requires slow manual gates. In reality, continuous integration can support regulatory mandates. By integrating vulnerability scanners, code coverage checks, and signed commits directly into GitLab pipelines, compliance audits become automated. We outline how to implement role-based approval structures and keep audit logs in immutable databases."
  },
  "designing-scalable-apis": {
    title: "Designing Scalable APIs",
    date: "April 15, 2026",
    category: "Software Design",
    author: "Arjun Kumar",
    readTime: "10 min read",
    image: "/assets/images/blog/Designing_Scalable_APIs.png",
    summary: "Best practices for building RESTful and GraphQL APIs that handle millions of requests, including rate limiting, caching strategies, and pagination.",
    content: "API design directly impacts system scalability. A poorly designed payload pattern can overload network bandwidth and slow down databases. Caching layers, payload paging, and rate limiting (utilizing Redis tokens) are critical to manage massive user spikes. We discuss design patterns for building robust API endpoints that handle millions of hits daily."
  },
  "blameless-incident-reviews": {
    title: "Blameless Incident Reviews",
    date: "March 29, 2026",
    category: "SRE / Culture",
    author: "Sarah Jenkins",
    readTime: "7 min read",
    summary: "How to transform system failures into engineering insights using blameless post-mortem frameworks.",
    content: "System outages are inevitable. What separates high-performing companies from others is how they respond to failures. Blameless incident reviews focus on system flaws rather than human errors. We provide templates for tracking root causes, identifying remediation items, and sharing lessons learned."
  },
  "dataops-in-30-days": {
    title: "DataOps in 30 Days",
    date: "March 11, 2026",
    category: "Data Engineering",
    author: "Vikram Malhotra",
    readTime: "9 min read",
    summary: "A roadmap to transition your raw analytics databases into automated, tested data engineering pipelines.",
    content: "Data pipelines are software. They require versioning, integration testing, and quality controls. We outline a 30-day roadmap to build automated pipelines using Apache Airflow and dbt (Data Build Tool), helping data teams deploy changes safely."
  },
  "security-by-default-sdlc": {
    title: "Security by Default in SDLC",
    date: "February 22, 2026",
    category: "Security",
    author: "Elena Rostova",
    readTime: "11 min read",
    summary: "Shifting security checks to the start of the software lifecycle by using automated dependency tracking and static code scanning.",
    content: "Fixing security flaws after software release is expensive. Shifting checks to early development cycles prevents issues. We discuss how to configure static code analysis (SAST) in your pipelines and manage API secret keys securely."
  },
  "practical-mlops-patterns": {
    title: "Practical MLOps Patterns",
    date: "February 05, 2026",
    category: "AI / ML",
    author: "David Vance",
    readTime: "13 min read",
    summary: "Automating model testing, data versioning, and endpoint deployments in production environments.",
    content: "Deploying AI models in production requires special observability metrics. Model drift, feature store updates, and automated scaling for GPU workloads must be managed. We share MLOps templates to automate model deployments."
  },
  "observability-for-product-teams": {
    title: "Observability for Product Teams",
    date: "January 19, 2026",
    category: "Observability",
    author: "Marcus Chen",
    readTime: "8 min read",
    summary: "Connecting application logs, trace IDs, and user experience metrics to align developers and product owners.",
    content: "Observability isn't just for operations. Connect trace latency directly to user drop-offs to improve features. We show how to connect systems like Datadog to business metrics dashboards."
  }
};

export const careersData = [
  {
    id: "sr-sre",
    title: "Senior Site Reliability Engineer",
    department: "Infrastructure / SRE",
    location: "Remote (India) / Ahmedabad",
    type: "Full-Time",
    experience: "5+ Years",
    summary: "We are looking for an SRE to scale our multi-cloud Kubernetes clusters, automate environments with Terraform, and optimize application latency.",
    responsibilities: [
      "Manage and scale multi-cluster Kubernetes deployments on AWS/GCP.",
      "Write clean, modular Infrastructure as Code using Terraform.",
      "Implement robust monitoring, logging, and alerts utilizing Datadog and Prometheus.",
      "Participate in an on-call rotation shift and resolve technical incidents."
    ],
    requirements: [
      "Extensive experience operating production systems under load.",
      "Deep understanding of Linux systems, networking, and security.",
      "Experience with shell scripting and Python or Go.",
      "Excellent communication and collaborative problem-solving skills."
    ]
  },
  {
    id: "fs-engineer",
    title: "Full-Stack Software Engineer (React / Node.js)",
    department: "Software Engineering",
    location: "Ahmedabad, India (On-Site)",
    type: "Full-Time",
    experience: "3+ Years",
    summary: "Join us in building responsive user interfaces in React and secure microservices backends using Node.js.",
    responsibilities: [
      "Develop new frontend features using React, Next.js, and Tailwind CSS.",
      "Build secure RESTful and GraphQL API gateways in Node.js.",
      "Write automated unit and integration test suites.",
      "Collaborate with product designers to build accessible user interfaces."
    ],
    requirements: [
      "Strong proficiency in JavaScript and React.",
      "Experience with databases like PostgreSQL and MongoDB.",
      "Understanding of REST API design principles and caching strategies.",
      "Familiarity with Git and Docker container tools."
    ]
  },
  {
    id: "security-architect",
    title: "Information Security Architect",
    department: "Cybersecurity & Compliance",
    location: "Remote (India)",
    type: "Full-Time",
    experience: "6+ Years",
    summary: "Help secure our core infrastructure and consult clients on SOC2, ISO27001, and HIPAA compliance readiness.",
    responsibilities: [
      "Conduct security audits and penetration tests on cloud environments.",
      "Help engineering teams implement security-by-default workflows.",
      "Consult clients on audit compliance paths (SOC2, HIPAA).",
      "Deploy and manage vulnerability scanning tools."
    ],
    requirements: [
      "Professional certifications (CISSP, CEH, or equivalent).",
      "Familiarity with cloud security controls (AWS IAM, WAF).",
      "Understanding of regulatory frameworks (GDPR, HIPAA, SOC2).",
      "Experience auditing complex web application architectures."
    ]
  }
];

export const faqData = [
  {
    q: "What types of services does Aetheris Systems offer?",
    a: "We offer end-to-end IT services including custom software engineering, native and cross-platform mobile apps (Flutter, React Native), cloud migrations & SRE, API designs, QA automation, cybersecurity auditing, and 24/7 managed operations support."
  },
  {
    q: "How do you ensure zero downtime during database migrations?",
    a: "We utilize standard migration patterns like the Strangler Pattern. By deploying new microservices in parallel, utilizing feature flags, and configuring double-write databases before phasing out legacy components, we ensure zero downtime."
  },
  {
    q: "Are your healthcare projects HIPAA compliant?",
    a: "Yes. All healthcare projects are developed inside encrypted cloud networks with role-based access control, strict database logs, and encrypted data fields, satisfying HIPAA compliance rules."
  },
  {
    q: "What is the billing model for managed support?",
    a: "We offer flexible SLA-backed plans, including 24/7/365 active monitoring, server management, database tuning, and dedicated technical advisory services. Connect with us for a custom quote."
  },
  {
    q: "Can we request a dedicated engineering team?",
    a: "Yes. We offer flexible engagement models, including dedicated Scrum teams, project-based contracts, and staff augmentation, fitting your operational requirements."
  }
];

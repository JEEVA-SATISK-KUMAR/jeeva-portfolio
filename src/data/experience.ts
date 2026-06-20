export type Experience = {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  active?: boolean;
};

export const experience: Experience[] = [
  {
    period: "AUG 2025 — PRESENT",
    role: "Analytics Consultant (Graduate)",
    organization: "Southern Methodist University",
    location: "Dallas, TX",
    description:
      "Supported course delivery by developing instructional materials and tutoring students in Python, SQL, and applied data science. Guided student teams through end-to-end capstone execution, including project scoping, analytics methodology, and stakeholder communication. Coordinated with industry partners and faculty to support timely delivery of real-world analytics projects.",
    highlights: ["Python + SQL tutoring", "Capstone execution", "Industry coordination"],
    active: true,
  },
  {
    period: "AUG 2025 — FEB 2026",
    role: "Data Analyst",
    organization: "Datycs",
    location: "Woburn, MA",
    description:
      "Analyzed healthcare clinical and claims datasets using SQL and dashboards, improving KPI visibility, agreement-level tracking, and decision support for product and client reporting. Streamlined web application workflows and data documentation to improve cross-functional coordination and operational efficiency. Created data-driven presentations and reporting collateral to clarify metrics, trends, and service-level expectations.",
    highlights: ["Healthcare analytics", "Claims + clinical data", "KPI reporting"],
  },
  {
    period: "JAN 2025 — MAY 2025",
    role: "Operations Assistant, Dedman Center for Lifetime Sports",
    organization: "Southern Methodist University",
    location: "Dallas, TX",
    description:
      "Served as a primary point of contact for members and staff, communicating policies and resolving inquiries. Managed daily operations, unexpected issues, and multiple tasks to support a smooth facility experience. Assisted in coordinating facility resources and activities to improve operational efficiency and member satisfaction.",
    highlights: ["Daily operations", "Issue resolution", "Member experience"],
  },
  {
    period: "JAN 2025 — MAY 2025",
    role: "Business Analyst Project Lead",
    organization: "Neuro-Insight",
    location: "Dallas, TX",
    description:
      "Engineered a multi-stage machine learning pipeline using Random Forest and XGBoost to predict emotional direction from 22 EEG time-series features. Developed an interactive R Shiny application that enabled non-technical stakeholders to explore emotion predictions and use model outputs for business decision support.",
    highlights: ["Random Forest + XGBoost", "22 EEG features", "R Shiny"],
  },
  {
    period: "AUG 2023 — JUN 2024",
    role: "Estimation and Proposal Engineer",
    organization: "Fouress Engineering India Pvt Ltd",
    location: "Bengaluru, India",
    description:
      "Built Excel-based cost optimization and forecasting models using VBA and macros, integrating procurement, inventory, supplier, and pricing data. Improved pricing accuracy by 15% and reduced business risk by 20%. Automated and standardized estimation workflows, cutting manual effort by 30% and accelerating quote turnaround. Integrated competitive intelligence and customer analytics into pricing strategy, reducing order clarifications by 20%.",
    highlights: ["15% pricing accuracy", "30% less manual effort", "Excel VBA automation"],
  },
  {
    period: "AUG 2022 — SEP 2022",
    role: "Automation Technology Intern",
    organization: "Bosch Rexroth",
    location: "Bengaluru, India",
    description:
      "Designed, assembled, and troubleshot pneumatic and hydraulic circuits. Developed PLC programming skills for controlling and automating pneumatic and hydraulic systems. Tested and optimized circuits and PLC programs for improved system performance. Documented technical designs, circuit diagrams, and PLC logic.",
    highlights: ["PLC programming", "Circuit optimization", "Technical documentation"],
  },
];

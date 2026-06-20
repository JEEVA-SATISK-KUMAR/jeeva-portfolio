export type Project = {
  id: "airline" | "healthcare" | "neuro" | "cloud" | "finance";
  index: string;
  title: string;
  shortTitle: string;
  category: string;
  status: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  accent: "cyan" | "violet" | "amber";
};

export const projects: Project[] = [
  {
    id: "healthcare",
    index: "01",
    title: "Healthcare KPI Analytics Dashboard",
    shortTitle: "Healthcare KPI Analytics",
    category: "Healthcare Analytics",
    status: "DECISION READY",
    summary:
      "Healthcare analytics project focused on clinical and claims datasets, KPI visibility, agreement-level tracking, product and client reporting, and stakeholder decision support.",
    challenge:
      "Clinical and claims data required clear, governed metrics before teams could consistently understand performance and service-level expectations.",
    solution:
      "Analyzed healthcare datasets with SQL and dashboards, structuring KPI, trend, and agreement-level views for product and client reporting.",
    impact:
      "Improved metric visibility and delivered clearer decision support for cross-functional stakeholders.",
    metrics: [
      { label: "Data", value: "Claims + Clinical" },
      { label: "Focus", value: "KPI visibility" },
      { label: "Output", value: "Client reporting" },
    ],
    stack: ["SQL", "Power BI", "Healthcare Analytics", "KPI Design"],
    accent: "violet",
  },
  {
    id: "cloud",
    index: "02",
    title: "Cloud BI Pipeline",
    shortTitle: "Cloud BI Pipeline",
    category: "Analytics Engineering",
    status: "ORCHESTRATED",
    summary:
      "Data pipeline and BI reporting project using Azure Data Factory, Microsoft Fabric, Power BI, SQL warehousing patterns, star schema modeling, and incremental loads.",
    challenge:
      "Analytics data needed reliable ingestion, modeled storage, and efficient refresh patterns to support scalable reporting.",
    solution:
      "Designed a star-schema workflow with Azure Data Factory orchestration, Microsoft Fabric, SQL warehousing, and incremental loads.",
    impact:
      "Created a repeatable path from source data to trusted, refreshable Power BI reporting.",
    metrics: [
      { label: "Orchestration", value: "Azure Data Factory" },
      { label: "Model", value: "Star schema" },
      { label: "Refresh", value: "Incremental" },
    ],
    stack: ["Azure Data Factory", "Microsoft Fabric", "Power BI", "SQL"],
    accent: "cyan",
  },
  {
    id: "airline",
    index: "03",
    title: "Forecasting and Operations Analytics",
    shortTitle: "Forecasting & Operations",
    category: "Supply Chain Analytics",
    status: "MODEL READY",
    summary:
      "Forecasting project focused on demand prediction, supply-chain planning, scenario analysis, and operational decision support.",
    challenge:
      "Variable demand and operational constraints made planning difficult without a structured forecasting and scenario-analysis framework.",
    solution:
      "Built forecasting models and decision scenarios to translate demand signals into actionable supply-chain and operations planning inputs.",
    impact:
      "Connected model output to practical operational decisions, resource planning, and performance measurement.",
    metrics: [
      { label: "Focus", value: "Demand prediction" },
      { label: "Context", value: "Supply chain" },
      { label: "Output", value: "Planning support" },
    ],
    stack: ["Python", "R", "Time Series", "Scenario Analysis"],
    accent: "cyan",
  },
  {
    id: "neuro",
    index: "04",
    title: "EEG-Based Emotion Prediction",
    shortTitle: "EEG Emotion Prediction",
    category: "Machine Learning",
    status: "VALIDATED",
    summary:
      "Machine learning project using Random Forest and XGBoost to predict emotional direction from 22 EEG time-series features, with an R Shiny application for non-technical stakeholders.",
    challenge:
      "Non-technical stakeholders needed a practical way to explore complex EEG model outputs and connect predictions to business decisions.",
    solution:
      "Engineered Random Forest and XGBoost models and delivered predictions through an interactive R Shiny stakeholder application.",
    impact:
      "Made sophisticated emotion-model outputs accessible and useful to non-technical decision-makers.",
    metrics: [
      { label: "Features", value: "22 EEG signals" },
      { label: "Models", value: "RF + XGBoost" },
      { label: "Interface", value: "R Shiny" },
    ],
    stack: ["Random Forest", "XGBoost", "R", "R Shiny"],
    accent: "amber",
  },
  {
    id: "finance",
    index: "05",
    title: "Cost Optimization and Pricing Automation",
    shortTitle: "Pricing Automation",
    category: "Operations Analytics",
    status: "PRODUCTION IMPACT",
    summary:
      "Excel VBA and macros project integrating procurement, inventory, supplier, and pricing data to improve pricing accuracy by 15%, reduce business risk by 20%, and cut manual effort by 30%.",
    challenge:
      "Manual estimation workflows slowed quote turnaround and limited consistency across pricing, supplier, and inventory inputs.",
    solution:
      "Automated and standardized estimation workflows with Excel VBA and macros while incorporating pricing trends and competitive intelligence.",
    impact:
      "Improved pricing accuracy by 15%, reduced business risk by 20%, and cut manual effort by 30%.",
    metrics: [
      { label: "Accuracy", value: "+15%" },
      { label: "Manual effort", value: "−30%" },
      { label: "Business risk", value: "−20%" },
    ],
    stack: ["Excel VBA", "Macros", "Forecasting", "Pricing Analytics"],
    accent: "violet",
  },
];

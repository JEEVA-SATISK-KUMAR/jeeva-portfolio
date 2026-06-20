export type SkillGroup = {
  title: string;
  code: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Performance Analytics",
    code: "KPI.01",
    description: "KPI design, trend analysis, root-cause investigation, performance measurement, and stakeholder management.",
    skills: ["KPI Design", "Trend Analysis", "Root-cause Investigation", "Performance Measurement", "Stakeholder Relations", "Healthcare Analytics"],
  },
  {
    title: "Forecasting & Modeling",
    code: "ML.02",
    description: "Forecasting, time series and classification modeling, cost and price estimation, and scenario analysis.",
    skills: ["Forecasting", "Time Series Modeling", "Classification Modeling", "Scenario Analysis", "Python", "R", "Random Forest", "XGBoost", "R Shiny"],
  },
  {
    title: "Business Intelligence",
    code: "BI.03",
    description: "Executive-ready Power BI and Tableau dashboards with durable semantic models and efficient refresh strategies.",
    skills: ["Power BI", "Tableau", "DAX", "Data Modeling", "Star Schema Data Modeling", "Incremental Loads", "AI Agents"],
  },
  {
    title: "Data Platforms & Operations",
    code: "DE.04",
    description: "Governed data pipelines and SQL warehousing patterns supporting supply-chain and operational decisions.",
    skills: ["SQL", "Azure Data Factory", "Microsoft Fabric", "Azure Service Fabric", "SQL Warehousing Patterns", "Supply Chain Analytics", "Operations Analytics", "Excel VBA", "Cost and Price Estimation"],
  },
];

export type Project = {
  id: "neuro" | "cloud" | "traffic" | "airline" | "finance" | "sales";
  index: string;
  title: string;
  shortTitle: string;
  category: string;
  status: string;
  summary: string;
  caseStudy: {
    businessProblem: string;
    dataset: string;
    kpis: string;
    analysis: string;
    dashboard: string;
    keyInsight: string;
    recommendation: string;
    impact: string;
  };
  metrics: { label: string; value: string }[];
  stack: string[];
  accent: "cyan" | "violet" | "amber";
};

export const projects: Project[] = [
  {
    id: "neuro",
    index: "01",
    title: "EEG-Based Emotion Analytics for Creative Strategy",
    shortTitle: "EEG Emotion Analytics",
    category: "Machine Learning",
    status: "VALIDATED",
    summary: "Emotion classification and stakeholder-facing analytics for creative strategy.",
    caseStudy: {
      businessProblem: "Creative teams needed a clearer way to evaluate emotional response to ad content.",
      dataset: "EEG-based neural metrics with 22 time-series features.",
      kpis: "Emotional direction, discrete emotion, and classification performance.",
      analysis: "Random Forest and XGBoost multi-stage classification pipeline.",
      dashboard: "R Shiny app for training-data upload and test-set predictions.",
      keyInsight: "EEG signals can quantify emotional response patterns in creative content.",
      recommendation: "Use model outputs to compare narrative and campaign design choices.",
      impact: "Enabled predictive creative insights for non-technical stakeholders.",
    },
    metrics: [
      { label: "Features", value: "22 EEG signals" },
      { label: "Models", value: "RF + XGBoost" },
      { label: "Interface", value: "R Shiny" },
    ],
    stack: ["Random Forest", "XGBoost", "R", "R Shiny"],
    accent: "amber",
  },
  {
    id: "cloud",
    index: "02",
    title: "Cloud BI Pipeline & Reporting System with Azure, Fabric & Power BI",
    shortTitle: "Cloud BI Pipeline",
    category: "Analytics Engineering",
    status: "ORCHESTRATED",
    summary: "An end-to-end cloud BI workflow for governed sales reporting.",
    caseStudy: {
      businessProblem: "Sales reporting needed an automated, cloud-native analytics workflow.",
      dataset: "AdventureWorks data loaded into a cloud data warehouse.",
      kpis: "Sales performance, trends, and executive reporting measures.",
      analysis: "Automated ETL, SQL warehousing, data modeling, and advanced DAX.",
      dashboard: "Power BI reports with drillthroughs, bookmarks, and KPI views.",
      keyInsight: "Integrated cloud pipelines improve reporting consistency and access.",
      recommendation: "Use governed refresh workflows for repeatable self-service BI.",
      impact: "Enabled executive-level sales insights and performance tracking.",
    },
    metrics: [
      { label: "Source", value: "AdventureWorks" },
      { label: "Pipeline", value: "Azure + Fabric" },
      { label: "Reporting", value: "Power BI" },
    ],
    stack: ["Azure Data Factory", "Microsoft Fabric", "Power BI", "DAX", "SQL"],
    accent: "cyan",
  },
  {
    id: "traffic",
    index: "03",
    title: "Traffic Collision Analysis & Visualization for Dallas",
    shortTitle: "Dallas Collision Analysis",
    category: "Geospatial Analytics",
    status: "DECISION READY",
    summary: "Geospatial crash analysis supporting safer route and intersection decisions.",
    caseStudy: {
      businessProblem: "Road users and planners needed visibility into high-risk Dallas intersections.",
      dataset: "Dallas Police Department Open Data Portal crash records.",
      kpis: "Accident frequency, collision severity, location, and time period.",
      analysis: "Geospatial analysis of crash concentration and severity patterns.",
      dashboard: "Interactive Tableau views for peak and off-peak route analysis.",
      keyInsight: "Collision risk concentrates at identifiable intersections and periods.",
      recommendation: "Prioritize high-risk locations in planning and route decisions.",
      impact: "Improved decision visibility for planners, commuters, and logistics teams.",
    },
    metrics: [
      { label: "Data", value: "Dallas Open Data" },
      { label: "Focus", value: "Risk locations" },
      { label: "Output", value: "Route insight" },
    ],
    stack: ["Tableau", "Geospatial Analysis", "Data Storytelling"],
    accent: "violet",
  },
  {
    id: "airline",
    index: "04",
    title: "American Airlines Repairable Parts Forecasting",
    shortTitle: "Repairable Parts Forecasting",
    category: "Supply Chain Analytics",
    status: "MODEL READY",
    summary: "Time-series forecasting for repairable-parts planning and operational support.",
    caseStudy: {
      businessProblem: "Repairable-parts planning required more reliable demand visibility.",
      dataset: "Historical repairable-parts demand and planning data.",
      kpis: "Demand trend, forecast accuracy, and planning variance.",
      analysis: "Time-series forecasting with operational scenario analysis.",
      dashboard: "Forecast and planning views for part-level decision support.",
      keyInsight: "Demand patterns vary across parts and planning periods.",
      recommendation: "Use forecast signals to support inventory and repair planning.",
      impact: "Supported supply-chain planning and operational decision-making.",
    },
    metrics: [
      { label: "Focus", value: "Demand forecast" },
      { label: "Context", value: "Repairable parts" },
      { label: "Output", value: "Planning support" },
    ],
    stack: ["Python", "R", "Time Series", "Scenario Analysis"],
    accent: "cyan",
  },
  {
    id: "finance",
    index: "05",
    title: "Mεllon Portfolio Management Platform",
    shortTitle: "Mεllon Portfolio Platform",
    category: "Financial Analytics",
    status: "INTERACTIVE",
    summary: "A portfolio analytics platform combining structured data and conversational access.",
    caseStudy: {
      businessProblem: "Portfolio information was difficult to review without custom queries.",
      dataset: "Structured portfolio holdings and transaction data.",
      kpis: "Portfolio value, allocation, holdings, and performance trends.",
      analysis: "Relational portfolio analysis and natural-language query workflows.",
      dashboard: "Interactive portfolio views with a chatbot-to-SQL assistant.",
      keyInsight: "Unified portfolio views make financial patterns easier to interpret.",
      recommendation: "Centralize portfolio monitoring and guided data exploration.",
      impact: "Enabled self-service portfolio analysis and decision visibility.",
    },
    metrics: [
      { label: "Storage", value: "MySQL" },
      { label: "Interface", value: "Dashboard + Chat" },
      { label: "Access", value: "Natural language" },
    ],
    stack: ["MySQL", "Python", "Data Visualization", "NLP"],
    accent: "violet",
  },
  {
    id: "sales",
    index: "06",
    title: "Product Sales Analysis & Acquisition Strategy",
    shortTitle: "Sales & Acquisition Strategy",
    category: "Business Analytics",
    status: "STRATEGY READY",
    summary: "Statistical sales analysis supporting acquisition and growth decisions.",
    caseStudy: {
      businessProblem: "An acquisition decision required evidence on product sales performance.",
      dataset: "Scraped and preprocessed product sales data.",
      kpis: "Sales performance and factors influencing product results.",
      analysis: "Statistical and exploratory analysis of sales drivers.",
      dashboard: "Excel analysis views summarizing performance and acquisition factors.",
      keyInsight: "Sales patterns revealed factors relevant to acquisition value.",
      recommendation: "Use the identified drivers to guide investment evaluation.",
      impact: "Enabled data-driven acquisition and growth recommendations.",
    },
    metrics: [
      { label: "Method", value: "Statistical analysis" },
      { label: "Focus", value: "Sales drivers" },
      { label: "Output", value: "Acquisition insight" },
    ],
    stack: ["Excel", "Data Scraping", "Data Preprocessing", "Statistical Analysis"],
    accent: "amber",
  },
];


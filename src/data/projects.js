import correlationHeatmap from '../images/correlation_heatmap.png';

const projectsData = [
  {
    title: "Bike Rentals Demand Analysis",
    description: "Analyzed factors affecting bike rentals using statistical and machine learning techniques such as correlation, visualization, random forests, and time series analysis.",
    image: correlationHeatmap,  // Use the imported variable here
    link: "https://github.com/GraceWang865/NYU-DataScience-BootCamp-Spring23/blob/main/bikedata.ipynb",
    technologies: ["Python", "pandas", "seaborn", "matplotlib", "scikit-learn", "statsmodels"],
    date: "Placeholder Date",  // Replace with the actual date
    features: [
      "Data preprocessing and transformation.",
      "Correlation heatmap of significant features.",
      "Seasonal and monthly demand analysis using bar plots.",
      "Weather conditions' impact on demand visualized using histograms and scatter plots.",
      "Feature importance analysis using Random Forest.",
      "Time series analysis using ARIMA model.",
      "Moving average prediction visualization."
    ]
  }
];

export default projectsData;


  
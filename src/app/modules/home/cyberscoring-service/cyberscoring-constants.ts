export const CYBERSCORING = {
  thresholdConfig: {
    "0": { color: "#EB1919" },
    "700": { color: "#FFC507" },
    "800": { color: "#FFC507" },
    "900": { color: "#14BD44" },
    "1000": { color: "#14BD44" },
  },
  markerConfig: {
    "0": { color: "#EB1919", size: 8, label: "0", type: "line" },
    "100": { color: "#EB1919", size: 4, type: "line" },
    "200": { color: "#EB1919", size: 4, type: "line" },
    "300": { color: "#EB1919", size: 4, type: "line" },
    "400": { color: "#EB1919", size: 4, type: "line" },
    "500": { color: "#EB1919", size: 8, type: "line" },
    "600": { color: "#EB1919", size: 4, type: "line" },
    "700": { color: "#FFC507", size: 4, type: "line" },
    "800": { color: "#FFC507", size: 4, type: "line" },
    "900": { color: "#14BD44", size: 4, type: "line" },
    "1000": { color: "#14BD44", size: 8, label: "1000", type: "line" },
  },
  chartColor: [{ backgroundColor: ["#ff0062"] }],
  poor: "< 700",
  fair: "> 700",
  good: "> 900",
  gaugeType: "semi",
  lastScore: -1,
  gaugeMax: 1000,
  gaugeMin: 0,
  gaugeMessage: 0,
  chartOptions: {
    scales: {
      xAxes: [
        {
          ticks: {
            callback: function (value) {
              return value;
            },
          },
        },
      ],

      yAxes: [
        {
          ticks: {
            steps: 10,
            stepValue: 100,
            max: 1000,
            min: 0,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
      mode: "label",
      callbacks: {
        title: (tooltipItems, data) => {
          var idx = tooltipItems[0].index;
          return data.labels[idx];
        },
      },
    },
  },
  chartType: "line",
};

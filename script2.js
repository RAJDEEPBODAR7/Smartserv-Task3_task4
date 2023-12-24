let graph = document.getElementById("graph").getContext("2d");
let masspopChart = new Chart(graph, {
  type: "bar",
  data: {
    labels: ["Everett", "Seattle", "Lynwood", "Bothll", "Mukilteo", "Edmonds"],
    datasets: [
      {
        label: "Revenue Trends",
        data: [5000, 10200, 18000, 6000, 7000, 12000],
        backgroundColor: "#088F8F",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Revenue Trend",
      fontSize: 20,
    },
    legend: {
      display: false,
    },
  },
});

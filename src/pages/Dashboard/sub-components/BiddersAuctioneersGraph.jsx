import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const BiddersAuctioneersGraph = () => {
  const { totalAuctioneers, totalBidders } = useSelector(
    (state) => state.superAdmin
  );
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Number of Bidders",
        data: totalBidders,
        borderColor: "#D6482B",
        fill: false,
      },
      {
        label: "Number of Auctioneers",
        data: totalAuctioneers,
        borderColor: "#fdba88",
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // 🟢 Change X-axis grid color
        },
        beginAtZero: true,
        max: 50,
        ticks: {
          color: "#fff",
          callback: function (value) {
            return value.toLocaleString();
          },
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)", //  Change X-axis grid color
        },
        ticks: {
          color: "#fff", // 🟢 Change X-axis label color
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff", //  Change dataset label color (legend text)
          // font: {
          //   size: 14, // Optional: Adjust font size
          //   weight: "bold", // Optional: Make it bold
          // },
        },
      },
      title: {
        display: true,
        text: "Number of Bidders And Auctioneers Registered",
        color:'#fff'
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BiddersAuctioneersGraph;

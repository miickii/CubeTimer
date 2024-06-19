import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ScoreGraph = ({ scores }) => {
    const data = {
      labels: scores.slice(-4).map((_, index) => index + 1), // Labels for the last 4 scores
      datasets: [
        {
          label: 'Score Progression',
          data: scores.slice(-4).map(score => -score),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        }
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
            position: 'top',
        },
        title: {
          display: false // Hide the title
        }
      },
      scales: {
        y: {
          beginAtZero: true, // Ensures zero is always visible
          ticks: {
            // Include zero in the middle of the y-axis
            callback: function(value, index, ticks) {
              return value.toFixed(2);
            }
          }
        }
      }
    };
  
    return <Line options={options} data={data} />;
};

export default ScoreGraph;

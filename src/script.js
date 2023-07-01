const data = [
  {
    day: "mon",
    amount: 17.45,
    color: "hsl(10, 79%, 65%)",
    colorHover: "hsla(10, 79%, 65%, 0.7)"
  },
  {
    day: "tue",
    amount: 34.91,
    color: "hsl(10, 79%, 65%)",
    colorHover: "hsla(10, 79%, 65%, 0.7)"
  },
  {
    day: "wed",
    amount: 52.36,
    color: "hsl(186, 34%, 60%)",
    colorHover: "hsla(186, 34%, 60%, 0.7)"
  },
  {
    day: "thu",
    amount: 31.07,
    color: "hsl(10, 79%, 65%)",
    colorHover: "hsla(10, 79%, 65%, 0.7)"
  },
  {
    day: "fri",
    amount: 23.39,
    color: "hsl(10, 79%, 65%)",
    colorHover: "hsla(10, 79%, 65%, 0.7)"
  },
  {
    day: "sat",
    amount: 43.28,
    color: "hsl(10, 79%, 65%)",
    colorHover: "hsla(10, 79%, 65%, 0.7)"
  },
  {
    day: "sun",
    amount: 25.48,
    color: "hsl(10, 79%, 65%)",
    colorHover: "hsla(10, 79%, 65%, 0.7)"
  }
];

const myBarChart = document.getElementById('myBarChart');
const barValue = (e) => `$${e[0].formattedValue}`;
const barLabel = (e) => "";

new Chart(myBarChart, {
  type: 'bar',
  data: {
    labels: data.map(chart => chart.day),
    datasets: [
      {
      backgroundColor: data.map(chart => chart.color),
      data: data.map(chart => chart.amount),
      hoverBackgroundColor: data.map(chart => chart.colorHover),
      borderRadius: 4
      }
    ]
  },
  options: {
    scales: {
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        },
        border: {
          display: false,
        }
      },
      x: {
        grid: {
          display: false
        },
        border: {
          display: false,
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        padding: {
          top: 8,
          right: 14,
          bottom: 1,
        },
        displayColors: false,
        titleAlign: 'center',
        titleColor: 'hsl(33, 100%, 98%)',
        caretSize: 0,
        callbacks: {
          title: barValue,
          label: barLabel,
        }
      }
    }
  }
});




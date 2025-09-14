import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const BarChartWidget = () => {
  const data = useSelector((state) => state.widgets.data.bar || []);

  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        label: 'Sales',
        data: data.map((d) => d.value),
        backgroundColor: '#f59e0b',
      },
    ],
  };

  return (
    <div className="widget">
      <h3>Sales Data</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChartWidget;

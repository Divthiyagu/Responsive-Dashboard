import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const LineChartWidget = () => {
  const data = useSelector((state) => state.widgets.data.line || []);

  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        label: 'User Activity',
        data: data.map((d) => d.value),
        fill: false,
        borderColor: '#3b82f6',
        backgroundColor: '#3b82f6',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="widget">
      <h3>User Activity Over Time</h3>
      <Line data={chartData} />
    </div>
  );
};

export default LineChartWidget;

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const PieChartWidget = () => {
  const data = useSelector((state) => state.widgets.data.pie || []);

  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        data: data.map((d) => d.value),
        backgroundColor: ['#3b82f6', '#f87171', '#34d399'],
      },
    ],
  };

  return (
    <div className="widget">
      <h3>User Demographics</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChartWidget;

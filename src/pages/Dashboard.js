import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadWidgets } from '../redux/widgetsSlice';

import LineChartWidget from '../components/Widget/LineChartWidget';
import BarChartWidget from '../components/Widget/BarChartWidget';
import PieChartWidget from '../components/Widget/PieChartWidget';
import ActivityFeed from '../components/Widget/ActivityFeed';

const Dashboard = () => {
  const dispatch = useDispatch();
  const widgetStatus = useSelector((state) => state.widgets.status);
  const error = useSelector((state) => state.widgets.error);

  useEffect(() => {
    if (widgetStatus === 'idle') {
      dispatch(loadWidgets());
    }
  }, [dispatch, widgetStatus]);

  if (widgetStatus === 'loading') return <p>Loading widgets...</p>;
  if (widgetStatus === 'failed') return <p>Error: {error}</p>;

  return (
    <section className="dashboard-grid">
      <LineChartWidget />
      <BarChartWidget />
      <PieChartWidget />
      <ActivityFeed />
    </section>
  );
};

export default Dashboard;

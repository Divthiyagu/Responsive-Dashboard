import React from 'react';
import { useSelector } from 'react-redux';

const ActivityFeed = () => {
  const activities = useSelector((state) => state.widgets.data.activity || []);

  return (
    <div className="widget activity-feed">
      <h3>Recent Activity</h3>
      <ul>
        {activities.map((item, idx) => (
          <li key={idx}>
            <strong>{item.user}</strong> {item.action} <em>({item.time})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;

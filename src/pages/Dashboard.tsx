import React from 'react';
import DashboardStats from '../components/DashboardStats';
import RecentActivity from '../components/RecentActivity';

const Dashboard = () => {
  return (
    <>
      <DashboardStats />
      <RecentActivity />
    </>
  );
};

export default Dashboard;
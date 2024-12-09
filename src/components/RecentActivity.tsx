import React from 'react';

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center p-3 lg:p-4 border rounded-lg">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 font-semibold">JD</span>
            </div>
            <div className="ml-3 lg:ml-4 min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">New student registration</p>
              <p className="text-sm text-gray-500 truncate">John Doe registered for Advanced Mathematics</p>
            </div>
            <span className="ml-2 text-xs lg:text-sm text-gray-500 flex-shrink-0">2 hours ago</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
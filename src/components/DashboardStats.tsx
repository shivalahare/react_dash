import React from 'react';
import { Users, GraduationCap, BookOpen, TrendingUp } from 'lucide-react';

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
      <div className="bg-white rounded-lg p-4 lg:p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Students</p>
            <p className="text-xl lg:text-2xl font-semibold text-gray-900">2,543</p>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <Users className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-green-500">+5.2%</span>
          <span className="text-gray-500 ml-2">vs last month</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 lg:p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Teachers</p>
            <p className="text-xl lg:text-2xl font-semibold text-gray-900">127</p>
          </div>
          <div className="p-3 bg-purple-100 rounded-full">
            <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-green-500">+2.1%</span>
          <span className="text-gray-500 ml-2">vs last month</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 lg:p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Active Courses</p>
            <p className="text-xl lg:text-2xl font-semibold text-gray-900">42</p>
          </div>
          <div className="p-3 bg-orange-100 rounded-full">
            <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-green-500">+12.5%</span>
          <span className="text-gray-500 ml-2">vs last month</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 lg:p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Revenue</p>
            <p className="text-xl lg:text-2xl font-semibold text-gray-900">$48,250</p>
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-green-500">+8.4%</span>
          <span className="text-gray-500 ml-2">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
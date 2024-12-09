import React from 'react';
import { Bus, MapPin, Users, Route } from 'lucide-react';

const Transport = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Transport Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Buses</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Bus className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-blue-500">8 Active</span>
            <span className="text-gray-500 ml-2">routes today</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Routes</p>
              <p className="text-2xl font-semibold text-gray-900">15</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Route className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-purple-500">25 Stops</span>
            <span className="text-gray-500 ml-2">in total</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-semibold text-gray-900">245</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500">Using transport</span>
            <span className="text-gray-500 ml-2">service</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Active Routes</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bus className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Route {item}</h3>
                    <p className="text-sm text-gray-500">Bus Number: SCH-00{item}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">32 Students</p>
                  <p className="text-sm text-gray-500">8 Stops</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Current Location: Stop {item} - Main Street</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transport;
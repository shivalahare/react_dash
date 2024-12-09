import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Class Schedule</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-lg font-medium">March 2024</span>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-6 gap-px bg-gray-200">
            <div className="bg-gray-50 p-4"></div>
            {days.map((day) => (
              <div key={day} className="bg-gray-50 p-4 text-sm font-medium text-gray-900">
                {day}
              </div>
            ))}
          </div>

          {times.map((time, i) => (
            <div key={time} className="grid grid-cols-6 gap-px bg-gray-200">
              <div className="bg-white p-4 text-sm text-gray-500">{time}</div>
              {days.map((day, j) => (
                <div key={`${day}-${time}`} className="bg-white p-4">
                  {i % 3 === 0 && j % 2 === 0 && (
                    <div className="bg-indigo-50 p-2 rounded-md border border-indigo-100">
                      <p className="text-sm font-medium text-indigo-700">Mathematics</p>
                      <p className="text-xs text-indigo-500">Grade 10</p>
                      <p className="text-xs text-indigo-500">Room 101</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
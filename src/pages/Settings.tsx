import React from 'react';
import { User, Bell, Lock, Globe, Palette, HelpCircle } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      <div className="bg-white shadow-sm rounded-lg">
        <div className="p-6 border-b">
          <div className="flex items-center">
            <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="w-10 h-10 text-indigo-600" />
            </div>
            <div className="ml-6">
              <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-500">Administrator</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900">Profile Information</span>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">Edit</button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900">Notifications</span>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">Configure</button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-gray-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900">Password & Security</span>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">Update</button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gray-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900">Language</span>
                </div>
                <select className="text-sm text-gray-600 bg-white border rounded-md px-2 py-1">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Palette className="w-5 h-5 text-gray-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900">Theme</span>
                </div>
                <select className="text-sm text-gray-600 bg-white border rounded-md px-2 py-1">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Support</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-gray-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900">Help Center</span>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from '../types';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar,
  BookOpen,
  Receipt,
  Bus,
  Settings,
  X,
} from 'lucide-react';

const menuItems: MenuItem[] = [
  { title: 'Dashboard', icon: 'LayoutDashboard', path: '/' },
  { title: 'Students', icon: 'Users', path: '/students' },
  { title: 'Teachers', icon: 'GraduationCap', path: '/teachers' },
  { title: 'Schedule', icon: 'Calendar', path: '/schedule' },
  { title: 'Courses', icon: 'BookOpen', path: '/courses' },
  { title: 'Fees', icon: 'Receipt', path: '/fees' },
  { title: 'Transport', icon: 'Bus', path: '/transport' },
  { title: 'Settings', icon: 'Settings', path: '/settings' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          transition-transform duration-300 ease-in-out
          bg-white w-64 min-h-screen shadow-lg
        `}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-indigo-600 text-center">MASUKAM INFO TECH</h1>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8">
          <ul>
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.path}
                  className={`flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${
                    location.pathname === item.path ? 'bg-indigo-50 text-indigo-600' : ''
                  }`}
                  onClick={() => onClose()}
                >
                  {item.icon === 'LayoutDashboard' && <LayoutDashboard className="w-5 h-5 mr-3" />}
                  {item.icon === 'Users' && <Users className="w-5 h-5 mr-3" />}
                  {item.icon === 'GraduationCap' && <GraduationCap className="w-5 h-5 mr-3" />}
                  {item.icon === 'Calendar' && <Calendar className="w-5 h-5 mr-3" />}
                  {item.icon === 'BookOpen' && <BookOpen className="w-5 h-5 mr-3" />}
                  {item.icon === 'Receipt' && <Receipt className="w-5 h-5 mr-3" />}
                  {item.icon === 'Bus' && <Bus className="w-5 h-5 mr-3" />}
                  {item.icon === 'Settings' && <Settings className="w-5 h-5 mr-3" />}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
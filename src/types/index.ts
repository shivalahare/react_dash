export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  avatar?: string;
}

export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  attendance: number;
  onlineCourses: number;
}

export interface MenuItem {
  title: string;
  icon: string;
  path: string;
}
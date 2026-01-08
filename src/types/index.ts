export type Role = 'ADMIN' | 'INTERN';

export interface User {
  id: string;
  username: string;
  role: Role;
  name: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  assigneeId: string; // The ID of the intern assigned to this task
}

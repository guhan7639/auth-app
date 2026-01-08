import { Task, User } from '@/types';

export const MOCK_USERS: User[] = [
    {
        id: '1',
        username: 'admin',
        role: 'ADMIN',
        name: 'Admin User',
    },
    {
        id: '2',
        username: 'intern',
        role: 'INTERN',
        name: 'Intern User',
    },
];

export const MOCK_TASKS: Task[] = [
    {
        id: '101',
        title: 'Fix Login Bug',
        description: 'Login page is not redirecting correctly.',
        status: 'IN_PROGRESS',
        assigneeId: '2', // Assigned to intern
    },
    {
        id: '102',
        title: 'Update Documentation',
        description: 'Update the API documentation for the new endpoints.',
        status: 'PENDING',
        assigneeId: '2', // Assigned to intern
    },
    {
        id: '103',
        title: 'Deploy to Production',
        description: 'Deploy the latest build to the production server.',
        status: 'COMPLETED',
        assigneeId: '1', // Assigned to admin (or someone else)
    },
    {
        id: '104',
        title: 'Review PR #42',
        description: 'Review the pull request for the new feature.',
        status: 'PENDING',
        assigneeId: '1',
    },
];

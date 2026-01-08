'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { MOCK_TASKS } from '@/services/mockData';
import styles from './dashboard.module.css';
import { useState } from 'react';

export default function Dashboard() {
    const { user, logout } = useAuth();

    // In a real app, we'd fetch these. simpler here.
    const allTasks = MOCK_TASKS;

    // Filter tasks based on role
    const tasks = user?.role === 'ADMIN'
        ? allTasks
        : allTasks.filter(t => t.assigneeId === user?.id);

    return (
        <ProtectedRoute>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <h1>Dashboard</h1>
                        <div className={styles.userInfo}>
                            Logged in as: <strong>{user?.name}</strong> ({user?.role})
                        </div>
                    </div>
                    <button onClick={logout} className={styles.logoutButton}>
                        Logout
                    </button>
                </header>

                <section>
                    <h2>Your Tasks</h2>
                    {tasks.length === 0 ? (
                        <div className={styles.emptyState}>No tasks assigned.</div>
                    ) : (
                        <div className={styles.taskList}>
                            {tasks.map(task => (
                                <div key={task.id} className={styles.taskCard}>
                                    <div className={styles.taskHeader}>
                                        <h3 className={styles.taskTitle}>{task.title}</h3>
                                        <span className={`${styles.status} ${styles[task.status]}`}>
                                            {task.status}
                                        </span>
                                    </div>
                                    <p>{task.description}</p>

                                    {user?.role === 'ADMIN' && (
                                        <div className={styles.adminControls}>
                                            <button className={styles.actionButton}>Edit</button>
                                            <button className={`${styles.actionButton} ${styles.delete}`}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </ProtectedRoute>
    );
}

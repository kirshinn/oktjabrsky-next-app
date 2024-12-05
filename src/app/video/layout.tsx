"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/profile/Sidebar';

type MenuItems = {
    [key: string]: {
        name: string
        path: string
    };
};

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [menuItems] = useState<MenuItems>({
        dashboard: {
            name: 'Главная',
            path: '/home'
        },
        profile: {
            name: 'Профиль',
            path: '/profile/me'
        },
        settings: {
            name: 'Настройки',
            path: '/profile/settings'
        },
        messages: {
            name: 'Сообщения',
            path: '/profile/messages'
        },
        notifications: {
            name: 'Уведомления',
            path: '/profile/notifications'
        },
        video: {
            name: 'Видеотрансляция',
            path: '/video/stream'
        },
        logout: {
            name: 'Выход',
            path: '/logout'
        }
    });

    return (
        <div className="flex h-screen">
            <Sidebar menuItems={menuItems} />
            <main className="flex-1 p-8 bg-white">
                {children}
            </main>
        </div>
    );
};

export default ProfileLayout;

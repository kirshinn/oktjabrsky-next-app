"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/profile/Sidebar';

type MenuItems = {
    [key: string]: string;
};

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [menuItems] = useState<MenuItems>({
        dashboard: 'Главная',
        profile: 'Профиль',
        settings: 'Настройки',
        messages: 'Сообщения',
        notifications: 'Уведомления',
        video: 'Видеонаблюдение',
        logout: 'Выйти'
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

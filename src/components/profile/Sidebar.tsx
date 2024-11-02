"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/actions/auth';

type SidebarProps = {
    menuItems: { [key: string]: {
        name: string
        path: string
    } };
};

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
    const router = useRouter();

    const handleMenuClick = async (item: any) => {
        if (item === 'logout') {
            await logout(); // Ожидаем завершения логики выхода
            router.push('/'); // Перенаправляем на главную страницу
        } else {
            router.push(menuItems[item].path); // Переход к маршруту пункта меню
        }
    };

    return (
        <aside className="w-1/6 bg-gray-50 border-r border-gray-300 p-6 h-screen flex flex-col">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Меню</h2>
            <div className="flex flex-col space-y-2 flex-grow">
                {Object.entries(menuItems).map(([key, item]) => (
                    <button
                        key={key}
                        onClick={() => handleMenuClick(key)}
                        className="w-full text-left border border-transparent rounded-md p-2 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;

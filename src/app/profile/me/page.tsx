"use client";

import { useExampleStateStore } from '@/store/example_state';
import React from 'react';

const UserProfilePage: React.FC = () => {
    // установка значения store
    const setExampleStateId = useExampleStateStore((state) => state.setId);
    // получение значения из store
    const exampleStateId = useExampleStateStore((state) => state.id);

    React.useEffect(() => {
        // устанавливаем значение в Store для ExampleStateStore
        setExampleStateId(100);
    });

    return (
        <div>
            <h1 className="text-3xl font-bold">Добро пожаловать! { String(exampleStateId) } %</h1>
            {/* Добавьте здесь другой контент страницы, если нужно */}
        </div>
    );
};

export default UserProfilePage;

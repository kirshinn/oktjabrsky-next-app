"use client";

import NextTopLoader from 'nextjs-toploader';


const Providers:  React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <NextTopLoader />
            { children }
        </>
    )
}

export default Providers;

'use client'

import React, { useState, useEffect } from 'react';
import "../globals.css";
import Router from 'next/router';

const Loading: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setLoading(true);
        };
        const handleRouteChangeComplete = () => {
            setLoading(false);
        };

        Router.events.on('routeChangeStart', handleRouteChangeStart);
        Router.events.on('routeChangeComplete', handleRouteChangeComplete);
        Router.events.on('routeChangeError', handleRouteChangeComplete);

        // Ensure loading is set to false after initial load
        handleRouteChangeComplete();

        return () => {
            Router.events.off('routeChangeStart', handleRouteChangeStart);
            Router.events.off('routeChangeComplete', handleRouteChangeComplete);
            Router.events.off('routeChangeError', handleRouteChangeComplete);
        };
    }, []);

    return (
        <div className='dark:dark'>
            {loading ? (<>
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-65 z-50">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
                </div>
            </>) : (<></>)}
        </div>
    )
}

export default Loading;
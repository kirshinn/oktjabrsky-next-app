"use client";

import React from 'react';

type VideoEmbedProps = {
    videoUrl: string;
    title: string;
};

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoUrl, title }) => {
    return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50 w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{title}</h3>
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                <iframe
                    src={videoUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 'none' }} // Убираем рамку, если она вдруг появляется в браузере
                ></iframe>
            </div>
        </div>
    );
};

export default VideoEmbed;

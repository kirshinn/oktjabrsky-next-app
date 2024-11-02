"use client";

import React from 'react';
import VideoEmbed from "@/components/video/VideoEmbed";

const VideoStreamPage: React.FC = () => {
    return (
        <div>
            <VideoEmbed videoUrl="https://rtspcam.ru/stream/zdveay1tbvbrehj" title="Трансляция Сити-Квартал Октябрьский" />
        </div>
    );
};

export default VideoStreamPage;

import React, { useEffect, useState } from "react";

const VideoBackground = () => {
    const [videoSrc, setVideoSrc] = useState("");

    useEffect(() => {
        // Simulating fetching the video URL
        const fetchVideo = async () => {
            const videoUrl = "https://www.ets.org/content/dam/ets-org/Rebrand/videos/home-hero.mp4";
            setVideoSrc(videoUrl);
        };
        fetchVideo();
    }, []);

    return (
        <div>
            {videoSrc && (
                <video autoPlay muted loop 
                className="w-full h-auto">
                    <source src={videoSrc} type="video/mp4" />
                    Your Browser is not supporting video.
                </video>
            )}
        </div>
    );
}

export default VideoBackground;

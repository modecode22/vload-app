import React, { useState, useEffect } from "react";

interface VideoDownloaderProps {
  url: string;
}

const VideoDownloader: React.FC<VideoDownloaderProps> = ({ url }) => {
  const [videoBlob, setVideoBlob] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndSetVideo = async () => {
      const response = await fetch(url);
      const blob = await response.blob();
      setVideoBlob(URL.createObjectURL(blob));
    };
    fetchAndSetVideo();
  }, [url]);

  return (
    <div>
      {videoBlob ? (
        <video controls src={videoBlob} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoDownloader;

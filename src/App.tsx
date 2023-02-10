import React, { useState } from "react";
import VideoDownloader from "./components/DownloadVideo";

const App: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <div className="flex flex-col p-10 gap-5 justify-center items-center">
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={() => setVideoUrl(videoUrl)}>Download Video</button>
      <VideoDownloader url={videoUrl} />
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import { fetchVideos } from "../utils/youtubeApi";
import VideoCard from "./VideoCard";

function VideoList({ searchTerm }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);
      const data = await fetchVideos(searchTerm || "tech tutorials");
      setVideos(data);
      setLoading(false);
    };
    loadVideos();
  }, [searchTerm]);

  if (loading) {
    return (
      <p style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
        Loading videos...
      </p>
    );
  }

  if (!videos || videos.length === 0) {
    return (
      <p style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
        No videos found 😢
      </p>
    );
  }

  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <div
          key={index}
          style={{
            transition: "transform 0.3s ease",
          }}
        >
          <VideoCard
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            thumbnail={video.snippet.thumbnails.medium.url}
            videoId={video.id.videoId}
          />
        </div>
      ))}
    </div>
  );
}

export default VideoList;
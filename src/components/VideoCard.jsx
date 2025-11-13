function VideoCard({ title, channel, thumbnail, videoId }) {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: "300px",
        margin: "10px",
        backgroundColor: "#222",
        borderRadius: "8px",
        overflow: "hidden",
        textDecoration: "none",
        color: "white",
        transition: "0.3s",
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{ width: "100%", height: "170px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <h4 style={{ margin: "5px 0" }}>{title}</h4>
        <p style={{ margin: 0, color: "#aaa" }}>{channel}</p>
      </div>
    </a>
  );
}

export default VideoCard;

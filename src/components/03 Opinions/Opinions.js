import React from "react";
import styles from "./Opinions.module.css";

function Opinions() {
  const videos = [
    "https://www.youtube.com/embed/dYWeaSfR8iE",
    "https://www.youtube.com/embed/EhKbkauZFxs",
    "https://www.youtube.com/embed/zrxX4iISBPc",
    "https://www.youtube.com/embed/cDsNmv2kHLw",
  ];

  return (
    <section className={styles.opinions}>
      <span className={styles.subtitle}>OPINIE</span>
      <h2 className={styles.title}>Co o nas mówią?</h2>
      <div className={styles.videosContainer}>
        <div className={styles.scrollContainer}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src={video}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Opinions;

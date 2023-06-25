import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import { Nav } from "../Nav";
import { Footer } from "../Footer";

const images = [
  "src/assets/Background_Blur4.png",
  "src/assets/Background_Blur5.png"
  
 
  
  // Add more image paths as needed
];

export const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentImageIndex = images.indexOf(backgroundImage);
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setBackgroundImage(images[nextImageIndex]);
    }, 5000); // Change the background image every 5 seconds (5000 milliseconds)

    // Show initial image immediately
    const initialImageIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[initialImageIndex]);

    return () => clearInterval(interval);
  }, [backgroundImage]);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Set the container height to cover the full screen vertically
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Align text to the top
    alignItems: "center",
    overflow: "hidden", // Prevent scrolling
  };

  const textContainerStyle = {
    marginTop: "10vh", // Adjust the top margin of the text container
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Nav />
      <div className="relative" style={containerStyle}>
        <div className="text-container" style={textContainerStyle}>
          <img src="src\assets\pngwing.com.png" className="Baby_landing"></img>
        </div>
      </div>
      
    </div>
  );
};


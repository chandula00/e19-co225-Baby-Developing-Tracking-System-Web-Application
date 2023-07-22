import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { useNavigate, useLocation } from "react-router-dom";
import AuthService from "../services/auth.service";

const images = [
  "/assets/Background_Blur4.png",
  "/assets/Background_Blur5.png",

  // Add more image paths as needed
];

export const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const handleItemClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentImageIndex = images.indexOf(backgroundImage);
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setBackgroundImage(images[nextImageIndex]);
    }, 5000); // Change the background image every 5 seconds (5000 milliseconds)

    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user.role);
    }
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
          <div className="welcome-message">
            {!currentUser && (
              <p>
                Welcome to Sproutopia, where your baby's growth blossoms! Unlock
                the full potential of your little sprout with our comprehensive
                tracking system. Register now and nurture your baby's journey
                with confidence.
              </p>
            )}
            {!currentUser && (
              <button
                className="home-signup border-2 border-gray-700"
                onClick={() => handleItemClick("/register")}
              >
                <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Sign
                Up
                <span></span>
              </button>
            )}

            {currentUser && (
              <p>
                Welcome to Sproutopia, the go-to hub for parents and caregivers
                navigating the remarkable journey of their little ones. With our
                intuitive platform, you can effortlessly track milestones,
                monitor growth, and stay organized with appointments and
                vaccinations. Sproutopia is here to simplify the process and
                empower you with valuable insights. Join our thriving community
                and embark on this incredible adventure of nurturing and
                supporting your sprout's development. Let's create a beautiful
                future together in the digital age.
              </p>
            )}
          </div>
          <img src="\assets\pngwing.com.png" className="Baby_landing"></img>
        </div>
      </div>
    </div>
  );
};

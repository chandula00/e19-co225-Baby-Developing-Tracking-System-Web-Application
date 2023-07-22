import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./NotificationAlert.css";

const NotificationAlertIcon = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the API
    const fetchNotifications = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"));
        const access = token.access_token;
        //console.log(access);

        const response = await axios.get(
          "http://localhost:8080/api/v1/notifications/get",
          {
            headers: {
              Authorization: "Bearer " + access,
            },
          }
        );

        const contentArray = response.data.map((obj) => obj.content);
        setNotifications(contentArray);
        //console.log(contentArray);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setNotifications([
          "Sample Notification 1",
          "Sample Notification 2",
          "Sample Notification 3",
        ]);
      }
    };

    fetchNotifications();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNotificationClick = () => {
    // Handle notification click event
  };

  const clearNotifications = () => {
    setNotifications([]);

    const token = JSON.parse(localStorage.getItem("user"));
    const access = token.access_token;
    console.log("Clear Notifications");

    axios.get("http://localhost:8080/api/v1/notifications/delete", {
      headers: {
        Authorization: "Bearer " + access,
      },
    });
  };

  return (
    <div className="notification-icon-container">
      <div className="notification-icon" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBell} size="lg" />
        {notifications.length > 0 && (
          <span className="notification-count">{notifications.length}</span>
        )}
      </div>

      {showDropdown && (
        <div className="dropdown justify-center">
          {notifications.map((notification, index) => (
            <p className="notificationData text-gray-500" key={index}>
              {notification}
            </p>
          ))}
          {notifications.length > 0 && (
            <button
              className="clearNotification px-2 text-center text-red-700 absolute bottom-2 justify-self-center"
              onClick={clearNotifications}
            >
              Clear Notifications
            </button>
          )}
          {notifications.length === 0 && (
            <p className="notificationDataEmpty text-gray-500">
              {" "}
              Currently have no Notifications
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationAlertIcon;

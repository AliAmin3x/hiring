import React from "react";
import "./CheckInCard.css"; 

const CheckInCard = ({
  checkInName,
  checkInDate,
  owner,
  image,
  status,
  avatar,
  onCardClick,
  guests,
  rooms,
  id,
}) => {
  return (
    <div
      className="checkin-card"
      onClick={() =>
        onCardClick({ checkInDate, image, avatar, guests, rooms, id })
      }
    >
      <div className="checkin-card-image-wrapper">
        <img className="checkin-card-image" src={image} alt="CheckIn" />
        <div className="checkin-card-status">
          <span className="checkin-status-badge">{status}</span>
        </div>
      </div>

      <div className="checkin-card-details">
        <h2 className="checkin-card-title">{checkInName}</h2>
        <p className="checkin-card-date">{checkInDate}</p>
        <div className="checkin-card-owner">
          <img
            src={avatar}
            alt="Owner Avatar"
            className="checkin-owner-avatar"
          />
          <p className="checkin-owner-info">
            <span className="checkin-owner-label">Owner:</span> {owner}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckInCard;

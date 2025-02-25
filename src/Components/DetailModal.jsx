import { useState } from "react";
import { format } from "date-fns";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import "./DetailsModal.css"; 

export default function DetailModal({ isOpen, onClose, data }) {
  const [bookedDate, setBookedDate] = useState(new Date());

  if (!isOpen) return null;

  const handleDateChange = (e) => {
    const dateValue = new Date(e.target.value);
    setBookedDate(dateValue);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Details</h2>
          <CloseOutlinedIcon onClick={onClose} className="modal-close-icon" />
        </div>

        <div className="modal-content">
          <div className="modal-details">
            <div className="detail-row">
              <label className="detail-label">Booking Id</label>
              <p className="detail-value">{data.id}</p>
            </div>

            <div className="detail-row">
              <label className="detail-label">Rooms</label>
              <p className="detail-value">{data.rooms}</p>
            </div>

            <div className="detail-row">
              <label className="detail-label">Number of Guests</label>
              <p className="detail-value">{data.guests}</p>
            </div>

            <div className="detail-row">
              <label className="detail-label">Date</label>
              <p className="detail-date">
                {data.checkInDate}
                <DateRangeOutlinedIcon className="date-icon" />
              </p>
            </div>
          </div>
          <div className="modal-image-container">
            <img src={data.image} alt="Detail" className="modal-image" />
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="modal-cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button
            type="submit"
            onClick={onClose}
            className="modal-ok-button"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

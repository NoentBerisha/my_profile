import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        {content.type === 'image' && (
          <img src={content.src} alt="Modal Content" className="modal-image" />
        )}
        {content.type === 'video' && (
          <video controls autoPlay className="modal-video">
            <source src={content.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {content.type === 'pdf' && (
          <iframe src={content.src} className="modal-pdf" title="PDF Content"></iframe>
        )}
      </div>
    </div>
  );
};

export default Modal;
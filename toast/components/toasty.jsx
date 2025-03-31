import React, { useState } from 'react'

const Toasty = () => {
  const [showToast, setShowToast] = useState([]);

  const handleClose = (id) => {
    const filteredToast = showToast.filter((toast) => toast.id !== id);
    setShowToast(filteredToast);
  };

  const handleShow = (message, type) => {
    const id = new Date().getTime();
    const newToast = [...showToast, { id, message, type }];
    setShowToast(newToast);

    // Auto close 
    setTimeout(() => {handleClose(id);}, 3000);
  };

  return (
    <div className="container">
      <div className="toast-container">
        {showToast.map(({ id, message, type }) => (
          <div key={id} className={`toast ${type}`}>
            {message}
            <span onClick={() => handleClose(id)}>
              ✖
            </span>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button onClick={() => handleShow('Success Toast', 'success')}>
          Success Toast
        </button>
        <button onClick={() => handleShow('Info Toast', 'info')}>
          Info Toast
        </button>
        <button onClick={() => handleShow('Warning Toast', 'warning')}>
          Warning Toast
        </button>
        <button onClick={() => handleShow('Error Toast', 'error')}>
          Error Toast
        </button>
      </div>
    </div>
  );
};

export default Toasty;

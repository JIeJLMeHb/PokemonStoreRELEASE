import React from 'react';

const ContactPage = () => {
  const storeLocation = {
    lat: 41.3127248,
    lng: 69.2461018,
    address: "Asaka Tower, Tashkent, Узбекистан"
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Pokémon Store</h1>
        <p>Get in touch with us for any inquiries or visit our store!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Store Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i>📍</i>
              <span>{storeLocation.address}</span>
            </div>
            <div className="contact-item">
              <i>📞</i>
              <span>+8 (800) 555-35-35</span>
            </div>
            <div className="contact-item">
              <i>✉️</i>
              <span>contact@pokemonstore.com</span>
            </div>
            <div className="contact-item">
              <i>🕒</i>
              <span>Open 7 days a week</span>
            </div>
          </div>
          
          <div className="business-hours">
            <h3>Business Hours</h3>
            <ul className="hours-list">
              <li><span>Monday - Friday:</span> <span>9:00 - 20:00</span></li>
              <li><span>Saturday:</span> <span>10:00 - 21:00</span></li>
              <li><span>Sunday:</span> <span>11:00 - 18:00</span></li>
            </ul>
          </div>
        </div>
        
        <div className="map-container">
          <h2>Find Us Here</h2>
          <iframe
            src={`https://maps.google.com/maps?q=${storeLocation.lat},${storeLocation.lng}&z=15&output=embed`}
            className="map-frame"
            title="Pokémon Store Location"
            allowFullScreen
          />
          <p style={{ marginTop: '15px', color: '#666', fontSize: '0.9rem' }}>
            <strong>Store Location:</strong> {storeLocation.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import React from 'react';

function MapComponent() {
  return (
    <div style={{ width: '100%', height: '800px' }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 ,  blacktheme: true}}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.957223012211!2d-111.94046552421798!3d33.419228980797134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0e43d8df2357%3A0xf34c073d3b313c5b!2s1130%20E%20University%20Dr%2C%20Tempe%2C%20AZ%2085281%2C%20USA!5e0!3m2!1sen!2sin!4v1695881390230!5m2!1sen!2sin"

        allowFullScreen
        title="Sintana Alliance Map"
      ></iframe>
    </div>
  );
}

export default MapComponent;

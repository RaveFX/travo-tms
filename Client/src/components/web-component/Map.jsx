import React from 'react';

function Map() {
  return (
    <div className="flex flex-col m-5 gap-1 p-5 w-[420px] h-[600px] bg-white rounded-lg shadow-lg z-[1000]">
      <div className="p-1 m-0 h-full">
        <iframe
          src="https://storage.googleapis.com/maps-solutions-8ro2jthmg3/commutes/i5i2/commutes.html"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, button:'[#72C075]' }}
          allowFullScreen
          title="Google Map"
          className='button:bg-[#72C075]'
        ></iframe>
      </div>
    </div>
  );
}

export default Map;

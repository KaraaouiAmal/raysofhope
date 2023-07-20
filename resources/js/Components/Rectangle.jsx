import React from 'react';
import Charitybox from './Charitybox';
import DollarCoin from './DollarCoin';
import Train from './Train';

const Rectangle = ({ style, children }) => {
  return (
    <div
      style={{
        ...style,
        width: '90%', // Responsive width relative to the parent container
        height: '180px',
        flexShrink: 0,
        borderRadius: '10px 0px 10px 10px',
        background: '#8B2024',
        margin: '1% auto', // Responsive margins to center the rectangle horizontally and adjust vertically
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1, // Set a higher zIndex to ensure the rectangle appears on top of other elements
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
      }}
    >
            {/* First section */}
            <div style={{ flex: 1, color: 'white', marginInline:'40px',textAlign: 'center'}}>
            <span className='font-bold' style={{color:'#F2902F'}}>donations received</span>
            <Charitybox/>
            </div>
            {/* Second section */}
            <div style={{ flex: 1, color: 'white',marginInline:'40px',textAlign:'center' }}>
            <span className='font-bold' style={{color:'#F2902F'}}>Sponsorships Given</span>
            <Train/>
            </div>

            {/* Third section */}
            <div style={{ flex: 1, color: 'white',marginInline:'40px', textAlign:'center' }}>
            <span className='font-bold' style={{color:'#F2902F'}}>Money raised so far</span>
            <DollarCoin/>
            </div>
    

    </div>
  );
};

export default Rectangle;

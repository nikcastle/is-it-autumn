import React from 'react';


  const CurrentDate = () => {
    const today = new Date().toISOString()
    return (
      <>
          {today}
      </>
    );
    };



  export default CurrentDate;






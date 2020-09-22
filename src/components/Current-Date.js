import React from 'react';


  const CurrentDate = () => {
    let today = new Date();
    today = today.toISOString
    console.log(today);
    
    return (
      <>
          {today}
      </>
    );
    };



  export default CurrentDate;






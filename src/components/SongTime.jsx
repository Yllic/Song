import React from "react";

const SongTime = (props) => {
  // console.log(props.dataTime);
  return (
    <div className="calendar">
      {
        props.dataTime.slice(0, 2).map((item, index) => (
          <div className="days" key={index}>
            <div className="days_title">
              <p>{(new Date().getMonth() + 1) + "/" + (new Date().getDate())}</p>
              <h4>{item.title}</h4>
            </div>
            <img src={item.imgUrl} alt="" />
          </div>
        ))
      }  
    </div>
    
  )
}

export default SongTime;
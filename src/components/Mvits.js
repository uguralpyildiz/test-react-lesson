import React from 'react';

const Mvits = (props) => (
    <div className="box">
        <div className="box-head">
            <div className="profile">
                <img src={props.pimg} />
            </div>
            <div className="box-title">
                {props.me}
            </div>
        </div>
        <div className="box-img">
            {props.tweet}
            {props.img}
        </div>
        <div className="like-container">
            <div className="date">
                {props.date}
            </div>
        </div>
    </div>
);

export default Mvits;
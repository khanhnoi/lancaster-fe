import React from 'react';

const LocationItem = (props) => {
    const { title, text, percentage } = props;
    return (
        <>
            <div className="location-card">
                <div className="location-card-title position-relative" >
                    <p>{title}</p>
                    <div className="location-card-title-percentage position-absolute" style={{
                        position: "absolute",
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: "0",
                        bottom: "0",
                        width: 300 - percentage * 300,
                        height: `5px`,
                        zIndex: '100'
                    }}></div>
                </div>
                <div className="location-card-text">
                    <p>
                        {text}
                    </p>
                </div>
                <div className="location-card-btn">
                    <div className="button-hover">
                        <p>read more</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LocationItem;

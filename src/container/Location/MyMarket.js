import React from 'react';
import iconHere from '../../assets/images/icons/myMaketKN.png';

const MyMarket = (props) => {
    const { text, lat, lng } = props;
    return (
        <>
            <div className="my-market" lat={lat} lng={lng}>
                <img className="my-market-icon" src={iconHere} alt="myMaket" />
                <div className="my-market-info">
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}

export default MyMarket;

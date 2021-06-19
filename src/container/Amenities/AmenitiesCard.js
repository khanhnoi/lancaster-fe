import React from 'react';
import cx from 'classnames';

const AmenitiesCard = (props) => {
    const { title, text } = props;
    return (
        <>
            <div className="amenities-card left-to-right">
                <div className={title && title.length < 15 ? cx("amenities-card-title") : cx("amenities-card-title amenities-card-title--small")}>
                    <p>{title}</p>
                </div>
                <div className="amenities-card-text">
                    <p>
                        {text}
                    </p>
                </div>
                <div className="amenities-card-button">
                    <div className="button-hover">
                        <p>
                            read more
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AmenitiesCard;

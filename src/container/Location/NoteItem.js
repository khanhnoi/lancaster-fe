import React from 'react';

const NoteItem = (props) => {
    const {title, color } = props;
    return (
        <>
            <div className="note-map">
                <div className="note-map-icon">
                    <div className="note-map-icon-dot" style={{backgroundColor: color}}></div>
                </div>
                <div className="note-map-title">
                    <p>{title}</p>
                </div>
            </div>
        </>
    );
}

export default NoteItem;

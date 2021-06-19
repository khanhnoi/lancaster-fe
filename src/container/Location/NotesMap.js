import React from 'react';
import NoteItem from './NoteItem';

const NotesMap = () => {
    return (
        <>
            <div className="location-map-note">
                <div className="location-map-note-header"></div>

                <NoteItem title="All"/>
                <NoteItem title="Arts & Culture" color="#D9001E" />
                <NoteItem title="Restaurants & Epicurean" color="#BB08F1" />
                <NoteItem title="Shopping" color="#08F10F" />
                <NoteItem title="Central Park" color="#009FD9" />
                <NoteItem title="Wellness" color="#F1D208" />
                
            </div>
        </>
    );
}

export default NotesMap;

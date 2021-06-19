import React, {useState} from "react";
import Popup from "reactjs-popup";

const Modal = props => {
    const { open, data: { title, content } } = props;

    return (
        <Popup
            open={open}
            closeOnDocumentClick={false}
            onClose={() => props.action(false)}
        >
            <div className="modal-popup">
                <div className="popup-header"> 
                    {title} 
                    <a className="close" onClick={() => props.action(false)}>
                        &times;
                    </a>
                </div>
                <div className="body-content"> {content} </div>
            </div>
        </Popup>
      );
}

export default Modal;
import React from 'react';

const TeamItem = (props) => {
    const { background, title, header, text, textRight, onWheel, id } = props

    if (textRight) {
        return (
            <section className='container-fluid p-0' >
                <div className='team-item'>
                    <div className='team-item-bgr'>
                        <div className="team-item-bgr-left" style={{ backgroundImage: `url(${background})` }}>
                        </div>
                    </div>
                    <div className='team-item-card'>
                        <div className="team-card team-card-right">
                            <div className='team-card-title'>
                                <p>{title}</p>
                            </div>
                            <div className='team-card-header'>
                                <p>{header}</p>
                            </div>
                            <div className='team-card-text'>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className='container-fluid p-0'>
                <div className='team-item'>
                    <div className='team-item-card'>
                        <div className="team-card team-card-left">
                            <div className='team-card-title'>
                                <p>{title}</p>
                            </div>
                            <div className='team-card-header'>
                                <p>{header}</p>
                            </div>
                            <div className='team-card-text'>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                    <div className='team-item-bgr'>
                        <div className="team-item-bgr-right" style={{ backgroundImage: `url(${background})` }}
                        ></div>
                    </div>
                </div>
            </section>
        )
    }
}
export default TeamItem;
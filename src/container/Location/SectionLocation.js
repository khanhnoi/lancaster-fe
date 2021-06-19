import React from 'react';
import { Parallax } from 'react-parallax';
import cx from 'classnames'
import LocationItem from './LocationItem';
import bgBlack from '../../assets/images/bg_black.png'

const SectionLocation = (props) => {
    const { bg, strength, title, text, right } = props;
    const  customPar = props && props.customPar || 1000;
    const typeTxtClass = right ? "offset-lg-6 offset-md-4" : "";
    const typeBgClass = right ? "bg-cover-dark--right" : "bg-cover-dark--left"
    return (
        <>
            <div className="section">
                <Parallax bgImage={bgBlack} strength={strength || 500} renderLayer={percentage => (
                    <>
                        <section
                            className="container-fluid location-body"
                        >
                            <div className="location-body-bg" style={{
                                backgroundImage: `url(${bg})`, transform: `translateY(${(percentage - 0.5) * customPar}px)`
                            }}></div>
                            <div className={cx("location-body-bg", typeBgClass)}></div>
                            <div className="location-body-content">
                                <div className="container">
                                    <div className="row">
                                        <div className={cx("col-lg-6  col-md-8", typeTxtClass)} >
                                            <LocationItem
                                                title={title}
                                                text={text}
                                                percentage={percentage}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>

                )}>

                </Parallax>

            </div>
        </>
    );
}

export default SectionLocation;

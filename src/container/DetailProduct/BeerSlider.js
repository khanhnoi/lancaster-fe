import React, { useState } from 'react';
import cx from 'classnames';

const BeerSlider = ({ beforeImg, afterImg }) => {
	const [valueSlide, setValueSlide] = useState(50);
	const cxClassBeer = valueSlide !== 0 ? 'beer-ready' : '';
	const changeSlide = e => {
		setValueSlide(e.target.value);
	};
	return (
		<div id="beer-slider" className={cx('beer-slider', cxClassBeer)}>
			<img src={beforeImg} alt="" />
			<div className={'beer-reveal'} style={{ width: `${valueSlide}%` }}>
				<img src={afterImg} alt="" />
			</div>
			<input
				type="range"
				className="beer-range"
				aria-valuemin={0}
				aria-valuemax={100}
				onChange={changeSlide}
				aria-valuenow={valueSlide}
				defaultValue={valueSlide}
				min={0}
				max={100}
			/>
			<span className="beer-handle" style={{ left: `${valueSlide}%` }}></span>
		</div>
	);
};

export default BeerSlider;

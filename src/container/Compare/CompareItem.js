import React from 'react';
import img from '../../assets/images/3.svg';
import imgStar from '../../assets/images/star.svg';

const CompareItem = props => {
	const { col, active, text, setStep, step } = props;
	return (
		<>
			<div className={col ? 'left-choose-list-item col' : 'left-choose-list-item'}>
				<img className="left-choose-list-item-img" src={img} />
				<div className="left-choose-list-item-main">
					<div className="left-choose-list-item-main-info">
						<div className="icon">
							<img src={imgStar} /> <p>805</p>
						</div>
						<div className="text">
							<p>
								2 <span>BEDROOM</span>
							</p>
						</div>
						<div className="text">
							<p>
								2 <span>BATHROO</span>
							</p>
						</div>
						<div className="text">
							<p>
								805 <span> SQ.FT</span>
							</p>
						</div>
						<div className="text">
							<p>
								E <span>VIEWS</span>
							</p>
						</div>
					</div>
					<div className="left-choose-list-item-main-button">
						<button onClick={() => setStep(step + 1)}>AVAILABLE UNITS</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CompareItem;

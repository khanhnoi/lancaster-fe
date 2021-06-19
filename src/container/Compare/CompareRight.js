import React from 'react';
import img from '../../assets/images/3.svg';
import plus from '../../assets/images/plus.svg';
import icon from '../../assets/images/icon.svg';
import imgStarBlack from '../../assets/images/starBlack.svg';
import { withRouter } from 'react-router-dom';
const CompareRight = props => {
	const { text, step, setStep, history } = props;
	return text ? (
		<div className="col-md-6 left-choose-main">
			<div className="left-choose-main-text">
				<p>Select the first floorplan on left to compare</p>
			</div>
		</div>
	) : (
		<>
			<div className="col-md-6 ">
				<div className="right-choose">
					<div className="right-choose-select" onClick={() => setStep(step - 1)}>
						<img src={icon} />
						<p>SELECT</p>
					</div>
					<div className="right-choose-img">
						<img src={img} />
					</div>
					<div className="right-choose-main">
						<div className="right-choose-text">
							<div className="right-choose-text-header">
								<img src={imgStarBlack} /> <span>805</span>
							</div>
							<p className="text">
								2 <span>BEDROOM</span>
							</p>
							<p className="text">
								2 <span>BATHROO</span>
							</p>
							<p className="text">
								805 <span> SQ.FT</span>
							</p>
							<p className="text">
								E <span>VIEWS</span>
							</p>
						</div>
						<div className="right-choose-text-button">
							<button
								onClick={() => {
									history.push('/compare/detail_product');
								}}
							>
								Floorplans detail
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default withRouter(CompareRight);

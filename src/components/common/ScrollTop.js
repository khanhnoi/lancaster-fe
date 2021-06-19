import React from 'react';
import topArrow from '../../assets/images/top-arrow.svg';
import cx from 'classnames';

const ScrollToTop = props => {
	const { scrollTop } = props;
		return (
			<>
				<div className="top-arrow" onClick={scrollTop}>
					<img src={topArrow} />
				</div>
			</>
		);
};

export default ScrollToTop;

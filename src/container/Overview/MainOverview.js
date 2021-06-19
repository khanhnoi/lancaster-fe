import React from 'react';
import { Link } from 'react-router-dom';
import left from '../../assets/images/left.svg';
import Carousel from 'react-multi-carousel';

const MainOverview = props => {
	const { bg, img, order, id, onWheel, title, text, button, link } = props;

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};
	return (
		<>
				<section className="overview-main"  onWheel={onWheel} style={{ backgroundImage: `url(${bg})`}} >
					<div className="shadow"></div>
					<div className="container ">
						<div className="row">
							<div
								className={img ? 'col-lg-6  overview-main-left' : 'col-lg-8  overview-main-left'}
								style={{ order: order }}
								id={id}
							>
								<div className="overview-main-left-title">
									<p>{title}</p>
								</div>
								<div className="overview-main-left-text">
									<p>{text}</p>
								</div>
								<div className="overview-main-left-button ">
									<button className="btn-hover-white-down">
										<Link to={link}>
											{button} <img src={left} />
										</Link>
									</button>
								</div>
							</div>
							{img ? (
								<div className={img ? 'col-lg-6 ' : 'col-lg-5 '} id={img ? `img-${id}` : ''}>
									<div className="overview-main-right">
										<Carousel
											responsive={responsive}
											arrows={false}
											autoPlay={true}
											autoPlaySpeed={5000}
											infinite={true}
											transitionDuration={3000}
											minimumTouchDrag={0}
											additionalTransfrom={0}
										>
											{img.map((item, index) => {
												return <img key={index.toString()} src={item} alt="Map" />;
											})}
										</Carousel>
									</div>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</section>
		</>
	);
};

export default MainOverview;

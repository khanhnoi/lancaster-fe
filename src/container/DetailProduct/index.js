import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImagesProduct from './ImagesProduct';
import nav from '../../assets/images/nav-menu.svg';
import Image3D from '../../assets/images/3d_floor.png';
import BackArrowIcon from '../../assets/images/icons/back_arrow.svg';
import MenuImages from './MenuImages';
import imgDetailProduct from './../../assets/images/detail_product.png';
import iconEdit from './../../assets/images/icons/edit.svg';
import NewProduct from './NewProduct';
import Louge from '../../assets/images/louge.png';
import BgViewline from '../../assets/images/bg1.png';
import BgViewline2 from '../../assets/images/bg2.png';
import BgViewline3 from '../../assets/images/bg3.png';
import BgView2Lightent from '../../assets/images/bg2_lighten.png';
import ToggleDetailFloor from '../../assets/images/icons/toggle_detail_floor.svg';
import LougeLighten from '../../assets/images/louge_lightent.png';

const listImagesFloors = [
	{
		id: 1,
		name: '2d floor plan',
		img: imgDetailProduct
	},
	{
		id: 2,
		name: '3d floor plan',
		img: Image3D
	},
	{
		id: 3,
		name: 'gallery',
		img: [
			{
				id: 12,
				name: 'Gallery in room',
				type: 'gallery',
				img: [Louge, Image3D, imgDetailProduct]
			},
			{
				id: 55,
				name: 'Viewline',
				type: 'gallery',
				img: [BgViewline2, BgViewline, BgViewline3]
			}
		],
		type: 'gallery'
	},
	{
		id: 5,
		name: 'Colour Scheme',
		img: [
			{
				id: 22,
				name: 'Louge',
				type: 'schema',
				img: [Louge, LougeLighten]
			},
			{
				id: 10,
				name: 'Viewline',
				type: 'schema',
				img: [BgViewline2, BgView2Lightent]
			}
		],
		type: 'gallery'
	},
	{
		id: 4,
		name: 'indicative viewline',
		img: BgViewline
	}
];
const DetailProduct = props => {
	const [openNew, setOpen] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const [indexImage, setIndexImage] = useState(listImagesFloors[0]);
	const newFolder = (e, status) => {
		setOpen(true);
	};
	const closeFolder = (e, status) => {
		setOpen(status);
	};

	const infoFloor = {
		title: 'ONE 57 living',
		name: 'Residence A',
		acreageFoot: 1060,
		acreageMetre: 98.5,
		floors: '32-38'
	};
	const infoRoom = ['1 Bedroom', '1 Bathroom', 'Powder room'];
	const residenceFeatures = [
		'Bedroom Suite with Windowed Master Bathroom',
		'Corner Living / Dining Room',
		`Washer and Dryer", "Finished Ceiling Height App oximately 10'6"`,
		'Gourmet Open Kitchen'
	];
	const finishedAndDesign = [
		'Custom interior Details by Thomas Juul - Hansen',
		'Hand Crafted Kitchen by Smallbone of Devizes',
		'Premium Miele and Sub-Zero Appliances',
		'Fine Natural Stones',
		'Fittings and Fixtures by Dronbracht',
		'Rift Sawn Oak Flooring'
	];
	const handleMenuImage = () => {
		setOpenMenu(!openMenu);
	};
	const clickOutside = () => {
		if (openMenu) setOpenMenu(false);
	};
	const handleSelectImages = imageInfo => {
		setIndexImage(imageInfo);
		if (openMenu) setOpenMenu(false);
	};
	return (
		<>
			<div className="detail-product">
				<Link to="/overview" className="back_3d_view btn-hover-simple-text-white">
					<img src={BackArrowIcon} alt="back arrow" />
					<span className="type2">3D</span>
					<span> </span>
					<span>Model</span>
				</Link>
				<div className="togger_detail_floor">
					<button onClick={handleMenuImage}>
						<img src={ToggleDetailFloor} alt="" />
					</button>
				</div>
				<div className="-left">
					<h2 className="title-main">{infoFloor.title && infoFloor.title}</h2>
					<p className="name">{infoFloor.name && infoFloor.name}</p>
					<p className="floor">Floors {infoFloor.floors && infoFloor.floors}</p>
					<hr className="line" />
					<p>
						{infoFloor.acreageFoot && infoFloor.acreageFoot} square feet |{' '}
						{infoFloor.acreageMetre && infoFloor.acreageMetre} square meters
					</p>
					<div className="content">
						{infoRoom && infoRoom.map((info, index) => <p key={index.toString()}>{info}</p>)}

						<div className="description">
							<p className="title">RESIDENCE FEATURES</p>
							<ul>
								{residenceFeatures &&
									residenceFeatures.map((feat, index) => (
										<li key={index.toString()}>
											<p>{feat}</p>
										</li>
									))}
							</ul>
						</div>
						<div className="description">
							<p className="title">FINISHES AND DESIGN</p>
							<ul>
								{finishedAndDesign &&
									finishedAndDesign.map((info, index) => (
										<li key={index.toString()}>
											<p>{info}</p>
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
				<div className="-right">
					<button className="togger_detail_floor" onClick={handleMenuImage}>
						<img src={nav} alt="Toggle" />
					</button>
					<div className="content">
						<div className="content--image">
							<ImagesProduct
								type={indexImage.type && indexImage.type}
								img={indexImage.img && indexImage.img}
							/>

							<span className="label">{indexImage.name}</span>
						</div>
						<div className="list-function">
							<a className="btn-function btn-hover-black-down" onClick={e => newFolder(e, true)}>
								<img className="icon-edit" src={iconEdit} alt="Edit" />
								update
							</a>
							<a className="btn-function">ADD TO FAVOUrites</a>
							<a className="btn-function">Dowload PDF</a>
							<select className="btn-function">
								<option value="">available units</option>
							</select>
							<a className="btn-function">compare</a>
						</div>
					</div>
				</div>
				<NewProduct open={openNew} closeFolder={closeFolder} />
				<MenuImages
					indexId={indexImage && indexImage.id}
					listImagesFloors={listImagesFloors}
					invisible={openMenu}
					handleSelectImages={handleSelectImages}
				/>
			</div>
		</>
	);
};

export default DetailProduct;

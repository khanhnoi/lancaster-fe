import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const DetailProduct = props => {
	const { closeFolder } = props;
	const [invisible, setInvisible] = useState(false);
	useEffect(() => {
		setInvisible(props.open);
	}, [props]);
	const closeModal = (e, status) => {
		closeFolder(e, false);
		setInvisible(status);
	};
	const closePopup = () => setInvisible(false);
	const optionListFavorite = [
		{ label: 'Available', id: 1 },
		{ label: 'Reserved', id: 2 },
		{ label: 'Downpayment', id: 3 },
		{ label: 'Sold', id: 4 }
	];
	return (
		<>
			<Popup open={invisible} modal closeOnDocumentClick={false} className="custom-popup" closeOnEscape={false}>
				<div className="header">
					<span className="close-btn" onClick={e => closeModal(e, false)}></span>
				</div>
				<div className="body">
					<p className="title">APT NO. 1302 - UPDATE STATUS</p>
					<form>
						<select>
							{optionListFavorite &&
								optionListFavorite.map(opt => (
									<option key={opt.id.toString()} value={opt.id}>
										{opt.label}
									</option>
								))}
						</select>
						<button
							className="btn-submit"
							onClick={e => {
								e.preventDefault();
							}}
						>
							ok
						</button>
					</form>
				</div>
			</Popup>
		</>
	);
};

export default DetailProduct;

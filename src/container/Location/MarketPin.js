import React, { useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#000',
		color: '#fff'
	},
	overlay: {
		backgroundColor: `rgba(0, 0, 0, 0.3)`
	},
};

const MarketPin = props => {
	const { text, lat, lng, color, isLast } = props;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	var subtitle;
	function openModal() {
		setIsOpen(true);
	}
	function afterOpenModal() {
		subtitle.style.color = color;
	}
	function closeModal() {
		setIsOpen(false);
	}
	useEffect(() => {
		if (isLast === true) {
			setIsOpen(false);
		}
	}, [isLast]);
	return (
		<>
			<div className="market-pin" id="marketPin" lat={lat} lng={lng} style={{ backgroundColor: color }} onClick={openModal}>
				{/* {text} */}
			</div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Modal"
				shouldCloseOnOverlayClick={true}
				ariaHideApp={false}
			>
				<h2 ref={_subtitle => (subtitle = _subtitle)}>MY MARKET</h2>
				<div>This is my market, you choose it</div>
			</Modal>
		</>
	);
};

export default MarketPin;

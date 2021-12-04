import { useState } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const [modalIsOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!modalIsOpen);
	};

	return (
		<>
			<aside className="sidebar">
				<div className="logo">
					<img src="https://brandcolors.net/assets/img/logo.png" alt="logo" />
					<a href="/">
						Brand<b>Colors</b>
					</a>
				</div>
				<div className="info">
					The biggest collection of official brand color codes around. Curated
					by @brandcolors and friends.
				</div>
				<nav className="menu">
					<ul>
						<li>
							<span>Suggest a Brand</span>
							<span onClick={toggleModal}>About BrandColors</span>
						</li>
					</ul>
				</nav>
			</aside>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={toggleModal}
				className="about-modal"
				overlayClassName="about-modal-overlay"
			>
				<button className="modal-close-btn" onClick={toggleModal}>
					<GrClose />
				</button>
				<h2>About BrandColors</h2>
				<p>
					BrandColors was created by <b>DesignBombs</b>. The goal was to create
					a helpful reference for the brand color codes that are needed most
					often.
				</p>
				<p>
					It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
					Tuts+, and over <b>2 million pageviews</b>. There are now over{' '}
					<b>600 brands</b> with <b>1600 colors</b> and the collection is always
					growing.
				</p>
			</Modal>
		</>
	);
};

export default Sidebar;

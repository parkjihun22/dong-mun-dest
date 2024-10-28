import React, { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { IoCall, IoCloseSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

import styles from "./Header.module.scss";
import SlideMenu from "../../components/SlideMenu/SlideMenu";
import logoImageHover from "../../assets/logo/mainlogo.png";
import logoImage from "../../assets/logo/mainlogowhite.jpg";

const menuArray = [
	{
		title: "브랜드",
		subMenu: [
			{ subTitle: "브랜드 소개", subUrl: "/Brand/intro" },
			{ subTitle: "홍보 영상", subUrl: "/Brand/video" },
		],
	},
	{
		title: "사업개요",
		subMenu: [
			{ subTitle: "사업안내", subUrl: "/BusinessGuide/intro" },
			{ subTitle: "분양일정", subUrl: "/BusinessGuide/plan" },
			{ subTitle: "계약서류안내", subUrl: "/BusinessGuide/documents" },
		],
	},
	{
		title: "입지환경",
		subMenu: [
			{ subTitle: "입지안내", subUrl: "/LocationEnvironment/intro" },
			{ subTitle: "프리미엄", subUrl: "/LocationEnvironment/primium" },
		],
	},
	{
		title: "단지안내",
		subMenu: [
			{ subTitle: "단지 배치도", subUrl: "/ComplexGuide/intro" },
			{ subTitle: "호수 배치도", subUrl: "/ComplexGuide/detailintro" },
			{ subTitle: "커뮤니티", subUrl: "/ComplexGuide/community" },
		],
	},
	{
		title: "세대안내",
		subMenu: [
			{ subTitle: "84A", subUrl: "/FloorPlan/59A" },
			{ subTitle: "84B", subUrl: "/FloorPlan/59B" },
			{ subTitle: "107A", subUrl: "/FloorPlan/84A" },
		],
	},
	{
		title: "인테리어",
		subMenu: [
			{ subTitle: "84A", subUrl: "/Interior/59A" },
			{ subTitle: "84B", subUrl: "/Interior/84A" },
			{ subTitle: "107A", subUrl: "/Interior/84B" },
		],
	},
];

const Header = ({ isChanged }) => {
	const [isChange, setIsChange] = useState(isChanged);
	const [isMenu, setIsMenu] = useState(false);
	const [isMobileMenu, setIsMobileMenu] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

	useEffect(() => {
		if (!isMobile) setIsChange(!isChanged);
	}, [isChanged, isMobile]);

	useEffect(() => {
		console.log(isMenu);
	}, [isMenu])

	const handleMouseEnter = () => {
		setIsMenu(true);
	};

	const handleMouseLeave = () => {
		setIsMenu(false);
	};

	const closeMobileMenu = useCallback(() => {
		setIsMobileMenu(false);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (isMobileMenu) {
				closeMobileMenu();
			}
		};

		const handleClickOutside = (event) => {
			if (isMobileMenu && !event.target.closest(`.${styles.mobileHeader}`)) {
				closeMobileMenu();
			}
		};

		window.addEventListener('scroll', handleScroll);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMobileMenu, closeMobileMenu]);

	return (
		<>{!isMobile ? (
			<>
				{!isMenu ? (
					<header
						className={isChange ? styles.containerFirst : styles.container}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>

						<Link to='/'>
							<img src={isChange ? logoImageHover : logoImage} alt="jungheung-class-mainLogo-image" />
						</Link>

						<div className={styles.itemBox}>
							<a href="https://naver.me/FWfnlWCx" className={isChange ? styles.linkItem : styles.scrolledLinkItem}>
								모바일 상담예약
							</a>
							{menuArray.map((menu, idx) => (
								<Link key={idx} to={menu.subMenu[0].subUrl} className={isChange ? styles.item : styles.scrolledItem}>
									{menu.title}
								</Link>
							))}
						</div>

						<a href="https://naver.me/FWfnlWCx" className={isChange ? styles.phoneNumber : styles.scrolledPhoneNumber}>
							<IoCall size={30} /> 1533-8848
						</a>
					</header>
				) : (
					<header
						className={styles.secondContainer}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>

						<Link to='/'>
							<img src={logoImage} alt="jungheung-class-mainLogo-image" />
						</Link>

						<div className={isChange ? styles.title : styles.scrolledTitle}>
							평택화양동문디이스트
						</div>

						<div className={styles.itemBox}>
							<a href="https://naver.me/FWfnlWCx" className={styles.linkItem}>
								모바일 상담예약
							</a>
							{menuArray.map((menu, idx) => (
								<div key={idx} className={styles.detailItemBox}>
									<Link to={menu.subMenu[0].subUrl} className={styles.item}>
										{menu.title}
									</Link>

									<div className={styles.secondItemBox}>
										{menu.subMenu.map((submenu, subIdx) => (
											<Link key={subIdx} to={submenu.subUrl} className={styles.subitem}>
												{submenu.subTitle}
											</Link>
										))}
									</div>
								</div>
							))}

						</div>

						<a href="https://naver.me/FWfnlWCx" className={styles.phoneNumber}>
							<IoCall size={30} /> 1533-8848
						</a>
					</header>
				)}
			</>
		) : (
			<div className={styles.mobileHeader}>

				<div onClick={() => setIsMobileMenu(!isMobileMenu)}>
					{!isMobileMenu ?
						<AiOutlineMenu className={styles.icon} size={40} color="#053b02" />
						:
						<IoCloseSharp className={styles.icon} size={50} color="#053b02" />
					}
				</div>
				{isMobileMenu && <SlideMenu contents={menuArray} onClose={closeMobileMenu} />}

				<Link to='/'>
					<img src={logoImage} alt="jungheung-class-mainLogo-image" className={styles.logo} />
				</Link>

				<a href={'tel:1533-8848'}>
					<IoCall className={styles.icon} size={30} color="#053b02" />
				</a>

			</div>
		)}
		</>
	);
};

export default Header;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Interior.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";

import page1 from "../../assets/Interior/Interior3/page1.jpg";

const Interior3 = () => {
	const menuContents = [
		{ title: "59A", url: "/Interior/59A" },
		{ title: "84A", url: "/Interior/84A" },
		{ title: "84B", url: "/Interior/84B" },

	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	// 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="인테리어" />

			<MenuBar contents={menuContents} />

			<img className={styles.image} src={page1} 
   	 			></img>

			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 인테리어 이미지는 주택전시관을 실제 촬영한 것으로 전시품목 및 소품이 포함되어 있으니 청약 및 계약전 반드시 주택전시관에서 확인하시기 바랍니다.
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default Interior3;

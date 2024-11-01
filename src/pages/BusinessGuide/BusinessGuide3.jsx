import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/BusinessGuide/BusinessGuide3/page1.jpg";
//import Ready from "../../components/Ready/Ready";




const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "계약서류안내", url: "/BusinessGuide/documents" }
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
			<Helmet>
				<title>계약서류안내 - 평택 화양 동문디이스트</title>
				<meta name="description" content="평택화양동문디이스트의 분양일정을 통해 중요한 분양 일정을 확인하세요. 
				분양 일정과 필요한 모든 정보를 제공하여 성공적인 분양을 지원합니다." />
				<meta name="keywords" content="평택화양동문디이스트, 화양지구동문디이스트, 화양동문디이스트,평택푸르지오,평택화양푸르지오,화양신도시,신영지웰평택화양, 평택동문디이스트, 평택동문디이스트모델하우스,평택화양동문디이스트모델하우스" />
				<link rel="canonical" href="http://www.114modelhouse.co.kr/BusinessGuide/documents" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />
			
			<img className={styles.img2} src={page1} 
   	 			></img>
			


			

			<Footer />
			
		</div>

		
	)
}

export default BusinessGuide2;

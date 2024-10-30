import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/ComplexGuide/ComplexGuide2/page2.jpg";

const ComplexGuide1 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		{ title: "커뮤니티", url: "/ComplexGuide/community" },
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
				<title>호수배치도 - 평택 화양 동문디이스트</title>
				<meta name="description" content="평택화양동문디이스트의 세심하게 계획된 동호수배치도를 통해 각 유닛의 위치와 조망권을 확인하세요. 
				효율적인 동선과 최적의 개인 공간을 제공합니다." />
				<meta name="keywords" content="평택화양동문디이스트, 화양지구동문디이스트, 화양동문디이스트,평택푸르지오,평택화양푸르지오,화양신도시,신영지웰평택화양, 평택동문디이스트, 평택동문디이스트모델하우스,평택화양동문디이스트모델하우스" />
				<link rel="canonical" href="https://www.bunyang-114.com/ComplexGuide/detailintro" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="단지안내"/>

			<MenuBar contents={menuContents} />

			<img className={styles.img1} src={page1} 
   	 			></img>
			
			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를 확인하시기 바랍니다.
				</div>
			</div>
			
			<Footer />
		</div>
	)
}

export default ComplexGuide1;

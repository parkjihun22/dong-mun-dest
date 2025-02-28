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
			

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />
			<div className={styles.textBox}>
				<div>평택 화양신도시에서 누리는 특별한 라이프 컬렉션</div>
				<div>평택 화양 동문디이스트의 계약시 필요한 서류를 확인하세요.</div>
			</div>
			
			<img className={styles.img2} src={page1} 
   	 			></img>
			


			

			<Footer />
			
		</div>

		
	)
}

export default BusinessGuide2;

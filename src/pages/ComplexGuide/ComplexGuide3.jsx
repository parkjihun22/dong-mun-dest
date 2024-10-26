import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg"

const ComplexGuide3 = () => {
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

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="단지안내" />

			<MenuBar contents={menuContents} />

			<img className={styles.img1} src={page1} 
   	 			></img>

			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 커뮤니티 아이소 CG는 소비자의 이해를 돕기 위한 것으로 형태 및 구성은 인허가 과정이나 실제 시공 시 현장 여건 등에 따라 일부 변경될 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 상기 커뮤니티 기본시설 및 기본 마감재는 제공되나 내부 집기류 및 이동가구 등은 제외되며, 커뮤니티 시설의 운영방식은 향후 입주자대표회의에서 결정 됩니다..
				</div>
				<div className={styles.notice}>
					※ 주민운동시설 및 피트니스센터 내부에 표현된 운동시설의 종류 및 개수, 탈의실 및 샤워실, 바닥 및 벽체마감 등은 소비자의 이해를 돕기 위한 것으로 
					<br/>실제 시공시 차이가 있을 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 본 페이지의 면적, 수치, 가격, 동호표 등은 인쇄 및 편집과정에서 오류가 있을 수 있으니 계약 시 반드시 주택전시관에서 확인하시기 바랍니다.
				</div>
		
			</div>

			<Footer />
		</div>
	)
}

export default ComplexGuide3;

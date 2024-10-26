import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './FloorPlan.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";

import page1 from "../../assets/FloorPlan/FloorPlan4/page1.jpg";
import page2 from "../../assets/FloorPlan/FloorPlan4/page2.jpg";
import page3 from "../../assets/FloorPlan/FloorPlan4/page3.jpg";

const FloorPlan4 = () => {
	const menuContents = [
		{ title: "84A", url: "/FloorPlan/59A" },
		{ title: "84B", url: "/FloorPlan/59B" },
		{ title: "107A", url: "/FloorPlan/84A" },
	
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

			<Bener title="세대안내" />

			<MenuBar contents={menuContents} />

			<img className={styles.img1} src={page1} 
   	 			></img>

			<img className={styles.img2} src={page2} 
   	 			></img>

			<img className={styles.img3} src={page3} 
   	 			></img>

			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 시트판넬 및 라인조명 관련 옵션들은 소비자의 이해를 돕기 위해 표현하였으므로 실제와 차이가 있을 수 있으니 계약시 반드시 견본주택에서 확인하시길 바랍니다.
				</div>
				<div className={styles.notice}>
					※ 상기 이미지의 옵션은 가구 및 인테리어 유상옵션만 표기되어 있으니 가전 유상옵션 및 기타 유상옵션은 견본주택에서 확인하시기 바랍니다.
				</div>
				<div className={styles.notice}>
					※ 가구 및 인테리어 유상옵션은 발코니확장형 세대에 한하여 선택할 수 있습니다.
				</div>
				<div className={styles.notice}>
					※ 유상옵션 품목, 특화범위 및 위치 등은 오차가 있을 수 있으니 자세한 사항은 반드시 견본주택에서 확인하시기 바랍니다.
				</div>
				<div className={styles.notice}>
					※ 본 페이지의 면적, 수치, 가격, 동호표 등은 인쇄 및 편집과정에서 오류가 있을 수 있으니 계약 전 반드시 견본주택에서 확인하시기 바랍니다.
				</div>
				
			</div>

			<Footer />
		</div>
	)
}

export default FloorPlan4;

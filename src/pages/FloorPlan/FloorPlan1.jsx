import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './FloorPlan.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/FloorPlan/FloorPlan1/page1.jpg";


const FloorPlan1 = () => {
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
			<Helmet>
				<title>평면안내 84A - 평택 화양 동문디이스트</title>
				<meta name="description" content="평택 화양 동문디이스트의 유니트는 현대적인 설계와 효율적인 공간 활용을 특징으로 합니다. 
				각 유닛은 세련된 인테리어와 최신 편의 시설을 갖추고 있어, 최적의 주거 경험을 제공합니다. 
				다양한 평면 옵션을 통해 개인의 라이프스타일과 필요에 맞춰 선택할 수 있습니다." />
				<meta name="keywords" content="평택화양동문디이스트, 화양지구동문디이스트, 화양동문디이스트,평택푸르지오,평택화양푸르지오,화양신도시,신영지웰평택화양, 평택동문디이스트, 평택동문디이스트모델하우스,평택화양동문디이스트모델하우스" />
				<link rel="canonical" href="https://www.bunyang-114.com/FloorPlan/59A" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="세대안내" />

			<MenuBar contents={menuContents} />

			<img className={styles.img1} src={page1} 
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

export default FloorPlan1;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const LocationEnvironment1 = () => {
	const menuContents = [{ title: "입지안내", url: "/LocationEnvironment/intro" }, { title: "프리미엄", url: "/LocationEnvironment/primium" }];
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
				<title>프리미엄 - 평택 화양 동문디이스트</title>
				<meta name="description" content="고급 마감재와 세련된 디자인이 돋보이는 평택화양동문디이스트는 프리미엄 주거 공간을 제공합니다. 
				탁월한 건축 품질과 고급 시설이 조화롭게 어우러져 있습니다." />
				<meta name="keywords" content="평택화양동문디이스트" />
				<link rel="canonical" href="http://www.114modelhouse.co.kr/LocationEnvironment/primium" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="입지환경" />

			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
           			<div>전혀 새로운 평택동문디이시트만의 마스터플랜, 특별한 삶과 우월한 가치를 누리다
					   </div>
           		 	<div>품격과 자부심이 느껴지는 단지 특화설계</div>
         		</div>

			<img src={page1} className={styles.premiumImage} alt="premium-image-1" />

			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.
				</div>
			<div className={styles.notice}>
					※ 건물의 색채, 외관, 조경, 식재 및 보행로는 입주자의 이해를 돕기 위한 것으로 실제와 다소 차이가 있으며, 추후 인허가 과정 및 실제 시공 시 변경될 수 있습니다. 또한 구획선과 시설물의 위치 및 규모 역시 측량결과 및 각종 평가에 따라 시공 시 변경될 수 있습니다.
				</div>
			<div className={styles.notice}>
					※ 사용검사 때와 달리 입주 후 교통량 증가 등 주변여건 변화로 소음이 심화될 경우에는 행정청, 사업주체 및 시공사에 이의제기 및 보상 요구를 할 수 없으므로 소음에 대한 내용은 반드시 숙지하시고 분양 계약을 하시기 바랍니다.
				</div>
			<div className={styles.notice}>
					※ 연결녹지 및 보행자 도로는 관계기관의 여건에 따라 시공 시 시설물, 식재 계획, 레벨, 옹벽 등의 변경이 있을 수 있습니다.
				</div>
			<div className={styles.notice}>
					※ 향후 입주 후 주변 건축물 및 도로공사로 인한 먼지, 소음, 통행 불편, 일조, 조망, 사생활권의 침해가 발생할 수 있습니다.
				</div>
			<div className={styles.notice}>
					※ 본 홈페이지의 제작과정상 오탈자가 있을 수 있으므로 계약 시 반드시 확인하시기 바랍니다.
				</div>
			
			</div>

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;

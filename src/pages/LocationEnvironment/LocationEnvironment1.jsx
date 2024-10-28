import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";

import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";

import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import page2 from "../../assets/LocationEnvironment/LocationEnvironment1/page2.jpg";

const LocationSection = [
	{ img: section2Image1, titleText: "다양한 미래가치<br />직주근접 프리미엄", contentText: "평택호 관광단지,경기경제자유구역(BIX),자유무역지구<br /> 안중역 11월 개통으로 눈부신 내일" },
	{ img: section2Image2, titleText: "도보권으로<br />의세권을 누리릴 수 있는 프리미엄", contentText: "첨단의료 복합타운<br /> 500병상 규모로 2027년 개원 예정<br /> 복합공공청사,중앙공원등으로 편리한 생활" },
	{ img: section2Image3, titleText: "수도권 시내·외를 더 빠르게<br />광역으로 통하는 특급 교통", contentText: "안중역(KTX 직결예정),평택지제역(GTX A·C연장예정)<br />서해선 복선전철, 38번국도, 서해안고속도로 인접" },
	{ img: section2Image4, titleText: "학교, 쇼핑,병원, 문화를 더 가깝게 한걸음에<br />모두 갖춘 중심생활", contentText: "단지 5분권내 초등학교(예정)와 다수의 초·중·고교(예정) <br /> 홈플러스, 중심상업지구 인접" },
	{ img: section2Image5, titleText: "THE EST 품격있는 주거공간 프리미엄", contentText: "전세대 4BAY 설계로 활용도 높은 주거공간<br />서해조망권으로 품격있는 주거공간" },
	{ img: section2Image6, titleText: "여의도 규모급 평택 화양지구 ", contentText: "평택 새로운 중심이 될 약 2만세대<br />국내 최대규모 민간도시 개발사업 화양지구" },
]

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

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="입지환경" />

			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
				<div>놀라운 비전으로 평택의 새로운 중심될 화양신도시</div>
				<div>그곳에 평택 화양 동문디이스트가 찾아옵니다</div>
				<div>찬란한 비전에 완벽한 주거가치까지 더해 평택을 대표하는 프리미엄 라이프를 시작하다</div>
			</div>

			<img src={page1} className={styles.locationImg} alt="lacation-image-1" />
			<img src={page2} className={styles.locationImg} alt="lacation-image-2" />

			<div className={styles.section2}>
				{LocationSection.map((value, idx) => (
					<LocationSectionBox
						image={value.img}
						title={value.titleText}
						text={value.contentText}
					/>
				))}
			</div>

			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※  상기 지역도는 소비자의 이해를 돕기 위해 제작된 이미지 컷이며, 실제와 차이가 날 수 있습니다.
				</div>
			<div className={styles.notice}>
					※  상기 개발 및 교통, 학군 배정 등의 계획에 대한 사항은 추후 관계 기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.
				</div>
			<div className={styles.notice}>
					※  상기 개발 및 교통계획 관련 사항은 관계기관의 사정에 따라 변경, 지연 및 취소될 수 있으며 이는 당사와 무관합니다.	
				</div>
			<div className={styles.notice}>
					※  상기 GTX-A·C 연장에 대한 내용은 국토교통부의 보도자료(2024. 02. 22.)를 참조한 것으로 향후 관계기관의 사정에 의해 지연, 취소, 변경될 수 있으며 당사와 무관합니다
				</div>

			</div>

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;

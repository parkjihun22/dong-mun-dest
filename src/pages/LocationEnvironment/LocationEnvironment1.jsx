import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";

import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";

const LocationSection = [
	{ img: section2Image1, titleText: "확정된 개발호재로<br />평택을 더 새롭게 살수록 높아지는 미래가치", contentText: "삼성전자 평택캠퍼스 세계 최대 160만평규모(약289㎡)<br />최첨단 반도체 산업의 최중심<br />" },
	{ img: section2Image2, titleText: "도보10분권으로<br />의세권을 누리릴 수 있는 프리미엄", contentText: "아주대 첨단의료AI복합타운<br />AI활용 첨단의료시설로<br /> 500병상 규모로 2030년 개원 예정" },
	{ img: section2Image3, titleText: "수도권 시내·외를 더 빠르게<br />광역으로 통하는 특급 교통", contentText: "지제역 복한환승센터,송탄IC<br />1호선, SRT (현재운행중), KTX, GTX-A/C 확정<br /> 수도권 내 유일 펜타역세권 프리미엄" },
	{ img: section2Image4, titleText: "학교, 쇼핑,병원, 문화를 더 가깝게 한걸음에<br />모두 갖춘 중심생활", contentText: "브레인시티내 초·중·고 모두 개교예정 <br /> 카이스트 평택 캠퍼스 2027년 개교예정<br />이마트, 코스트코 , CGV 등 편의시설 인접" },
	{ img: section2Image5, titleText: "1군 브랜드<br />프리미엄 아파트", contentText: "중흥S클래스의 프리미엄" },
	{ img: section2Image6, titleText: "압도적 규모의 걸맞는<br />커뮤니티 구성", contentText: " <br />단지규모 차이는 “가격 차이”, 커뮤니티 차이는 “품격 차이”" },
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
				<div>브레인시티 모든호재의 중심의 메인으로 사는</div>
				<div>평택 브레인시티 중흥S클래스의 원탑 라이프의 시작!</div>
				<div>찬란한 비전에 완벽한 주거가치까지 더해 평택을 대표하는 프리미엄 라이프를 시작하다</div>
			</div>

			<img src={page1} className={styles.locationImg} alt="lacation-image-1" />

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
					※   상기 개발 및 교통, 학군 배정 등의 계획에 대한 사항은 추후 관계 기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.
				</div>
			<div className={styles.notice}>
					※  청약신청 및 계약 전에 반드시 입주자 모집공고, 모델하우스 현장, 관계 기관에 확인하시기 바랍니다.	
				</div>
			<div className={styles.notice}>
					※  상기 현황 및 개발계획은 관계기관의 홈페이지 등을 참조하여 작성된 것으로 사업계획 및 일정은 당사와는 무관하며, 추후 변경될 수 있습니다.<br />

					(평택시 고시 제2023-316호 평택(동부) 도시계획시설 대로 3-34호선, 중로2-117호선(광역1B)결정(경미한 변경) 및 지형도면 고시, <br />평택시 고시 제2022-148호 평택동부고속화도로 민간투자사업 실시계획 변경승인 고시, 국가철도공단 수도권 철도건설사업 추진현황 보도자료 참조)
				</div>

			</div>

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;

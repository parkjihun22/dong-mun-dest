import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './LocationEnvironment.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";

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

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="입지환경" />

			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
           			<div>전혀 새로운 중흥S-클래스만의 마스터플랜, 특별한 삶과 우월한 가치를 누리다
					   </div>
           		 	<div>브레인시티를 대표하는 첫번째 중흥 S클래스</div>
         		</div>

			<img src={page1} className={styles.premiumImage} alt="premium-image-1" />

			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.
				</div>
			
			</div>

			<Footer />
		</div>
	)
}

export default LocationEnvironment1;

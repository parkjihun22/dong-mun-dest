import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }]
	const [isScroll, setIsScroll] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행
	// 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환

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

			<Bener title="브랜드 소개" />

			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
				<div>평택 화양신도시 눈부신 가치 위에</div>
				<div>평택 화양 동문디이스트의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			
			{ <div className={styles.videoContainer}>
				<YouTube
					videoId="9LZuzeVJqQM"
					opts={{
						width: isMobile ? "450" : "1400",  // 모바일에서는 100%로 설정
						height: isMobile ? "300" : "700", // 모바일 높이를 고정
						playerVars: {
							autoplay: 1,        // 자동 재생
							rel: 0,             // 관련 동영상 표시하지 않음
							modestbranding: 1,  // 컨트롤 바에 YouTube 로고를 표시하지 않음
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div> }

			<Footer />
		</div>
	)
}

export default Brand2;

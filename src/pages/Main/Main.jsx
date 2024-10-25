import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
// import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import styles from "./Main.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";

import mainImage from "../../assets/Main/Main1.jpg";
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.png";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section4_Image1 from "../../assets/Main/section4-img1.png";
import section4_Image2 from "../../assets/Main/section4-img2.png";
import section4_Image3 from "../../assets/Main/section4-img3.png";
import section4_Image4 from "../../assets/Main/section4-img2.png";
import section5_Image1 from "../../assets/Main/section5-img1.jpg";
// import section4_Image2 from "../../assets/Main/section4-img2.jpg";
// import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";
import Popup from "../../components/Popup/Popup";

const section4Contents = [
	{
		imgSrc: section4_Image1,
		title: "VISION",
		text1: `반도체 클러스터의 중심 <br />
			  세계최대규모 120만평 삼성전자 캠퍼스<br />
			  직주근접 첨단복합도시의 탄생`,
		text2: `브레인시티내 반도체 146만평규모<br />
			  첨단산업시설 개발예정 수혜단지로 주거환경 개선 기대`,
		link: "/BusinessGuide/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section4_Image2,
		title: "INFRA",
		text1: `브레인시티 내 초,중,고등학교<br />
			  	카이스트 평택캠퍼스 등<br />
			  	우수한 교육환경`,
		text2: `아주대학교 AI 첨단복합 종합병원, CGV, 사우나<br />
			  	중심상권 도보 3분거리 등 풍부한 인프라`,
		link: "/LocationEnvironment/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section4_Image3,
		title: "TRAFFIC",
		text1: `평택지제역 1호선,SRT(운행중)<br />
			  수원발 KTX , GTX A · C라인 개통 확정<br />
			  경기도권내 유일 펜타역세권<br />
			  광역 교통망의 중심`,
		text2: `삼성전자 평택캠퍼스 차량5분<br />
			  송탄IC 5분 등 편리한 교통인프라`,
		link: "/LocationEnvironment/intro",
		linkText: "더 알아보기 >"
	},
	{
		imgSrc: section4_Image4,
		title: "PREMIUM",
		text1: `브레인시티 내 도보1분 의세권 프리미엄 <br /> 브레인시티 한신더휴`,
		text2: `주거 선호도 높은 중소형 평형대로 59㎡ · 84㎡<br /> 타입의 실속있는 주거공간 구성`,
		link: "/LocationEnvironment/primium",
		linkText: "더 알아보기 >"
	}
];

const Main = () => {
	const [isScroll, setIsScroll] = useState(false);
	const [page, setPage] = useState(1); // 페이지 세션 번호
	const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중인지 여부 확인
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인
	const [isOpenPopup, setIsOpenPopup] = useState(true);

	// 화면 스크롤이 탑이 아니면 isScroll 값을 true로 변환
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

	// PC에서만 페이지 전환 스크롤 이벤트 처리
	useEffect(() => {
		if (isMobile) return; // 모바일에서는 휠 이벤트를 사용하지 않음

		const handleWheel = (e) => {
			e.preventDefault();

			if (isScrolling) return; // 스크롤 중일 때 추가 스크롤 막음

			setIsScrolling(true); // 스크롤 중 플래그 설정

			if (e.deltaY > 0) {
				// 스크롤 다운
				if (page < 7) {
					setPage((prevPage) => prevPage + 1);
				}
			} else {
				// 스크롤 업
				if (page > 1) {
					setPage((prevPage) => prevPage - 1);
				}
			}

			// 일정 시간 후 스크롤 가능하도록 플래그 해제
			setTimeout(() => {
				setIsScrolling(false);
			}, 800); // 스크롤 완료 후 대기 시간 설정 (800ms)
		};

		window.addEventListener('wheel', handleWheel, { passive: false });

		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [page, isScrolling, isMobile]);

	// 페이지 세션에 따른 스크롤 이동 (PC에서만 적용)
	useEffect(() => {
		if (isMobile) return; // 모바일에서는 자동 스크롤을 사용하지 않음

		const posTop = (page - 1) * window.innerHeight;
		window.scrollTo({
			top: posTop,
			behavior: 'smooth'
		});
	}, [page, isMobile]);

	return (
		<>
			{!isMobile ? (

				<>
					{isOpenPopup && <Popup onClosed={() => setIsOpenPopup(!isOpenPopup)} />}
					<Header isChanged={isScroll} />

					<div className={styles.imageContainer}>
						<img src={mainImage} className={styles.mainImage} />
						<div className={styles.mainImageTextBox}>
							<div className={styles.mainImageText1}>평택 브레인시티의 첫번째 시작</div>
							<div className={styles.mainImageText2}>대단지 프리미엄 <span>ONE TOP!</span></div>
							<div className={styles.mainImageText3}><span>평택 브레인시티 중흥S클래스</span></div>

						</div>

						<FixIcon type="absolute" />
					</div>

					<div className={styles.section}>
						<div className={styles.section1}>

							<div className={styles.textBox}>
								<div className={styles.text1}>Location</div>
								<div className={styles.text2}>" 방문 예약 고객 전원 신세계 상품권 100% 증정 "</div>
								<div className={styles.text3}>- 브레인시티 중심상업지구 도보 3분 <br />
									- 첨단 아주대학교 종합병원 도보 5분 <br />
									- 평택 지제역 KTX, GTX-A · C 확정 삼성전자 평택캠퍼스, 초등학교, 수변공원 <br />
									- 모두를 누리는 반도체밸리 주거 타운의 완성
								</div>

								<div className={styles.text4}>
									<a href="https://naver.me/FWfnlWCx" target="_black"> 관심고객 등록하기 {'>'}</a>
								</div>
							</div>

							<div className={styles.menuBox}>
								<div className={styles.text}><span>평택 브레인시티</span> 중흥S-클래스</div>
								<Link to="brand/intro" className={styles.btn}> 브랜드 소개 {'>'}</Link>
							</div>
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.section2}>

							<div className={styles.textBox}>
								<div className={styles.title}>
									브레인시티 중심에사는<br />
									<span>원탑 라이프의 시작!</span>
								</div>
								<div className={styles.subTitle}>
									<div className={styles.textLine}></div>
									<div className={styles.subText}>
										찬란한 비전에 완벽한 주거가치까지 더해<br />
										평택을 대표하는 프리미엄 라이프를 시작하다
									</div>
								</div>
							</div>

							<img src={section2_Image1} alt="" />
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.section3}>
							<div className={styles.textBox}>
								<div className={`${styles.text1} fadeUpRepeat`}>완벽한 생활에서 준비된 미래까지</div>
								<div className={`${styles.text2} fadeUpRepeat`}>기대한 모든 프리미엄이<br />브레인시티<br /> 중흥S클래스에서 펼쳐집니다</div>
								<div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
								<div className={`${styles.text4} fadeUpRepeat`}>살수록 자부심이 차원이 다른 <br />프리미엄 주거라이프를 실현합니다</div>
								<div className={`${styles.text5} fadeUpRepeat`}>주거의 품격과 가치를 높이는 <span>특화설계</span> <br />안전한 이동을 위한 세심한 <span>단지설계</span> <br />편리한 생활을 위한 최적의 <span>공간설계</span></div>
							</div>
							<img src={section3_Image1} />
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.section4}>
							{section4Contents.map((section, index) => (
								<div key={index} className={styles.box}>
									<img src={section.imgSrc} alt={section.title} />
									<div className={styles.boxTitle}>{section.title}</div>
									<div className={styles.boxText1} dangerouslySetInnerHTML={{ __html: section.text1 }} />
									<div className={styles.boxText2} dangerouslySetInnerHTML={{ __html: section.text2 }} />
									<Link to={section.link} className={styles.boxText3}>
										{section.linkText}
									</Link>
								</div>
							))}
						</div>
					</div>

					<div className={styles.section}>
						<div className={styles.section5}>
							<div className={styles.imageBox}>
								<img src={section5_Image1} />

								<div className={styles.text1}>평택 브레인시티 중흥S클래스 </div>
								<div className={styles.text2}>THE NATURAL NOBILITY</div>
								<div className={styles.text3}>당신의 삶, 그 고귀함이 계속되길</div>
							</div>
							<div className={styles.textBox}>
								<div className={styles.text1}>UNITPLAN</div>
								<UnitplanBox />
								<Link to="/FloorPlan/84A" className={styles.text2}>더 알아보기{'>'}</Link>
							</div>
						</div>
					</div>

					<div className={styles.section6}>
						<Footer />
					</div>

				</>
			) : (
				<div className={styles.mobileMain}>
					{isOpenPopup && <Popup onClosed={() => setIsOpenPopup(!isOpenPopup)} />}
					<Header isChanged={isScroll} />

					<div className={styles.imageContainer}>
						<img src={mobileImageMain} className={styles.mainImage} />
						<div className={styles.overlay}></div>
						<div className={styles.mainImageTextBox}>
							<div className={styles.mainImageTitle}>평택브레인시티 중흥S클래스</div>
							<div className={styles.mainImageTextSub}>
								세계최대규모 평택 삼성전자 캠퍼스<br />
								지제역 펜타역세권 모두 누리는 프리미엄
							</div>
							<div className={styles.mainImageLine}></div>
							<div className={styles.mainImageText}>선착순 동·호 지정중</div>
						</div>
					</div>

					<div className={styles.container1}>

						<div className={styles.text1}>Location</div>
						<div className={styles.text2}>" 방문 예약 고객 전원 신세계 상품권 100% 증정 "</div>
						<div className={styles.text3}>- 브레인시티 중심상업지구 도보 3분 <br />
							- 첨단 아주대학교 종합병원 도보 5분 <br />
							- 평택 지제역 KTX, GTX-A · C 확정 삼성전자 평택캠퍼스, 초등학교, 수변공원 <br />
							- 모두를 누리는 반도체밸리 주거 타운의 완성
						</div>

						<div className={styles.text4}>
							<a href="https://naver.me/FWfnlWCx" target="_black"> 관심고객 등록하기 {'>'}</a>
						</div>

					</div>

					<div className={styles.container7}>

						<div className={styles.textBox}>
							<div className={styles.title}>
								평택 브레인시티의 중심으로 사는<br />
								<span>원탑 라이프의 시작!</span>
							</div>
							<div className={styles.subTitle}>
								<div className={styles.textLine}></div>
								<div className={styles.subText}>
									찬란한 비전에 완벽한 주거가치까지 더해<br />
									평택을 대표하는 프리미엄 라이프를 시작하다
								</div>
							</div>
						</div>

						<img src={section2_Image1} alt="" />
					</div>
					<div className={styles.container3}>
						<div className={styles.textbox}>
							<div className={`${styles.text1} fadeUpRepeat`}>완벽한 생활에서 준비된 미래까지</div>
							<div className={`${styles.text2} fadeUpRepeat`}>기대한 모든 프리미엄이<br /> 평택 브레인시티<br /> 중흥S클래스에서 펼쳐집니다</div>
							<div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
							<div className={`${styles.text4} fadeUpRepeat`}>살수록 자부심이 차원이 다른 <br />프리미엄 주거라이프를 실현합니다</div>
							<div className={`${styles.text5} fadeUpRepeat`}>주거의 품격과 가치를 높이는 <span>특화설계</span> <br />안전한 이동을 위한 세심한 <span>단지설계</span> <br />편리한 생활을 위한 최적의 <span>공간설계</span></div>
						</div>

						<img src={section3_Image1} />
					</div>

					<div className={styles.container4}>
						<div className={styles.text1}>UNITPLAN</div>
						<UnitplanBox />
						<Link to="/FloorPlan/84A" className={styles.text2}>
							<div>더 알아보기 {'>'}</div>
						</Link>
					</div>

					<div className={styles.container6}>
						{section4Contents.map((section, idx) => (
							<MobileSectionBox
								key={idx}
								type={idx % 2 === 0 ? 'left' : 'right'}
								titleImag={section.imgSrc}
								title={section.title}
								subText={section.text1}
							/>
						))}
					</div>

					<div className={styles.container5}>
						<img src={section5_Image1} />

						<div className={styles.text1}>평택의 중심 브레인시티 중흥S클래스</div>
						<div className={styles.text2}>THE NATURAL NOBILITY</div>
						<div className={styles.text3}>당신의 삶, 그 고귀함이 계속되길</div>
					</div>

					<div className={styles.container2}>
						<div>
							<img src={section1_Image1} />
							<Link to="brand/intro" className={styles.btn}> 브랜드 소개 {'>'}</Link>
						</div>
					</div>

					<div className={styles.section5}>
						<Footer />
						<FixIcon />
					</div>
				</div >
			)}
		</>
	);
}

export default Main; 

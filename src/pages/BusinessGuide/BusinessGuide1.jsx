import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";

const projectData = [
	{ label: '사업명', value: '평택 브레인시티 중흥 S클래스 아파트 신축공사 ' },
	{ label: '사업위치', value: '경기도 평택시 장안동 평택브레인시티 일반산업단지 1BL' },
	{ label: '지역/지구', value: '제3종 일반주거지역 / 지구단위계획구역' },
	{ label: '대지면적', value: '92,238,00㎡(27,901.99평)' },
	{ label: '연면적', value: '324,618.99㎡(98,197.24평)' },
	{ label: '공급규모', value: '총 1,980세대 , 지하 2층~ 지상 35층 16개동 ' },
	{ label: '입주시기', value: '2027년 02월(예정)' },
];

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "계약서류안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation();
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScroll(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles.container}>
			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="사업개요" />
			<MenuBar contents={menuContents} />

			<div className={styles.textBox}>
				<div>브레인시티 중심에서 누리는 특별한 라이프 컬렉션</div>
				<div>평택 브레인시티 중흥S클래스의 새로운 자부심으로 찾아옵니다.</div>
			</div>
			
			<img className={styles.img3} src={page1} />

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className={styles.commonBox}>
				{/* 공지사항 내용 */}
			</div>

			<Footer />
		</div >
	);
};

export default BusinessGuide1;
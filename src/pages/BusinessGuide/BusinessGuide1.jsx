import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";

const projectData = [
	{ label: '사업명', value: '평택 화양 동문 디 이스트' },
	{ label: '사업위치', value: '경기도 평택시 현덕면 운정리 150-1번지 (평택 화양지구 6-2BL)' },
	{ label: '건축면적', value: '5,181.1822 ㎡ (1,567.12평)' },
	{ label: '대지면적', value: '38,144.2000 ㎡ (11,528.95평)' },
	{ label: '연면적', value: '127,425.2794 ㎡ (38,546.14평)' },
	{ label: '공급규모', value: '총 753세대 , 지하 2층~ 지상 29층 8개동 (84㎡,107㎡)' },
	{ label: '주차대수', value: '아파트 총 1,055대 근린생활시설 3대 / 총 1,058대' },
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
				<div>평택 화양신도시에서 누리는 특별한 라이프 컬렉션</div>
				<div>평택 화양 동문디이스트의 새로운 자부심으로 찾아옵니다.</div>
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
			<Footer />
		</div >
	);
};

export default BusinessGuide1;
import React from "react";
import styles from "./Bener.module.scss";

import img from "../../assets/Bener/bener.jpg";
const Bener = ({ title }) => {
    return (
        <div className={styles.container}>
            <img className={styles.benerImage} src={img} alt="jungheung-class-bener" />
            <div className={styles.overlay}></div>
            <div className={styles.contents}>
                <div className={styles.title}>{title}</div>
                {contents(title)}
            </div>
        </div>
    )
}

export default Bener;

const contents = (text) => {
     if (text === '브랜드 소개') {
        return (
            <>
                <div className={styles.text}>지친 하루를 마치고 가장 나에 가까운 본연의 모습으로 돌아온 중흥S클래스 입니다.</div>
                <div className={styles.text}>평택 브레인시티 중흥S클래스의 프리미엄</div>
                <div className={styles.text}>NO.1 브랜드가 평택 중흥S클래스와 함께합니다.</div>
            </>
        )
    }
    else if (text === '사업개요' || text === '세대안내' || text === '인테리어') {
        return (
            <>
                <div className={styles.text}>중흥S클래스가 선택한 새도시!</div>
                <div className={styles.text}>평택삼성전자캠퍼스 · 지제역 펜타역세권 프리미엄</div>
                <div className={styles.text}>브레인중심 브랜드의 첫 시작</div>
                <div className={styles.text}>평택 브레인시티 중흥S클래스</div>
            </>
        )
    }

    else if (text === '입지환경') {
        return (
            <>
                <div className={styles.text}>수준 높은 생활, 첨단신도시내 최고의 입지 아파트</div>
                <div className={styles.text}>기대하던 모든 프리미엄이 평택 브레인시티 중흥S클래스에서 펼쳐집니다</div>
            </>
        )
    }

    else if (text === '단지안내') {
        return (
            <>
                <div className={styles.text}>주거의 품격과 가치를 높이는 특화설계</div>
                <div className={styles.text}>편리한 생활을 위한 최적의 공간설계</div>
                <div className={styles.text}>소수에게만 허락된 중흥S클래스, 처음이자 마지막으로 브레인시티에 찾아옵니다</div>
            </>
        )
    }
}

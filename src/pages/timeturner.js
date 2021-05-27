import { Link } from "gatsby";
import React, { useEffect }from "react";
import Layout from "../components/Layout";

const TimeTurner = () => {

    useEffect(() => {
        setTimeout(() => {

        }, 1000)
    }, [])

    const onRestart = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("scores");
            localStorage.removeItem("question");
            window.location.replace("/");
        }
    }

    return (
        <Layout>
            <div className="text-center mt-5">
                <img src="/images/timeturner.gif" alt="time turner" />
                <div className="mt-5">
                    헤르미온느의 타임 터너가 작동중입니다.<br/>
                    정말 처음부터 다시 시작하시겠습니까?
                    <div className="my-5">
                        <div className="time-option" onClick={onRestart}>네, 처음부터 할래요</div>
                        <Link className="time-option" to="/question">아뇨, 이어서 할래요</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TimeTurner;
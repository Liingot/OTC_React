import React from "react";
import Header from "./children/header/Header";
import Intention from "../../components/intention/Intention";
import MyIntention from "../../components/myIntention/MyIntention";
import Collection from "../../components/collection/Collection";
import "../../css-loader/BusinessDKH.css";
function BusinessDKH() {
    return (
        <div>
            <section>
                {/* 头部开始 */}
                <Header />
                {/* 头部结束 */}

                {/* 推荐意向开始 */}
                <Intention />
                {/* 推荐意向结束 */}

                {/* 我发布的意向开始 */}
                <MyIntention />
                {/* 我发布的意向结束 */}

                {/* 我收藏的意向开始 */}
                <Collection />
                {/* 我收藏的意向结束 */}
            </section>
        </div>
    )
}

export default BusinessDKH;
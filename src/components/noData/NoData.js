import React from "react";
import noDate from "../../assets/images/noData.png";
import './noData.css'
function NoData() {
    return (<div className='NoData'>
        <img src={noDate} className='no-data' alt='/' />
    </div>)
}
export default NoData;
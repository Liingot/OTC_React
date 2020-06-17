import React, { useState, useContext } from "react";
import { useHeader } from "../../useContent/Use";
import './Progress.css'
function Progress() {
    const title = useContext(useHeader);
    const [progressData] = useState({
        proBar: 0,
        proBar2: 0,
        proBar3: 0,
        yearTarEle: 0,
        finishedEle: 0,
        progressEle: 0,
        residualEle: 0
    });
    // const [proThirdWord] = useState('剩余');
    return (<div>
        <header className='bus-header'>
            <h3>{title}</h3>
            <div className="bilatera">
                <p className="p1">
                    <span> OTC年度目标：0MWh</span>
                </p>
                <div className="progress alert round">
                    <span className="meter bar" style={{ width: progressData.proBar + '%' }}></span>
                    <span className="meter2 bar2" style={{ width: progressData.proBar2 + '%' }}></span>
                </div>
                <p className="p2">
                    <span>已达成 0MWh</span> /
                <span>洽谈中 0MWh</span> /
                <span>0MWh</span>
                </p>
            </div >
        </header>

    </div >)
}
export default Progress;
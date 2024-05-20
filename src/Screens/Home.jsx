import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../Components/Navbar'
import { LineGraph } from '../Components/LineGraph'
import { AreaGraph } from '../Components/AreaGraph'
import { resolvePath } from 'react-router-dom';
export default function Home() {
    const [data, fetchedData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [view, setView] = useState(null);
    const [range, setRange] = useState(null);
    const rangeRef = useRef();
    const selectRef = useRef();
    async function fetchRealData() {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5000/api/getrealdata", {

            });
            const data = await response.json();
            fetchedData(data);
            setLoading(false);
        }
        catch (e) {
            setError(e);
            throw new Error(e);
        }
    }
    function handleRefresh() {
        fetchRealData();
        setView(selectRef.current.value);
    }
    function handleSelect(e) {
        setView(e.target.value);
    }
    function handleRange(e) {
        setRange(e.target.value);
    }
    useEffect(() => {
        fetchRealData();
        setRange(rangeRef.current.value);
        setView(selectRef.current.value);
    }, [])
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error:{error.message}</div>;
    }
    return (
        <div>
            <Navbar />
            <div className='container-table'>
                <div className='col device-name'>AeroE23</div>
                <div className='container stats-table'>
                    {
                        data && <>
                            <div className='row '>
                                <div className='col-lg-6 col-sm-12 headings'>Battery Status:<span className='result-heading'>{data.batteryStatus}</span></div>
                                <div className='col-lg-6 col-sm-12 headings'>Operational Status:
                                <span className='result-heading'>{data.operationalStatus}</span>
                                </div>
                            </div>
                        </>
                    }
                    <div className='row'>
                        {data && <>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col headings'>Speed:
                                    <span className='result-heading'>{data.speed}</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col col-sm-12 inner-headings'>Latitude:
                                    <span className='result-heading'>{data.gps.latitude}</span>
                                    </div>
                                    <div className='col col-sm-12  inner-headings'>Longitude:
                                    <span className='result-heading'>{data.gps.longitude}</span>
                                    </div>
                                    <div className='col col-sm-12  inner-headings'>Altitude:
                                    <span className='result-heading'>{data.gps.altitude}</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='headings'>Flight Status</div>
                                        <div className='inner-headings'>Current State:
                                        <span className='result-heading'>{data.currentState}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='headings'>Recent Activity Logs:
                                        <span className='result-heading'> {data.activityLog.map((item, index) => <li key={index}>{item}</li>)}</span>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        }

                        <div className='col'>
                            <div className='row'>
                                <div className='col col-sm-12 m-3'><button onClick={handleRefresh}>Refresh Data</button></div>
                                <div className='col col-sm-12 m-3'>
                                    <select className='dropdown' ref={selectRef} onChange={(e) => handleSelect(e)}>
                                        <option value="missionAnalysis">Mission Analysis</option>
                                        <option value="standard">Standard View</option>
                                    </select>
                                </div>
                                <div className='col col-sm-12 m-3'>
                                    <label htmlFor="range">Selected Hour: {range}</label>
                                    <input id="range" min='1' max='12' type="range" ref={rangeRef} onChange={(e) => handleRange(e)} />
                                </div>
                            </div>
                            <div className='col'>
                                <div>
                                    {view === 'missionAnalysis' ? <AreaGraph selectedHour={range} /> : <LineGraph selectedHour={range} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

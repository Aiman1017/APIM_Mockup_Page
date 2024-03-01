import { useState, useRef } from 'react';
import './index.css';

export default function Header() {
    const [activeView, setActiveView] = useState(false);
    const child1 = useRef(null);
    const child2 = useRef(null);

    return (
        <header>
            <div>
                <h2>TM LOGO HERE</h2>
            </div>
            <span class="vertical-hr"></span>
            <div className='ViewOption'>
                <a href='#' className={activeView && 'active'} onClick={() => setActiveView(!activeView)} ref={child1}>
                    APIs
                </a>
                <a href='#' className={activeView && 'active'} onClick={() => setActiveView(!activeView)} ref={child2}>
                    Applications
                </a>
            </div>
            <div className='SearchBar'>
                <select>
                    <option>All</option>
                    <option>Production</option>
                    <option>Prototyped</option>
                </select>
                <input placeholder="Search APIs" type="text" />
                <p>Icon here</p>
            </div>
            <div className='UserName'>
                <span className="vertical-hr2"></span>
                <p>Icon Here</p>
                <p>Viewer1@TM.COM.MY</p>
            </div>
        </header>
    )
}
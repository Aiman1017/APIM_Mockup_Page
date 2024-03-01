import './index.css';

export default function NavBar() {
    return (
        <nav>
            <p>Filter By</p>
            <div>
                <h3>LOB</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="gitd"/>
                        <label htmlFor="gitd">GITD</label>
                    </li>
                    <li>
                        <input type="checkbox" id="gnt"/>
                        <label htmlFor="gnt">GNT</label>
                    </li>
                    <li>
                        <input type="checkbox" id="tmone"/>
                        <label htmlFor="tmone">TM ONE</label>
                    </li>
                    <li>
                        <input type="checkbox" id="tmglobal"/>
                        <label htmlFor="tmglobal">TM GLOBAL</label>
                    </li>
                    <li>
                        <input type="checkbox" id="unifi"/>
                        <label htmlFor="unifi">UNIFI</label>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Applications</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="taas"/>
                        <label htmlFor="taas">TaaS</label>
                    </li>
                    <li>
                        <input type="checkbox" id="vital"/>
                        <label htmlFor="vital">VITAL</label>
                    </li>
                    <li>
                        <input type="checkbox" id="nova"/>
                        <label htmlFor="nova">NOVA</label>
                    </li>
                </ul>
            </div>
            <div>
                <h3>API Functional Categories</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="serviceAndConfiguration"/>
                        <label htmlFor="serviceAndConfiguration">Service Configuration & Activation</label>
                    </li>
                    <li>
                        <input type="checkbox" id="customerOrder"/>
                        <label htmlFor="customerOrder">Customer Order Mgmt</label>
                    </li>
                </ul>
            </div>
            <div>
                <h3>API Certification Code No</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="tmf"/>
                        <label htmlFor="tmf">TMF681</label>
                    </li>
                    <li>
                        <input type="checkbox" id="mef"/>
                        <label htmlFor="mef">MEF121</label>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
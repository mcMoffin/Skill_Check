import React, { useState } from 'react';

const TabMenue = () => {    
    const [activeTab, setActiveTab] = useState('live');

    return (
        <div className="tab_menue">
            <button className={`tab ${activeTab === 'live' ? 'active' : ''}`} onClick={()=>setActiveTab('live')}><span>Live Site</span></button>
            <button className={`tab ${activeTab === 'archive' ? 'active' : ''}`} onClick={()=>setActiveTab('archive')}><span>Site Archive</span></button>
        </div>
    );
};

export default TabMenue;
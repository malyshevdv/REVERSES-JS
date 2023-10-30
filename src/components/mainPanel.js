import React from 'react'


import ClearPanel from '../components/ClearPanel'
import CentralPanel from '../components/CentralPanel'


export default function MainPanel() {
    return (
    <div className="workplace">
        <ClearPanel className={'leftpanel'} />
        
        <CentralPanel />
    
        <ClearPanel className={'rightpanel'} />
    </div>
    
)}
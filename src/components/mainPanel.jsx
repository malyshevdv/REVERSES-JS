import React from 'react'


import ClearPanel from './ClearPanel'
import CentralPanel from './CentralPanel'


export default function MainPanel() {
    return (
    <div className="workplace">
        <ClearPanel className={'leftpanel'} />
        
        <CentralPanel />
    
        <ClearPanel className={'rightpanel'} />
    </div>
    
)}
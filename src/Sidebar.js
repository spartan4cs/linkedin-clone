import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4E16AQGVVeIOr7nvxg/profile-displaybackgroundimage-shrink_350_1400/0/1621162631821?e=1637798400&v=beta&t=a6TsV3ypLhcpDlR6Qi2h51V1mvy1sExgTD4f5o4QXTA" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Akash Kumbhare</h2>
                <h4>aakashkumbhare@gmail.com</h4>
            </div>
            <div className="sidebar__stats">

            </div>
        </div>
    )
}

export default Sidebar
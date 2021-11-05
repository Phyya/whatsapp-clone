import React from 'react'
import * as FaIcons from "react-icons/fa"
import '../cssFolder/SidebarChat.css'
import instagram from './instagram.png'
import { Link } from 'react-router-dom'

const SidebarChat = ({addNewChat}) => {
    return (
        <Link to ="/chat">
        <div className='sidebarChat'>
            <img alt="" src={instagram} />
            <h2>Chat Person</h2>
            <p>Last...</p>
            {/* <FaIcons.FaUserCircle src={instagram}/> */}
            
        </div>
        </Link>
    )
}

export default SidebarChat

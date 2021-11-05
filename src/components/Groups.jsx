import React, {useState} from 'react'
import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"
import { SideOptions } from './Portal'
import '../cssFolder/Chat.css'

const Groups = ({number}) => {
    const [modalView, setmodalView] = useState(false) 
    const modalOptions = () => {
        setmodalView(!modalView)
    }
    return (
        <div className="group">
            <div className='sidebar__header'>
                <p>Groups</p>
                <div className="sidebar__headerRight">
                    <AiIcons.AiOutlineGroup  />
                    <BsIcons.BsSearch />
                    <AiIcons.AiOutlineBars onClick = {modalOptions}/>
                    { modalView && (
                    <SideOptions nodisplay = {modalOptions}/>
                )}
                </div> 
            </div>

            <div className="newchat">
            <p> You have not been added to any group yet</p>
        </div>
        </div>
    )
}

export default Groups

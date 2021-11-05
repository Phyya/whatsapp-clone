import React from 'react'
import '../cssFolder/Messages.css'
import * as Bs from 'react-icons/bs'

const MyMessage = ({message,timestamp}) => {
    return (
        <div className="mymessage">
            <Bs.BsCheckAll className="gray__tick"/>
            <p>{message}</p>
            <span className="timestamp">{timestamp}</span>
        </div>
    )
}

export default MyMessage

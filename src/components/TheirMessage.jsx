import React from 'react'
import '../cssFolder/Messages.css'


const TheirMessage = ({message,timestamp}) => {
    return (
        <div className="mymessage">
            <p>{message}</p>
            <span className="timestamp">{timestamp}</span>
        </div>
    )
}

export default TheirMessage
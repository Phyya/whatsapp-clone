import React, { useState } from 'react'
import * as RiIcons from 'react-icons/ri'
import { Spinner, Portal } from './Portal'
import { database } from './database'
import "../App.css"

const Landing = (props) => {
    const [value, setValue] = useState("")
    const databaseSaved = JSON.parse(localStorage.getItem('database')) ? JSON.parse(localStorage.getItem('database')) : database

    const [spinner, setSpinner] = useState(false)
    const [modal, setModal] = useState(false)
 
    const loginHandler = (e) => {
        setValue(e.target.value)
    }
    const handleModal =()=> {
        setModal(false)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(value === "" || value.length !== 11 ){
            setModal(true)
        }
        else {
            const logged = databaseSaved.find(obj => obj.user===value)
            if(logged) {
                logged.name = "You"
                localStorage.setItem('loggedUser',JSON.stringify(logged))
            }
            else{
                const loggedUser = {
                    user:value,
                    name:"You",
                    id:Math.floor(Math.random() * 1000),
                    pic:"",
                    messages: [
                    ],
                    status:[],
                    time: ""
                }
                database.push(loggedUser)
                localStorage.setItem('loggedUser',JSON.stringify(loggedUser))
            }
            setSpinner(true)
            setValue("")
            localStorage.setItem('database',JSON.stringify(database))
    
            setTimeout(() => {
                props.history.push('/otp') 
            }, 2000);
        }
       
        
    }

    return (
        <>
        <div className="landing__background">
            <RiIcons.RiWhatsappFill className="green" />
            <h4>Welcome to Whatsapp! <br/>
            The world's largest chatting app. 
            <br/> Get started for FREE! </h4>
            <p>Enter Mobile Number</p>
            <form onSubmit={handleSubmit}>
                <input type='number' value={value} onChange={loginHandler} />
            <button className="green__button">Login to Whatsapp <RiIcons.RiWhatsappFill /></button>
            </form>
            {
                (spinner && (
                    <Spinner />
                ))
            }
            {
                (modal && (
                    <Portal nodisplay = {handleModal} notification = "You have entered an empty or invalid mobile number." />
                ))
            }
        </div>
        </>
    )
}

export default Landing

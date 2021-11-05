import nana from "../Images/nana.jpg"
import alice from "../Images/alice.jpg"
import teejay from "../Images/teejay.jpg"
import jeremy from "../Images/jeremy.jpg"
import avatar from "../Images/avatar.jpg"



export const database =[
    {
        user:'08035622282',
        name:"Nafisat",
        id:Math.floor(Math.random() * 1000),
        pic:avatar,
        messages: [
        ],
        status:[],
        time: ""
    },

    {
        user:'08063244278',
        name:"Alice",
        id:Math.floor(Math.random() * 1000),
        pic:alice,
        messages:[],
        status:[
            {
                url: teejay,
                header : {
                    heading : "Alice",
                    subheading:"! min ago",
                    profileImage: alice
                }
            }
        ],
        time:""
    },
    {
        user:'07067972318',
        name:"Mr Jeremy",
        pic:jeremy,
        id:Math.floor(Math.random() * 1000),
        messages:[],
        status:[],
        time:""
    },
    {
        user:'08012345678',
        name:"Teejay",
        pic:teejay,
        id:Math.floor(Math.random() * 1000),
        messages:[],
        status:[],
        time:"",
    },
    {
        user:'08087654321',
        name:"Nana",
        pic:nana,
        id:Math.floor(Math.random() * 1000),
        messages:[],
        status:[],
        time:""
    },
]


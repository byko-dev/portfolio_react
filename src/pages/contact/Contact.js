import React, {useState} from "react";
import {FiMail} from "react-icons/fi";
import SimpleBox from "../../components/simpleBox/SimpleBox";
import {FaTelegramPlane} from "react-icons/fa";
import Button from "../../components/button/Button";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messageContent, setMessageContent] = useState("");

    const saveData = () => {
        //TODO: send data to server and save
        console.log("saved");

        setName("");
        setEmail("");
        setMessageContent("");
    }

    return (
        <section className="section_contact" id="contact">

            <h4>Get in Touch</h4>
            <h2>Contact me</h2>

            <div className="container_contact">

                <div className="cards_container">
                    <SimpleBox title="Email" description="byko.dev@protonmail.com" link="mailto:bykodev@protonmail.com"> <FiMail /></SimpleBox>
                    <SimpleBox title="telegram" description="@bykodev" link="https://t.me/bykodev"> <FaTelegramPlane /> </SimpleBox>
                </div>

                <div className="form_contact">
                    <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Your Full Name"/>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Your Email" />

                    <textarea rows="4" onChange={e => setMessageContent(e.target.value)} value={messageContent} placeholder="Your Message" />
                    <Button filled={true} size={"big"} onClick={() => saveData()}>Send Message</Button>
                </div>
            </div>
        </section>
    )

}
export default Contact;
import React, {useState} from "react";
import {FiMail} from "react-icons/fi";
import SimpleBox from "../../components/simpleBox/SimpleBox";
import {FaTelegramPlane} from "react-icons/fa";
import Button from "../../components/button/Button";
import {contactForm} from "../../api";
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messageContent, setMessageContent] = useState("");
    const [response, setResponse] = useState({message: undefined, success: false});

    const saveData = async () => {
        if (RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).test(email) && name && messageContent) {
            const responseData = await contactForm(name, email, messageContent);

            if(responseData.status != null){
                setName("");
                setEmail("");
                setMessageContent("");
                setResponse({message: responseData.status, success: true});
            }else{
                setResponse({message: "Server error", success: false});
            }
        } else {
            setResponse({success: false, message: "Enter your data correctly!"})
        }
    }

    const resetResponse = () => setResponse({message: undefined, success: false});

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
                    <input type="text" onChange={e => {setName(e.target.value); resetResponse();}} value={name} placeholder="Your Full Name"/>
                    <input type="email" onChange={e => {setEmail(e.target.value); resetResponse();}} value={email} placeholder="Your Email" />

                    <textarea rows="4" onChange={e => {setMessageContent(e.target.value); resetResponse();}} value={messageContent} placeholder="Your Message" />

                    {response.message != undefined?
                        <div className="message_box" style={response.success? {background: "green"}: {background: "#eb4034"}}>{response.message}</div>: <> </>}

                    <Button filled={true} size={"big"} onClick={() => saveData()}>Send Message</Button>
                </div>
            </div>
        </section>
    )

}
export default Contact;
import React , {useState} from 'react';
import emailjs from 'emailjs-com';

import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";


import ReactGA from "react-ga";

const TRACKING_ID = "G-N9637Z5YRC"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);


const Result = () => {
    return (
        <p className="success-message">Your message has been sent successfully. Our team will contact you soon.</p>
    )
}



function ContactForm() {



    const [ result,showresult ] = useState(false);
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message,setMessage] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [projectType, setProjectType] = useState("Website Development");

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "fullname"){
            setFullName(value);
           
        }
        if(id === "email"){
            setEmailAddress(value);
           
        }
        if(id === "phone"){
            setPhoneNumber(value);
            
        }
        if(id === "message"){
            setMessage(value);
           
        }

        if(id === "projectType"){
            setProjectType(value);
        }
 
    
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_p4x3hv8', 
            'template_jgfr42f', 
            e.target, 
            'user_jrfTH2e0Ely35ZCVFdT9S'
        )
        .then((result) => {
            console.log(result.text);
           
           
            }, 
            (error) => {
                console.log(error.text);
            }
        );
       

        // Logic to add entry to Firebase

        try {
            const docRef = await addDoc(collection(db, "leads"), {
              email_adress: emailAddress,
              phone_number:phoneNumber,
              full_name: fullName,
              note:message,
                            project_type: projectType,
              origin:"Infinitix Website",
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

          e.target.reset();
          showresult(true);

        //   Clear Input Lines from here 

        // Send google analytics event

        ReactGA.event({ category: 'Button', action: 'Clicked' })
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form action="" onSubmit={sendEmail}>
            <div className="rn-form-group">
                <input 
                type="text"
                name="fullname"
                value={fullName}
                onChange={(e) => handleInputChange(e)}
                id="fullname"
                placeholder="Your Name"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="email"
                name="email"
                value={emailAddress}
                onChange={(e) => handleInputChange(e)}
                id="email"
                placeholder="Your Email"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="text"
                name="phone"
                value={phoneNumber}
                onChange={(e) => handleInputChange(e)}
                id="phone"
                placeholder="Phone Number"
                required
                />
            </div>

            {/* <div className="rn-form-group">
                <input 
                type="text"
                name="subject"
                placeholder="Subject"
                required
                />
            </div> */}
            
            <div className="rn-form-group">
                <select
                id="projectType"
                name="project_type"
                value={projectType}
                onChange={(e) => handleInputChange(e)}
                required
                >
                    <option value="Website Development">Website Development</option>
                    <option value="Web App Development">Web App Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Automation">Automation</option>
                    <option value="ETL & Data Transfer">ETL & Data Transfer</option>
                    <option value="Marketing & Reporting">Marketing & Reporting</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="rn-form-group">
                <textarea 
                id="message"
                name="message"
                value={message}
                onChange={(e) => handleInputChange(e)}
                placeholder="Tell us what you need, your timeline, and any constraints"
                required
                >
                </textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe"> Submit Now</button>
            </div> 

            <br/>

                    <p><i>
                    By opting into the web form above you are providing consent for Infinix Solutions to send you periodic text messages. Standard rates may apply. You can reply HELP at anytime or learn more. You may opt-out anytime by replying STOP.
                    </i></p>

            <div className="rn-form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;

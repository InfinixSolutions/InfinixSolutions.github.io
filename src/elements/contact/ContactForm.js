import React , {useState} from 'react';
import emailjs from 'emailjs-com';

import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}



function ContactForm({props}) {
    const [ result,showresult ] = useState(false);
    const [fullName, setFullName] = useState(null);
    const [emailAddress, setEmailAddress] = useState(null);
    const [message,setMessage] = useState(null);
    const [phoneNumber,setPhoneNumber] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "fullname"){
            setFullName(value);
            console.log("HEYY HEYY HEYY Niggah")
        }
        if(id === "email"){
            setEmailAddress(value);
            console.log("Email now")
        }
        if(id === "phone"){
            setPhoneNumber(value);
            console.log("Phone Is being Changed " )
        }
        if(id === "message"){
            setMessage(value);
            console.log("Message niggah Message")
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
              origin:"Infinitix Website",
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

          e.target.reset();
          showresult(true);

        //   Clear Input Lines from here 
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form action="" onSubmit={sendEmail}>
            <div className="rn-form-group">
                <input 
                type="text"
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
                <textarea 
                id="message"
                value={message}
                onChange={(e) => handleInputChange(e)}
                placeholder="Your Message"
                required
                >
                </textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
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

import React from "react";
import "../../App.css"

const Contact = () => {
    return (
        <div className="mainStyle">
            <h1 className="title">Contact</h1>
            
            <form action="https://formsubmit.co/7744f71387ce0f2733e363b38c376bf2" method="POST">
                <input type="text" name="firstName" required placeholder="First name" className="contactInput" />
                <input type="text" name="lastName" required placeholder="Last name" className="contactInput" />
                <input type="email" name="email" required placeholder="Email Address" className="contactInput" />
                <input type="text" name="subject" required placeholder="Subject" className="contactInput" />
                <input type="hidden" name="_next" value="http://charalampos-piotopoulos.com/thanks.html" />
                
                <textarea type="text" name="message" required placeholder="Your message" className="contactInput" style={{height: '150px'}} />

                <button type="submit" className="contactSubmit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
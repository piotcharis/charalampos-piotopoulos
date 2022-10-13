import React from "react";
import "../App.css"

const styleInput = {
    fontFamily: 'Roboto Mono',
    width: '80%',
    padding: '12px 20px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    height: 'auto',
    boxSizing: 'border-box'
}

const Contact = () => {
    return (
        <div className="mainStyle">
            <h1 className="title">Contact</h1>
            
            <form action="https://formsubmit.co/7744f71387ce0f2733e363b38c376bf2" method="POST">
                <input type="text" name="firstName" required placeholder="First name" style={styleInput} />
                <input type="text" name="lastName" required placeholder="Last name" style={styleInput} />
                <input type="email" name="email" required placeholder="Email Address" style={styleInput} />
                <input type="text" name="subject" required placeholder="Subject" style={styleInput} />
                <input type="hidden" name="_next" value="http://charalampos-piotopoulos.com/thanks.html" />
                <textarea type="text" name="message" required placeholder="Your message" style={{
                        fontFamily: 'Roboto Mono',
                        width: '80%',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxSizing: 'border-box',
                        height: '150px',
                        padding: '12px 20px',
                        margin: '8px 0'
                }} />

                <button type="submit" style={{
                    fontFamily: 'Roboto Mono',
                    width: '80%',
                    backgroundColor: '#D36135',
                    color: 'white',
                    padding: '14px 20px',
                    margin: '8px 0',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>Send</button>
            </form>
        </div>
    );
}

export default Contact;
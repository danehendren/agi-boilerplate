import React from 'react';


function Contact(props) {

    return (
        <div>
            <div className="centered">
                <h1>Contact</h1>
                <br />
                <p className="email">danehendren@gmail.com</p>
                <p>Dad. Husband. Fermentation Enthusiast. Yogi.  Remotely ready.</p>
                <br />
                <br />
                <ul className="contact-images">
                    <li className="contact-images-ind"><img src="media/twitlogo.png" className="icons"/></li>
                    <li className="contact-images-ind"><img src="media/github.png" className="icons"/></li>
                    <li className="contact-images-ind"><img src="media/linklogo.png" className="icons"/></li>
                </ul>

            </div>

            <div class="split right">
                <div class="centered">
                </div>
            </div>
        </div>
    )
}

export default Contact

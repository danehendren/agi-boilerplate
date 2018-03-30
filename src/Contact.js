import React from 'react';


// function iconClick() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('the icon was clicked');
//     }
// }

function Contact(props) {

    return (
        <div>
            <div className="centered">
                <h1>Contact</h1>
                    <br />
                <p className="email">danehendren@gmail.com</p>
                <p className="contact-info">  Developer | Dad | Husband | Yogi | Fermentation Enthusiast</p>
                    <br />
                    <br />
                <ul className="contact-images">
                    <a href="https://twitter.com/danehendren"><li className="contact-images-ind"><img src="media/twitlogo.png" className="icons" alt="" /></li></a>
                    <a href="https://github.com/danehendren"><li className="contact-images-ind"><img src="media/github.png" className="icons" alt="" /></li></a>
                    <a href="https://www.linkedin.com/in/danehendren/"><li className="contact-images-ind"><img src="media/linklogo.png" className="icons" alt="" /></li></a>
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

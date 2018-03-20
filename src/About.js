import React from 'react';


function About(props) {

    return (

        <div className="home-body-content">

            <div className="part-b">
                <div className="background">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="home-body-content">
                            <div className="about-photo-container">
                                <a><img src="media/danesuit.jpg" className="about-photo" alt="" /></a>
                            </div>
                            <ul className="about-links">
                                <a href="https://www.instagram.com/danehendren"><li className="about-link"><img src="media/instalogo.png" className="icons" alt="" /></li></a>
                                {/* <a href="https://twitter.com/danehendren"><li className="about-link"><img src="media/twitlogo.png" className="icons" alt="" /></li></a> */}
                                <a href="https://www.flickr.com/photos/danehendren"><li className="about-link"><img src="media/flicklogo.png" className="icons" alt="" /></li></a>
                                <a href="https://www.youtube.com/channel/UC04VLv0PdV5Crla3oxSSacg"><li className="about-link"><img src="media/youtuicon.png" className="icons" alt="" /></li></a>
                            </ul>
                            <p className="about-text">Suspendisse imperdiet viverra placerat. Nam velit magna, fringilla in magna ac, posuere egestas ex. Cras ut molestie dolor, eu rutrum dui. Donec facilisis dictum ex non luctus. Quisque erat metus, gravida vel lacus vestibulum, vestibulum vehicula purus. Pellentesque in arcu a est sagittis placerat porta id dui. Suspendisse felis nibh, pellentesque at velit id, convallis varius augue. Nunc nec blandit ante. Nam nec ultricies magna, at fermentum </p>
                            <ul className="about-sm-img-container">
                                <li><img src="media/ira-hvar.jpg" className="about-sm-img"  alt="" /></li>
                                <li><img src="media/boat-photo.jpg" className="about-sm-img"  alt="" /></li>
                                <li><img src="media/cat-photo.jpg" className="about-sm-img"  alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;

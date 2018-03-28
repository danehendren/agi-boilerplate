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
                                <a href="https://www.youtube.com/channel/UC04VLv0PdV5Crla3oxSSacg"><li className="about-link"><img src="media/youtuicon.png" className="icons" alt="" /></li></a>
                                <a href="https://www.flickr.com/photos/danehendren"><li className="about-link"><img src="media/flicklogo.png" className="icons" alt="" /></li></a>
                            </ul>
                            <p className="about-text">I don't have anything fancy to say and my life direction is currently pointed at family as my wife and I just had our first son.
                                <br></br><br></br>
                            I have various hobbies.  Some of which you'll find clickable on this page.  Some of which you will not.
                                <br></br><br></br>
                            There are more words coming here but not yet. There are more words coming here but not yet.  There are more words coming here but not yet.  There are more words coming here but not yet.There are more words coming here but not yet. </p>
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

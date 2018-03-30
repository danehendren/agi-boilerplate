import React from 'react';


function Journey(props) {

    return (
        <div className="container">
            <div className="left-half-journey">
                    <img src="media/foxfox.jpg" className="journey-md-img"  alt="" />
                    <img src="media/personal/weddingphoto.jpg" className="journey-md-img-right"  alt="" />
                    <img src="media/personal/mustphoto.JPG" className="journey-md-img"  alt="" />
                    <img src="media/foxfox.jpg" className="journey-md-img-right"  alt="" />

            </div>

            <div className="right-half-journey">
                    <div className="journey-block">
                        <h2 className="journey-title">Getting hitched in Nashville and moving to Germany</h2>
                        <p className="journey-text">Beginning a new life in Nashville, TN I was hoping to find a different/better/more interesting career.  My wife and I were also picking a new direction for each of our lives by deciding to get married and start a new life together.</p>
                    </div>
                    <div className="journey-block">
                        <h2 className="journey-title">Mid-way 2017 making decisions</h2>
                        <p className="journey-text">My wife and I had an 'celebratory' wedding here in Germany as our wedding in Nashville was only her mom and sister via Skype and my dog, Pan, being held by me as we said "I do".  I had tried finding work through friends and applied at small shops and cafes but nothing was proving to fit.  I turned to programming.</p>
                    </div>
                    <div className="journey-block">
                        <h2 className="journey-title">Tiny potato in the oven</h2>
                        <p className="journey-text"> My wife and I were expecting in the summer of 2017 and that helped me make a strong decision with programming.  I was to change careers into a field that I was constantly involved with and curiously adventurous towards.  I would support us by departing on a difficult and arduous adventure into the unknown.</p>
                    </div>
                    <div className="journey-block">
                        <h2 className="journey-title">To Berlin and Beyond...</h2>
                        <p className="journey-text">Leaving my pregnant wife and dogs behind in Bremen (I know, doesn't sound nice exactly)</p>
                    </div>
            </div>

        </div>
    )
}

export default Journey;

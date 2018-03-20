import React from 'react';


function Journey(props) {

    return (
        <div className="container">
            <div className="left-half-journey">
                <p>This is the left side.</p>
                    <img src="media/cat-photo.jpg" className="journey-md-img"  alt="" />
                    <img src="media/cat-photo.jpg" className="journey-md-img"  alt="" />
                    <img src="media/cat-photo.jpg" className="journey-md-img"  alt="" />
            </div>

            <div className="right-half-journey">
                    <div className="journey-block">
                        <h2>A little bit of this and a little bit of that</h2>
                        <p>Beginning a new life in Nashville, TN I was hoping to find a different/better/more interesting career.  </p>
                    </div>
                    <div className="journey-block">
                        <h2>Marriage and Moving</h2>
                        <p>Beginning with my wife and I getting married in Nashville, Tennesse I was out for something different than before.</p>
                    </div>
                    <div className="journey-block">
                        <h2>2017 Begins...</h2>
                        <p>Being in Germany for a few months I had continued looking for a job.  Finding a profession in what I had done wasn't what I was looking for.  I wanted something new but I wasn't sure.  I thought back to my friends bootcamp journey and my days of giving it a shot.</p>
                    </div>
                    <div className="journey-block">
                        <h2>To Berlin and Beyond...</h2>
                        <p>There are words coming here to explain SPICED Academy and then the after the fact times</p>
                    </div>
            </div>

        </div>
    )
}

export default Journey;

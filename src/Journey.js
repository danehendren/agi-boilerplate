import React from 'react';


function Journey(props) {

    return (
        <div className="container">

            <div className="left-half-journey">
                <p>This is the left side.</p>
                <img src="media/cat-photo.jpg" className="about-sm-img"  alt="" />
                <img src="media/cat-photo.jpg" className="about-sm-img"  alt="" />
                <img src="media/cat-photo.jpg" className="about-sm-img"  alt="" />
                <img src="media/cat-photo.jpg" className="about-sm-img"  alt="" />
            </div>

            <div className="right-half-journey">
                <p>side Right the is this.</p>
                <img src="media/cat-photo.jpg" className="about-sm-img"  alt="" />
            </div>

        </div>
    )
}

export default Journey;

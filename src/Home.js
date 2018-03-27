import React from 'react';


function Home(props) {



        function handleClick(e) {
            e.preventDefault();
            console.log('This was clicked, yay!');

            // if(true) {
            //     var followMe = document.getElementById('mouse');
            //     var box = document.getElementById('exercise1');
            //
            //     document.addEventListener("mousemove", function(e){
            //
            //         box.style.left = e.clientX - 50 + 'px';
            //         box.style.top = e.clientY - 50 + 'px';
            //     });
            // }
        }



    return (
        <div className="container">

            <section className="left-half-home">



                    <img src="media/foxfox.jpg" className="about-sm-img"  alt="" />

                <div className="journey-block">
                    <h2 onClick={handleClick} >Petition for Dog Park in Bremen</h2>
                    <p>Click Me!</p>
                </div>

                <img src="screenshots/foxSCREENSHOThome.png" className="about-sm-img"  alt="" />

                <div className="journey-block">
                    <h2>Bark Board</h2>
                        <p></p>
                </div>

                <img src="media/foxfox.jpg" className="about-sm-img"  alt="" />

            </section>

            <section className="right-half-home">

                <div className="journey-block">
                    <h2>To Berlin and Beyond...</h2>
                    <p>There are words coming here to explain SPICED Academy and then the after the fact times</p>
                </div>
                    <img src="screenshots/pupPETITIONone.png" className="about-sm-img"  alt="" />
                <div className="journey-block">
                    <h2>Minimalist Website</h2>
                    <p>the fact times</p>
                </div>

                <img src="screenshots/imageboardSCREENSHOT.png" className="about-sm-img"  alt="" />
                <div className="journey-block">
                    <h2>To Berlin and Beyond...</h2>
                    <p>There are words coming here to explain SPICED Academy and then the after the fact times</p>
                </div>
            </section>

        </div>
    )
}

export default Home;

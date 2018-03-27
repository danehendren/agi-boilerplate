import React from 'react';
// import { Link } from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom';



export class Navi extends React.Component {
    render() {
        return(
            <Router>
                <div className="nav-bar-container">
                    <div className="nav-bar-top">
                        <Link to="/" className="nav-link">home/work</Link>
                        <Link to="/contact" className="nav-link">contact</Link>
                        <Link to="/about" className="nav-link">about</Link>
                        <Link to="/journey" className="nav-link">journey</Link>

                    </div>
                    {/* <button type="button" className="btn btn-light">Light</button> */}

                </div>
            </Router>

        )
    }
}

// function Navi(props) {
//
//     return(
//         <div>
//             <div className="nav-bar-top">
//                 <h1>Home</h1>
//                 {/* <Link to="/about">about</Link> */}
//                 <h1>Contact</h1>
//                 <h1>Profile</h1>
//             </div>
//         </div>
//     )
// }

export default Navi;

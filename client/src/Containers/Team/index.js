import Avinash from '../../images/Avinash.jpg'
import Vishal from '../../images/Vishal.jpg'
import Ankur from '../../images/Ankur.jpg'
import Sahista from '../../images/Sahista.jpeg'
// const logo = require('../../images/Avinash.jpg')

export const Team = (props) => {
    return (
        <div className="w3-container" id="team">
            <h3 className="w3-center">THE TEAM</h3>
            <p className="w3-center w3-large">The ones who made The Guardians</p>
            <div className="w3-row-padding w3-grayscale">
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-card">
                        <img src={Avinash} alt="Avinash" className="profile" />
                        <div className="w3-container">
                            <h3>Avinash Ravi</h3>
                            <p className="w3-opacity">Developer</p>
                            <p>Java, Python, JavaScript Incredible documentation and programming skills Valuable in Data Pre-Processing & Modeling.</p>
                            <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-card">
                        <img src={Vishal} alt="Vishal" className="profile" />
                        <div className="w3-container">
                            <h3>Vishal Venkatesan</h3>
                            <p className="w3-opacity">Developer</p>
                            <p>Java, Python, SalesForce Cybernaut, Critical Thinker, suitable for Research and Development Efficient in Data Collection.</p>
                            <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-card">
                        <img src={Ankur} alt="Ankur" className="profile" />
                        <div className="w3-container">
                            <h3>Ankur Rokad</h3>
                            <p className="w3-opacity">Full-Stack Developer</p>
                            <p>Python, ReactJs, NodeJs Quick error determination and good problem-solving skills.</p>
                            <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-card">
                        <img src={Sahista} alt="Sahista" className="profile" />
                        <div className="w3-container">
                            <h3>Sahista Patel</h3>
                            <p className="w3-opacity">Automation Developer</p>
                            <p>Python, Powershell, SQL Good logic building skills and Team player Beneficial in Feature Engineering & Model Interpretation.</p>
                            <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
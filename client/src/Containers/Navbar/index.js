import logo from '../../images/logo_.png'

export const Navbar = (props) => {
    return (
        <div class="w3-top">
            <div class="w3-bar w3-white w3-card" id="myNavbar">
                {/* <!--    <img src="./images/logo_.png" class="w3-bar-item w3-button" href="#home" alt="logo" style="width:5%">--> */}
                <img src={logo} href="" className="w3-bar-item w3-button w3-wide"></img>
                <a href="/" class="w3-bar-item w3-button w3-wide">TRUTH FORCE</a>
                {/* <!-- Right-sided navbar links --> */}
                <div class="w3-right w3-hide-small">
                    {/* <a href="about" class="w3-bar-item w3-button"><i class="fa fa-th"></i> ABOUT</a> */}
                    <a href="team" class="w3-bar-item w3-button"><i class="fa fa-user"></i> TEAM</a>
                    {/* <!--      <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> WORK</a>-->
                    <!--      <a href="#pricing" class="w3-bar-item w3-button"><i class="fa fa-usd"></i> PRICING</a>--> */}
                    <a href="contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
                </div>
                {/* <!-- Hide right-floated links on small screens and replace them with a menu icon --> */}

                <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}
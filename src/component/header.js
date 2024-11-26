import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComputerMouse, faDownload, faMoon, faPhone, faPhoneVolume, fas, faS, faSun, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import AliceCarousel from "react-alice-carousel";
import { faBarChart } from "@fortawesome/free-regular-svg-icons";
const Home = () => {
    return (
        <div>
            <AliceCarousel autoPlay autoPlayInterval={3000} infinite disableButtonsControls disableSlideInfo disableDotsControls disableDotsControls className="owl-carousel">
                <div className="slider1" />
                <div className="slider2" />
                <div className="slider3" />
            </AliceCarousel>

            <header>
                <div className="navbar">
                    <div className="logo">
                        <Image src="/logo.png" alt="Logo" width={50} height={50} />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#intro"> Intro</a>
                            </li>
                            <li>
                                <a href="#countdown">Countdown</a>
                            </li>
                            <li>
                                <a href="#note">Note</a>
                            </li>
                            <li>
                                <a href="#location">Location</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="toggle-switch">
                        <FontAwesomeIcon icon={faMoon} className="fa-solid fa-moon" />
                        <button className="toggle" onclick="darkmode()" ondlbclick="lightmode()">
                            <FontAwesomeIcon icon={faToggleOn} id="toggle" className="fa-solid fa-toggle-on toggleon" />
                        </button>
                        <FontAwesomeIcon icon={faSun} className="fa-solid fa-sun" />
                    </div>
                    <a href="#" className="call">
                        <FontAwesomeIcon icon={faPhoneVolume} className="fas fa-phone-volume" />
                        Call Us
                    </a>
                    <div>
                        <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars" />
                    </div>
                </div>
                <div className="header-content">
                    <p className="imomotimi">Imomotimi Foundation Present</p>
                    <h1>
                        Imomotimi Ijaw <br />
                        Dance Contest 2024
                    </h1>
                    <a href="#" className="download-btn">
                        <FontAwesomeIcon icon={faDownload} className="fas fa-download" /> Download Entry Form
                    </a>
                    <p>
                        All dully filled out forms and the entry fees should be brought along to
                        the audition.
                    </p>
                </div>
                <div className="mouse">
                    <FontAwesomeIcon icon={faComputerMouse} className="fa-solid fa-computer-mouse" />
                </div>
                <div className="top-white">
                    <Image
                        id="dem1"
                        src="/shape-top-white-80.png"
                        alt="Image top-white"
                        width={50} height={50}
                    />
                </div>
            </header>

        </div>
    )
}
export default Home;
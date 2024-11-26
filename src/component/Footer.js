const Map = () => {

    return (

        <footer id="footer-section">
            <div className="footer-container">
                <div className="social-media">
                    <h3>We Are Social</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon facebook">
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a href="#" className="social-icon x-twitter">
                            <i className="fa-brands fa-x-twitter" />
                        </a>
                        <a href="#" className="social-icon instagram">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="#" className="social-icon youtube">
                            <i className="fa-brands fa-youtube" />
                        </a>
                    </div>
                </div>
                <hr className="footer-line" />
                <div className="footer-copyright">
                    <p>© 2024 Imomotimi Foundation. All Rights Reserved.</p>
                </div>
                <a href="#top" className="scroll-to-top">
                    <i className="fas fa-arrow-up" />
                </a>
            </div>
        </footer>

    )
}
export default Map;
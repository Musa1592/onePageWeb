const Contact = () => {

    return (

        <section id="contact-info-section">
            <div className="top-grey">
                <img id="dem3" src="./assets/img/shape-top-grey-80.png" alt="Top Grey" />
            </div>
            <div className="flex-container">
                <div className="info-boxes">
                    <h3>For More Information:</h3>
                    <p>Hotlines: 07035973706 &amp; 08108112759</p>
                    <p>Email: info@ijawdancecontest.ng</p>
                    <p>
                        Audition Location: Nitro Studio, Tamara Hall, Otiotio Road, Yenagoa,
                        Bayelsa State.
                    </p>
                </div>
                <div className="form-box">
                    <div className="form-row">
                        <div className="form-group">
                            <i className="fas fa-user" /> Name
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <i className="fas fa-phone" /> Phone
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <i className="fas fa-envelope" /> Email Address
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <i className="fas fa-circle-info" /> Subject
                            <input type="text" />
                        </div>
                    </div>
                    <div className="form-full">
                        <div className="form-group2">
                            <i className="fas fa-pencil" /> How can we help you? Feel free to get
                            in touch!
                            <textarea rows={3} defaultValue={""} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-box">
                <button className="contact-button">Get in Touch</button>
            </div>
        </section>


    )
}
export default Contact;
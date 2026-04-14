import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container text-center">

        {/* Heading */}
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Ready to bring your <span>ideas to life?</span> Let's create something amazing together.
        </p>

        <div className="row justify-content-center align-items-center mt-5">

          {/* Left Card */}
          <div className="col-md-5">
            <div className="contact-card left-card">
              <h4>Get in Touch</h4>

              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <small>Email</small>
                  <p><a href="mailto:hhm639069@gmail.com" target="_blank">hhm639069@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fa-brands fa-linkedin"></i>
                <div>
                  <small>LinkedIn</small>
                  <p> <a href="https://www.linkedin.com/in/humaira-hossain-methela/" target="_blank">humaira-hossain-methela</a></p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fa-brands fa-github"></i>
                <div>
                  <small>GitHub</small>
                  <p><a href="https://github.com/HHM-1999" target="_blank">hhm-1999</a></p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fa-brands fa-facebook"></i>
                <div>
                  <small>Facebook</small>
                  <p><a href="https://www.facebook.com/Humaira.Methela.99/" target="_blank">Humaira Hossain</a></p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Card */}
          <div className="col-md-5">
            <div className="contact-card right-card">
              <h4 className="mb-4">Contact Me</h4>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    rows="4"
                    className="form-control custom-input"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button className="btn custom-btn">
                  Send Message
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
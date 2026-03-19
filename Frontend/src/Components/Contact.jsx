import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-map">
        <iframe
          title="map"
           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4311742.105329857!2d89.1494263680411!3d18.259714992378935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1773378831167!5m2!1sen!2sin"
                width="400"
                height="300"
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </div>

    </div>
  );
}

export default Contact;
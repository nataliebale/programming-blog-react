import '../../../styles/contact.css';
import contactImage from '../../../assets/images/contact-image.jpg';

function Contact() {
  return (
    <div className='contact-page'>
      <img src={contactImage} alt="Community" className="page-background-image"/>
      <div className='app-container'>
        <h1 className='page-title'>Contact Us</h1>
        <div className="contact-details">
          <p>Please feel free to reach out to us through any of the following channels: We're here to help you! Whether you have questions, feedback, or just want to discuss a topic that interests you, we welcome your outreach. Our team is dedicated to providing you with the assistance you need and ensuring your experience with us is as informative and engaging as possible.</p>

        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" id="name" name="name" placeholder='Name:' required/>

            <input type="email" id="email" name="email" placeholder='Email:' required/>

            <textarea id="message" name="message" rows="4" placeholder='Message:' required></textarea>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

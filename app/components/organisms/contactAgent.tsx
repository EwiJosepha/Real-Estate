import Image from "next/image";
import agentAvatar from "../../../public/assets/images/0451cb1c-4114-46fe-83ea-fdcc08bbb40d.jpg"
import whatsap from "../../../public/assets/images/8010452_whatsapp_phone_communication_interaction_call_icon.png"
import call from "../../../public/assets/images/8725821_forwaded_call_icon.png"
import email from "../../../public/assets/images/4202011_email_gmail_mail_logo_social_icon.png"

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-avatar">
        <Image  src={agentAvatar} id="contactCard" alt="Agent Avatar" layout="responsive"/>
      </div>
      <div className="contact-form">
        <h2 id="contactText">Contact Real Estate Agent</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-icons">
          <a href="mailto:agent@example.com">
            <Image src={email} alt="Email Icon" />
          </a>
          <a href="tel:+123456789">
            <Image src={call} alt="Call Icon" />
          </a>
          <a href="https://wa.me/123456789">
            <Image src={ whatsap} alt="WhatsApp Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
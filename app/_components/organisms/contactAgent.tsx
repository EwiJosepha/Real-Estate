import Image from "next/image";
import agentAvatar from "../../../public/assets/images/istockphoto-1456194325-1024x1024.jpg"
import whatsap from "../../../public/assets/images/8010452_whatsapp_phone_communication_interaction_call_icon.png"
import call from "../../../public/assets/images/8725821_forwaded_call_icon.png"
import email from "../../../public/assets/images/4202011_email_gmail_mail_logo_social_icon.png"

const ContactPage = () => {
  return (
    <div className="bg-gray-200 p-10 md:flex items-center ">
      <div className="mr-6 ml-40 border border-gray-300">
        <img src='' alt="Profile" className=" h-28 w-28" />
      </div>
      <div className="">
        <p>Agent Name</p>
        <p>Bio</p>
      </div>
      <div className="mx-24">
        <p className="flex items-center">
          <a href="https://wa.me/123456789">
            <Image src={whatsap} alt="WhatsApp Icon" className="h-10 w-10" />
          </a>
          Whatsap</p>
        <p>Number</p>
      </div>

      <div className="">
        <p className="flex items-center">
          <a href="mailto:agent@example.com">
            <Image src={email} alt="Email Icon" className="h-8 w-8" />
          </a>
          EMAIL</p>
        <p>Mail</p>
      </div>

      <div className="ml-24">
        <p className="flex items-center">
          <a href="tel:+123456789">
            <Image src={call} alt="Call Icon" className="h-8 w-8" />
          </a>
          Call</p>
        <p>Number</p>
      </div>

    </div>
  );
};

export default ContactPage;
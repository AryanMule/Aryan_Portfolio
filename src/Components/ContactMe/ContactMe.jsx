/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import githublogo from "../assets/Github.png";
import linkedinlogo from "../assets/Linkedin.png";
import aryanphoto from "../assets/profile.png";
import "../ContactMe/ContactMe.css";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e91t2i8", // Replace with your EmailJS service ID
        "template_cui4m0y", // Replace with your EmailJS template ID
        form.current,
        "VtDagRLqaE-hUG5TB" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        data-scroll
        data-scroll-section
        data-scroll-speed="0.4"
        className="mx-auto px-4 bg-zinc-950 w-full"
      >
        <div className="ml-[3vw] mr-[3vw] mt-[3vw] bg-gray-100 rounded-t-[3vw] p-[4vw]">
          <motion.div className="headingmsg flex items-center justify-center gap-[1vw]">
            <h2 className="text-[7vw] font-bold text-center mb-8 font-['august']">
              Ready to Begin? Let's Start Together
            </h2>
            <img
              src={aryanphoto}
              alt=""
              className="rounded-full border-[0.4vw] mb-[0.5vw] w-[8vw] h-[8vw] object-cover border-zinc-400"
            />
          </motion.div>
          <div className="flex flex-col md:flex-row md:space-x-6 font-['oswald']">
            <div className="flex-1 p-[3vw]">
              <h3 className="text-[2.5vw] font-semibold mb-4">Send a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="text-[1.4vw]">
                <div className="mb-[2vw]">
                  <label
                    htmlFor="fullname"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    What's your name?
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="user_name"
                    placeholder="Aryan"
                    className="w-full px-4 py-2 rounded border-none bg-transparent focus:outline-none focus:border-blue-500"
                  />
                  <hr className="border-[0.1vw] border-zinc-400" />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    What's your email?
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="mulearyan2@gmail.com"
                    className="w-full px-4 py-2 rounded border-none bg-transparent focus:outline-none focus:border-blue-500"
                  />
                  <hr className="border-[0.1vw] border-zinc-400" />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    placeholder="Hello Aryan, Can you help me with*"
                    className="w-full px-4 py-2 rounded border-none bg-transparent focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <hr className="border-[0.1vw] border-zinc-400" />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex-1 p-[3vw]">
              <h3 className="text-[2.5vw] font-semibold mb-4">Reach Out</h3>
              <p className="text-gray-700 mb-4 text-[1.5vw]">
                Feel free to reach out to me via email or connect with me on
                social media.
              </p>
              <hr className="border-zinc-400 my-[2vw]" />
              <div className="">
                <a
                  href="https://www.linkedin.com/in/aryan-mule-759428258/"
                  onClick="window.open(this.href,'_blank');return false;"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinlogo} alt="" className="h-[2vw]" />
                </a>
                <a
                  href="https://github.com/AryanMule"
                  onClick="window.open(this.href,'_blank');return false;"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githublogo} alt="" className="h-[4vw] mt-[0.7vw]" />
                </a>
              </div>
              <hr className="border-zinc-400 my-[1.4vw]" />
              <div className="details text-zinc-700 font-['oswald'] text-[1.2vw]">
                <h1>mulearyan2@gmail.com</h1>
                <h1>+91 9373466868</h1>
              </div>
              <hr className="border-zinc-400 my-[1vw]" />
              <div className="bg-blue-500 px-[1vw] w-fit py-[0.7vw] rounded-2xl text-[1.5vw] text-white hover:bg-blue-700 transition duration-300">
                <a
                  href="../Aryan_Mule_Resume.pdf"
                  download="Aryan's_Resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactMe;
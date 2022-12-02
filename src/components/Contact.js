import "./Contact.css";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub, BsFacebook } from "react-icons/bs";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p2t6nnk",
        "template_1lu9gmq",
        form.current,
        "D7F5hvgqBDSwH5TOn"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("messagesent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact">
      <p>Get in touch</p>
      <h1>CONTACT</h1>
      <div className="rightAndLeft">
        <div className="right">
          <div className="links">
            <a href="https://www.linkedin.com/in/katarzyna-bedli%C5%84ska-852003255/">
              <FaLinkedin className="icon" style={{ marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/kbedli">
              <BsGithub className="icon" style={{ marginRight: "1rem" }} />
            </a>
            <a href="https://www.facebook.com/katarzyna.bedlinska.9">
              <BsFacebook className="icon" />
            </a>
          </div>
          <div className="phoneEmailDiv">
            <p>
              <HiPhone className="icon" />
              +48 697 721 147
            </p>
            <p>
              <MdEmail className="icon" />
              kbedlinska@gmail.com
            </p>
          </div>
        </div>
        <div className="left">
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input
              type="text"
              value={name}
              name="user_name"
              onChange={handleChangeName}
            />
            <label>Email</label>
            <input
              value={email}
              type="email"
              name="user_email"
              onChange={handleChangeEmail}
            />
            <label>Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleChangeMessage}
            />
            <button type="submit" value="Send" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

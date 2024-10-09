import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Countries from "../components/Countries";
import "../styling/Contact.css";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    const mailBody = `Ma numesc ${name},\n\n ${message}.\n\n ${phone}`;
    const mailtoLink = `mailto:designo@example.com ?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoLink;
    setName("");
    setPhone("");
    setTitle("");
    setMessage("");
  }

  const setNameChange = (event) => {
    setName(event.target.value);
  };

  const setPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const setTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const setMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="contact-container">
      <div className="container">
        <NavBar />

        <header className="hero">
          <div className="hero-parts">
            <div className="parts-info">
              <h1>Contact Us</h1>
              <p>
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>
            <div className="parts-form">
              <div>
                <form id="contact-form" onSubmit={(e) => formSubmit(e)}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={setNameChange}
                  />
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={setPhoneChange}
                  />
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Subject"
                    value={title}
                    onChange={setTitleChange}
                  />
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    required
                    value={message}
                    onChange={setMessageChange}
                  />

                  <div className="btn">
                    <button className="dark-mode">SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        <Countries />
      </div>
      <Footer className="contact-page" />
    </div>
  );
};

export default Contact;

// function Contact() {
//   const [name, setName] = useState("")
//   const [subject, setSubject] = useState("")
//   const[mesaj, setMesaj] = useState("")
//   function formSubmit(e) {
//     e.preventDefault();
//     const mesajDeTrimis = `Ma numesc ${name}: ${mesaj}`
//     const mailtoLink = `mailto:Ewinegalery@gmail.com ?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(mesajDeTrimis)}`;
//     window.location.href = mailtoLink;
//   }
//   const setNameChange = (event) => {
//      setName(event.target.value)
//   }
//   const setSubjectChange = (event) => {
//     setSubject(event.target.value)
//   }
//   const setMesajChange = (event) => {
//     setMesaj(event.target.value)
//   }
//   return (
//     <div>
//       <Navbar />
//       <div className="contact">
//         <div
//           className="leftSide"
//           style={{ backgroundImage: `url(${contact})` }}
//         ></div>
//         <div className="rightSide">
//           <h1> Contact Us</h1>
//           <form id="contact-form" onSubmit={(e) => formSubmit(e)}>
//             <label htmlFor="name">Full Name</label>
//             <input
//               name="name"
//               placeholder="Enter full name..."
//               type="text"
//               value={name}
//               onChange={setNameChange}
//             />
//             <label htmlFor="Subject">Subject</label>
//             <input
//               name="Subject"
//               placeholder="Enter subject..."
//               type="text"
//               value={subject}
//               onChange={setSubjectChange}
//             />
//             <label htmlFor="mesaj">Message</label>
//             <textarea
//               rows="6"
//               placeholder="Enter message..."
//               name="message"
//               required
//               value={mesaj}
//               onChange={setMesajChange}
//             ></textarea>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>

import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("submitting form")

    emailjs.sendForm(
  'service_a1crw6b',
  'template_4enibxs',
  form.current,  
  'Ar4z0QPi2p-QmqOch'
)

      .then(() => {
        alert("Message sent successfully!");
        form.current.reset(); 
      })
      .catch((error) => {
        alert("Failed to send message: " + error.text);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-gray-800 p-6 rounded-xl max-w-md mx-auto mt-16"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">📬 Contact Me</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
      />
      <input
        type="text"
        name="title"
        placeholder="Subject"
        required
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white h-24"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-semibold"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contact;

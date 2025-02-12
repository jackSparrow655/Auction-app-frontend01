import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigateTo = useNavigate();
  const handleContactForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      phone,
      subject,
      message,
    };

    emailjs
      .send(
        "service_v01mtcu",
        "template_3a1r5xp",
        templateParams,
        "YcOimjllS64zn4ghK"
      )
      .then(() => {
        toast.success("Thank You! Your message has been sent successfully.");
        setLoading(false);
        navigateTo("/");
      })
      .catch((err) => {
        toast.error("Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-10 justify-start bg-[#f9f9f9]">
        <div className="bg-white mx-auto w-full max-w-4xl h-auto px-6 py-8 flex flex-col gap-6 items-center justify-center rounded-lg shadow-lg">
          <h3 className="text-[#D6482B] text-3xl font-bold mb-4">
            Contact Us
          </h3>
          <form
            className="flex flex-col gap-6 w-full"
            onSubmit={handleContactForm}
          >
            <div className="flex flex-col gap-2">
              <label className="text-lg text-stone-600 font-medium">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6482B] focus:border-transparent"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg text-stone-600 font-medium">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6482B] focus:border-transparent"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg text-stone-600 font-medium">
                Your Phone
              </label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6482B] focus:border-transparent"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg text-stone-600 font-medium">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6482B] focus:border-transparent"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg text-stone-600 font-medium">
                Message
              </label>
              <textarea
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6482B] focus:border-transparent"
                required
              />
            </div>

            <button
              className="bg-[#D6482B] mx-auto font-semibold hover:bg-[#b8381e] text-xl transition-all duration-300 py-3 px-6 rounded-lg text-white my-4 w-full sm:w-auto"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

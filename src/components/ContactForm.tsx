"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="max-w-xl mx-auto bg-black text-white p-[2rem] rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-left">Email Me</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full border p-[1rem] rounded-xl"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full border p-[1rem] rounded-xl"
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Your Message"
        required
        className="w-full border p-[1rem] rounded-xl"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-gradient-to-bl from-violet-700 to-fuchsia-600 text-white py-2 px-4 rounded-xl hover:bg-gray-100 transition"
      >
        Send
      </button>

      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </form>
  );
}

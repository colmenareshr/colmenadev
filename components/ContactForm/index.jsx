"use client";
import { useState } from "react";
import { FaCopy } from "react-icons/fa6";

const ContactForm = () => {
  const [email, setEmail] = useState("colmenareshr@gmail.com");
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    const email = "colmenareshr@gmail.com";
    const subject = encodeURIComponent("Trabajemos juntos Humberto");
    const emailServiceURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;

    window.open(emailServiceURL, "_blank");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="flex items-center">
      <input
        type="email"
        value={email}
        onClick={handleEmailClick}
        readOnly
        className="rounded-s-lg border border-gray-300 bg-slate-900 p-1 text-sm focus:border-blue-500 focus:outline-none"
      />
      <button
        onClick={handleCopyEmail}
        className="rounded-e-lg border bg-slate-200 p-1 text-slate-900 hover:bg-slate-200 hover:text-slate-900 focus:outline-none"
      >
        <FaCopy size={20} />
      </button>
      {copied && <span className="mx-2">¡Correo copiado!</span>}
    </div>
  );
};

export default ContactForm;

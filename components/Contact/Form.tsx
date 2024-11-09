"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const t = useTranslations("Contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      fullname,
      phone,
      email,
      content,
    };

    // Send form data using EmailJS
    emailjs
      .send(
        "service_rkw71p6",
        "template_v3v9n3q",
        formData,
        "U_Z3QuXmWOFqevFkl"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Clear form fields
        setFullname("");
        setPhone("");
        setEmail("");
        setContent("");
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
      });
  };

  return (
    <div className="w-full lg:w-[80%] bg-[#EEEEEE] p-8 xl:py-20 rounded-[10px] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg md:max-w-xl xl:max-w-2xl mx-auto space-y-4 lg:space-y-6"
      >
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullname"
            className="block font-medium text-gray-700 mb-1 font-mainB"
          >
            {t("Name")}
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder={t("Name1")}
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block font-medium text-gray-700 mb-1 font-mainB"
          >
            {t("Phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder={t("Phone1")}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-medium text-gray-700 mb-1 font-mainB"
          >
            {t("Email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder={t("Email1")}
            required
          />
        </div>

        {/* Content */}
        <div>
          <label
            htmlFor="content"
            className="block font-medium text-gray-700 mb-1 font-mainB"
          >
            {t("Description")}
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder={t("Description1")}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#D9D9D9] px-10 py-1.5 md:px-14 md:py-2 font-mainB rounded-[10px]"
          >
           {t("Send")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

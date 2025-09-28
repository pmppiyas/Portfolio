"use client";

import SocialButton from '@/components/ActionButton/SocialButton';
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { CustomHeading } from '../../../../public/Heading';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'success' | 'error' | null;

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Sending email with:", formData);

      // Simulate API call
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));

      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-custom text-background not-[]:py-6 md:py-8 space-y-8 px-6 flex flex-col items-center justify-center"
    >
      <CustomHeading heading={"Contact Me"}></CustomHeading>
      <div className="flex flex-col items-center justify-center md:flex-row gap-10  mt-8 w-full max-w-6xl font-thin mx-auto ">
        {/* Left side */}
        <div className="flex flex-col items-center justify-center text-center w-full flex-1">
          <h2 className="text-2xl font-semibold text-white">Just say Hello</h2>

          {/* Status messages */}
          {submitStatus === "success" && (
            <div className="text-green-400 mt-2">
              Message sent successfully!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="text-red-400 mt-2">
              Failed to send message. Please try again.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4 w-full"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 w-full ${errors.name ? "border border-red-500" : "focus:ring-primary"
                  }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 w-full ${errors.email ? "border border-red-500" : "focus:ring-primary"
                  }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 w-full ${errors.message
                  ? "border border-red-500"
                  : "focus:ring-primary"
                  }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className=" bg-mine hover:bg-yellow-600 font-normal py-2 px-4 rounded-md  transition duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-start justify-start w-full flex-1  rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-6 self-center">
            Contact Info
          </h2>

          <div className="w-full space-y-4">
            {/* Contact Items */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <Mail className="text-blue-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-gray-300 font-medium">Email</h3>
                <a
                  href="mailto:princemahmudpiyas@gmail.com"
                  className="text-white hover:underline"
                >
                  princemahmudpiyas@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <Phone className="text-blue-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-gray-300 font-medium">Phone</h3>
                <a
                  href="callto:+8801777233703"
                  className="text-white hover:underline"
                >
                  +8801777233703
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <MapPin className="text-blue-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-gray-300 font-medium">Location</h3>
                <p className="text-white">
                  {" "}
                  5740 Gobindoganj, Rangpur Division, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <Clock className="text-blue-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-gray-300 font-medium">Hours</h3>
                <p className="text-white">Sat - Thu : 9AM - 5PM || Flaxible</p>
              </div>
            </div>
            <SocialButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useIsMobile from '../../components/hooks/useIsMobile';
import './contact.css';
import IconWrapper from '../../components/Wrapper/IconWrapper';
import CustomInput from '../../components/Custom/CustomInput';
import CTAButton from '../../components/Custom/CTAButton';

const ContactPage: React.FC = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending data to a server
    console.log(formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <img
          style={{ height: isMobile ? '70vh' : '40vw' }}
          className="w-screen object-cover"
          src="/assets/projects/get-in-touch.jpg"
          alt="About Us"
        />
        <div
          style={{ backdropFilter: 'blur(1px)' }}
          className="absolute sm:top-[47%] top-[50%] rounded-lg bg-transparent justify-center items-center h-[10vw] sm:left-10 left-7 w-[40%]"
        >
          <div className="flex flex-col">
            <div
              style={{ fontFamily: 'custom-cursive-font' }}
              className="sm:text-5xl text-2xl font-semibold text-white"
            >
              Get in{' '}
              <span style={{ fontFamily: 'junicode-bold' }}> Touch </span>
            </div>
            <div className="w-36 h-0.5 bg-white sm:ml-40 rounded-sm mt-3" />{' '}
          </div>
          <div
            className="mt-2 sm:text-2xl text-lg text-white"
            style={{ fontFamily: 'junicode-italic' }}
          >
            We'd love to hear from you!
          </div>
        </div>
      </div>
      <div className="flex w-full  justify-evenly mt-10">
        <div className="flex flex-col justify-center items-center">
          <IconWrapper
            height={50}
            width={50}
            iconPath="/assets/svgs/call-colored.svg"
          />
          <span
            style={{ fontFamily: 'junicode-regular' }}
            className="text-2xl font-semibold"
          >
            Talk
          </span>
          <span style={{ fontFamily: 'junicode-italic' }}>+91 98110 01353</span>
        </div>
        <div className=" w-[3px] self-stretch border-t-0   bg-gradient-to-tr from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
        <div className="flex flex-col justify-center items-center">
          <IconWrapper
            height={50}
            width={50}
            iconPath="/assets/svgs/email-colored.svg"
          />
          <span
            style={{ fontFamily: 'junicode-regular' }}
            className="text-2xl font-semibold"
          >
            Write
          </span>
          <span style={{ fontFamily: 'junicode-italic' }}>
            bhupeshbhaskar21@gmail.com
          </span>
        </div>
      </div>
      <div className="border mx-4" />
      <div className="relative">
        <div className="w-[70%] m-auto relative bb h-full z-50">
          <div className="flex sm:flex-row flex-col w-full border justify-center ">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 px-8 pt-6 pb-8 w-full relative"
            >
              <div className="mb-4">
                {/*   
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="name"
      type="text"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
    /> */}
                <CustomInput label="Full Name" />
              </div>
              <div className="mb-4">
                <CustomInput label=" Email" />
                {/* <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
    /> */}
              </div>
              <div className="mb-4">
                <CustomInput label="Mobile" />
                {/* <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="subject"
      type="text"
      placeholder="Subject"
      value={formData.subject}
      onChange={handleChange}
      required
    /> */}
              </div>
              <div className="mb-6">
                {/*   
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="message"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      required
    /> */}
                <CustomInput label="Message" />
              </div>
              <div className="flex items-center justify-center">
                <CTAButton buttonText="Send" />
              </div>
            </form>

            {/* Google Map iframe */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.342094957249!2d77.14141227549597!3d28.49935357573773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f78013f522b%3A0xafedccdc4af8fd70!2sB%26B%20INDIA!5e0!3m2!1sen!2sin!4v1711627180348!5m2!1sen!2sin"
                className="w-full border-none"
                loading="lazy"
                height={'100%'}
                allowFullScreen
                title="bnbIndia"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

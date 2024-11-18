"use client";
import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { FaBehance, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setStatus('Sending...')

    const serviceId = 'service_wht9m4f'
    const templateId = 'template_fmnhbpc'
    const userId = 'EheJ--UAHSBZ1x3bC'

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again later.')
      })
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Get in Touch</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Contact Information</h3>
              <div className="flex items-center mb-4">
                <EnvelopeIcon className="h-6 w-6 text-blue-500 mr-2" />
                <p className="dark:text-gray-300">maureennmwendwa@gmail.com</p>
              </div>
              <div className="flex items-center mb-4">
                <PhoneIcon className="h-6 w-6 text-blue-500 mr-2" />
                <p className="dark:text-gray-300">+254 704264110</p>
              </div>
              <div className="flex items-center mb-4">
                <MapPinIcon className="h-6 w-6 text-blue-500 mr-2" />
                <p className="dark:text-gray-300">616, Karen. Korongo Road, Nairobi, Kenya</p>
              </div>

              <div className="flex space-x-4 mt-4">
                <a href="https://www.behance.net/terryamukoa" target="_blank" rel="noopener noreferrer">
                  <FaBehance className="h-6 w-6 text-blue-500 hover:text-blue-700" />
                </a>
                <a href="https://www.linkedin.com/in/gatweri-mwendwa-aab087317/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-6 w-6 text-blue-500 hover:text-blue-700" />
                </a>
                <a href="https://x.com/Gatweri_Mwendwa" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="h-6 w-6 text-blue-500 hover:text-blue-700" />
                </a>
                <a href="https://github.com/Maureen-Gatweri" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-6 w-6 text-blue-500 hover:text-blue-700" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.form
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Send Message
              </button>
              {status && (
                <p className="mt-4 text-center text-green-600 dark:text-green-400">{status}</p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}

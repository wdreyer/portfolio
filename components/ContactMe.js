import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactMe = ({ closeModal }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    phone: '',
    email: '',
    project: ''
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Réinitialiser le message

    // Envoi du formulaire via Formspree
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    try {
      await xhr.send(data);
      // Le formulaire a été envoyé avec succès
      console.log('Form submitted successfully!');
      setMessage(t('form.successMessage'));
      setFormData({
        name: '',
        firstName: '',
        phone: '',
        email: '',
        project: ''
      });
      setTimeout(() => {
        closeModal(); // Fermer la modale après 2 secondes
      }, 2000);
    } catch (error) {
      // Il y a eu une erreur lors de l'envoi du formulaire
      console.error('Error submitting form.', error);
      setMessage(t('form.errorMessage'));
    }
  };

  return (
    <div className="bg-white w-[400px] shadow-md rounded p-8 relative">
      <button
        type="button"
        className="absolute top-0 right-0 p-2"
        onClick={closeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 hover:text-gray-900 transition"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {message && (
        <div className="mb-4 text-center text-green-600">
          {message}
        </div>
      )}

      {!message && (
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xzblzvbv"
          method="POST"
        >
          {/* ... */}
          <div className="first-letter:mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              {t('form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              {t('form.firstName')}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              {t('form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              {t('form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="project" className="block text-gray-700 font-bold mb-2">
              {t('form.project')}
            </label>
            <textarea
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="shadow bg-slate-100 hover:bg-slate-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {t('form.send')}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactMe;

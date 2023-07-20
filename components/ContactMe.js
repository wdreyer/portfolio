import React, { useState } from 'react';

const ContactMe = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    tel: '',
    mail: '',
    projet: ''
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
      console.log('Formulaire envoyé avec succès !');
      setMessage('Merci ! Votre formulaire a été envoyé avec succès.');
      setFormData({
        nom: '',
        prenom: '',
        tel: '',
        mail: '',
        projet: ''
      });
      setTimeout(() => {
        closeModal(); // Fermer la modale après 2 secondes
      }, 2000);
    } catch (error) {
      // Il y a eu une erreur lors de l'envoi du formulaire
      console.error('Erreur lors de l\'envoi du formulaire.', error);
      setMessage('Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
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
        {!message &&  (

        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xzblzvbv"
          method="POST"
        >
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
        <div className=" first-letter:mb-4">
          <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">
            Nom :
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="prenom" className="block text-gray-700 font-bold mb-2">
            Prénom :
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tel" className="block text-gray-700 font-bold mb-2">
            Téléphone :
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mail" className="block text-gray-700 font-bold mb-2">
            Email :
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="projet" className="block text-gray-700 font-bold mb-2">
            Projet :
          </label>
          <textarea
            id="projet"
            name="projet"
            value={formData.projet}
            onChange={handleChange}
            required
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className=" shadow bg-slate-100 hover:bg-slate-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Envoyer
          </button>
        </div>
      </form>
        )}
      </div>
      
    
  );
};

export default ContactMe;

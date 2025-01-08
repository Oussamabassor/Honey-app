import React, { useState } from 'react';
import '../styles/Contact.css';
import { useLanguage } from '../src/LanguageContext';

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'fullName':
        error = value.trim() === '' ? 'Full name is required' : '';
        break;
      case 'phoneNumber':
        error = !/^\d{10}$/.test(value) ? 'Invalid phone number' : '';
        break;
      case 'email':
        error = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (errors[key]) {
        formErrors[key] = errors[key];
      }
    });

    if (Object.keys(formErrors).length === 0) {
      // Submit the form
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({ fullName: '', phoneNumber: '', email: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <h2>{t('contactUs')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">{t('fullName')}</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">{t('phoneNumber')}</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('emailAddress')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <button type="submit">{t('submit')}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


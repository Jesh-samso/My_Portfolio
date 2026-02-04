import { useState } from "react";
import "../styles/Contact.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formValues.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!formValues.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formValues.message.trim()) {
      nextErrors.message = "Please enter a message.";
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStatus("Thanks! Your message is ready to send.");
      setFormValues(initialState);
    } else {
      setStatus("");
    }
  };

  return (
    <section id="contact" className="section reveal">
      {/* Contact form with validation */}
      <div className="container contact-grid">
        <div>
          <h2>Contact</h2>
          <p>
            Let’s work together. Share a few details about your project and I’ll
            reply within 24-48 hours.
          </p>
          <div className="contact-details">
            <span>Email</span>
            <a href="mailto:samson.opondo@email.com">
              samson.opondo@email.com
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            value={formValues.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {status && <p className="form-note">{status}</p>}
          <p className="form-note">This form is front-end only for now.</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;

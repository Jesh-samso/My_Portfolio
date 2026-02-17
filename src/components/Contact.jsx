import { useState } from "react";
import "../styles/Contact.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const socialLinks = [
  {
    id: "email",
    icon: "✉️",
    label: "Email",
    href: "mailto:samsonopondo1274@gmail.com",
  },
  {
    id: "whatsapp",
    icon: "💬",
    label: "WhatsApp",
    href: "https://wa.me/254116069774?text=Hi%20Samson%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you",
  },
  {
    id: "linkedin",
    icon: "💼",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samson-opondo/",
  },
  {
    id: "github",
    icon: "⚙️",
    label: "GitHub",
    href: "https://github.com/Jesh-samso",
  },
];

function Contact() {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      setStatus("");
      return;
    }

    setIsSending(true);
    setStatus("Sending message...");

    try {
      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("email", formValues.email);
      formData.append("message", formValues.message);
      formData.append("_subject", "New message from my Website");
      formData.append("_captcha", "false");
      formData.append("_template", "table");
  

      const res = await fetch(
        "https://formsubmit.co/ajax/7eb8d432d749573222419f6c0906d0c1",

        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      if (data.success || res.status === 200) {
        setStatus("Message sent — thank you! I will reply soon.");
        setFormValues(initialState);
        setErrors({});
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      setStatus(
        "Failed to send message. If the problem persists, email me directly."
      );
    } finally {
      setIsSending(false);
    }
  };

  

  return (
    <section id="contact" className="section reveal">
      {/* Contact form with validation */}
      <div className="container contact-grid">
        <div>
          <h2>Contact</h2>

          <br/>
          
        
          <p>
            Let’s work together. Share a few details about your project and I’ll
            reply within 24-48 hours.
          </p>
          <div className="contact-details">
            <span>Email</span>
            <a href="mailto:samsonopondo1274@gmail.com">
              samsonopondo1274@gmail.com
            </a>
          </div>
          <br/>
           <p>
          WhatsApp No. <br /> 0116069774
          </p>
        </div>
        <form
  className="contact-form"
  action="https://formsubmit.co/7eb8d432d749573222419f6c0906d0c1"
  method="POST"
>
  <label htmlFor="name">Name</label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Your name"
    required
  />

  <label htmlFor="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="jesh123@gmail.com"
    required
  />

  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    name="message"
    rows="5"
    placeholder="Tell me about your project..."
    required
  ></textarea>

  {/* Hidden FormSubmit fields */}
  <input type="hidden" name="_subject" value="New message from my Website" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_next" value="https://your-vercel-site.vercel.app/thank-you" />

  <button type="submit" className="btn btn-primary">
    Send Message
  </button>
</form>

      </div>
    </section>
  );
}

export default Contact;

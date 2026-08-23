import "./page.css";

export const metadata = {
  title:
    "Contact FitCart | Premium Fitness Equipment India",

  description:
    "Get in touch with FitCart for product inquiries, orders, support, partnerships and fitness equipment assistance.",

  keywords: [
    "contact fitcart",
    "fitness equipment support",
    "gym equipment india",
    "fitcart customer support",
    "fitness store contact",
    "workout equipment help"
  ],

  alternates: {
    canonical:
      "https://fitcart.in/contact",
  },

  openGraph: {
    title:
      "Contact FitCart",

    description:
      "Get in touch with the FitCart team.",

    url:
      "https://fitcart.in/contact",

    siteName:
      "FitCart",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Contact FitCart",

    description:
      "Contact our team for support and inquiries.",
  },
};

export default function ContactPage() {

  return (

    <div className="contact-page">

      <section className="contact-hero">

        <div className="contact-overlay"></div>

        <div className="contact-hero-content">

          <span className="contact-tag">
            Contact FitCart
          </span>

          <h1>

            Let&apos;s Build Your

            <span>
              Fitness Journey
            </span>

          </h1>

          <p>

            Have questions about products,
            orders, shipping or partnerships?
            Our team is ready to help you
            achieve your fitness goals.

          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="contact-section">

        <div className="contact-wrapper">

          <div className="contact-info">

            <span className="section-tag">
              Get In Touch
            </span>

            <h2>
              We Are Here To Help
            </h2>

            <p>
              Whether you have product questions,
              need order assistance or want to
              discuss partnerships, our team is
              ready to assist.
            </p>

            <div className="info-card">

              <h3>Email Support</h3>

              <p>
                support@fitcart.in
              </p>

            </div>

            <div className="info-card">

              <h3>Phone Support</h3>

              <p>
                +91 98765 43210
              </p>

            </div>

            <div className="info-card">

              <h3>Working Hours</h3>

              <p>
                Monday - Saturday
                <br />
                9:00 AM - 7:00 PM
              </p>

            </div>

          </div>

          <div className="contact-form-box">

            <form className="contact-form">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>
      <section className="map-section">

        <div className="section-heading">

          <span>
            Our Location
          </span>

          <h2>
            Visit Our Mumbai Office
          </h2>

          <p>
            Connect with our team and explore
            premium fitness solutions from
            FitCart.
          </p>

        </div>

        <div className="map-wrapper">

          <iframe
            src="https://www.google.com/maps?q=Mumbai,Maharashtra,India&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FitCart Mumbai Location"
          ></iframe>

        </div>

      </section>
    </div>

  );

}
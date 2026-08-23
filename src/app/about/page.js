import "./page.css";
import Image from "next/image";

export const metadata = {
  title:
    "About FitCart | India's Premium Fitness Marketplace",

  description:
    "Learn about FitCart, our mission, vision and commitment to providing premium fitness equipment, supplements and recovery tools across India.",

  keywords: [
    "about fitcart",
    "fitness marketplace india",
    "gym equipment india",
    "fitcart mission",
    "fitness products india",
    "premium fitness store"
  ],

  alternates: {
    canonical:
      "https://fitcart.in/about",
  },

  openGraph: {
    title:
      "About FitCart",

    description:
      "Discover FitCart's mission and commitment to fitness enthusiasts across India.",

    url:
      "https://fitcart.in/about",

    siteName:
      "FitCart",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "About FitCart",

    description:
      "Learn more about FitCart and our vision.",
  },
};

export default function AboutPage() {

  return (

    <div className="about-page">

      <section className="about-hero">

        <div className="about-overlay"></div>

        <div className="about-hero-content">

          <span className="about-tag">
            About FitCart
          </span>

          <h1>

            Empowering India&apos;s

            <span>
              Fitness Community
            </span>

          </h1>

          <p>

            FitCart is dedicated to helping
            athletes, fitness enthusiasts and
            everyday individuals achieve their
            goals with premium fitness equipment,
            supplements and recovery solutions.

          </p>

        </div>

      </section>
      {/* OUR STORY */}

      <section className="story-section">

        <div className="story-container">

          <div className="story-image">

            <Image
              src="/about-story.jpg"
              alt="FitCart Story"
              width={800}
              height={650}
              className="story-img"
              priority
            />

          </div>

          <div className="story-content">

            <span className="story-tag">
              Our Story
            </span>

            <h2>

              Built For People Who
              Take Fitness Seriously

            </h2>

            <p>

              FitCart was created with a simple
              vision — to make premium fitness
              equipment, supplements and recovery
              tools accessible to fitness enthusiasts
              across India.

            </p>

            <p>

              We understand that achieving fitness
              goals requires more than motivation.
              It requires reliable equipment,
              trusted products and a seamless
              shopping experience. That is exactly
              what FitCart delivers.

            </p>

            <p>

              Whether you are building a home gym,
              improving athletic performance or
              focusing on recovery, FitCart is
              designed to support every stage
              of your fitness journey.

            </p>

          </div>

        </div>

      </section>
      {/* MISSION & VISION */}

      <section className="mission-section">

        <div className="mission-heading">

          <span>
            Our Purpose
          </span>

          <h2>
            Mission & Vision
          </h2>

          <p>
            Everything we do at FitCart is guided
            by a commitment to helping people live
            stronger, healthier and more active lives.
          </p>

        </div>

        <div className="mission-grid">

          <div className="mission-card">

            <div className="mission-number">
              01
            </div>

            <h3>
              Our Mission
            </h3>

            <p>
              To provide premium fitness equipment,
              supplements and recovery products that
              help individuals achieve their fitness
              goals with confidence and consistency.
            </p>

          </div>

          <div className="mission-card">

            <div className="mission-number">
              02
            </div>

            <h3>
              Our Vision
            </h3>

            <p>
              To become India&apos;s most trusted
              fitness marketplace by delivering
              quality products, exceptional service
              and a world-class shopping experience.
            </p>

          </div>

        </div>

      </section>

      {/* WHY FITCART */}

      <section className="about-features">

        <div className="features-heading">

          <span>
            Why Choose FitCart
          </span>

          <h2>
            Built Around Performance,
            Quality & Trust
          </h2>

          <p>
            Every product and every experience
            is designed to help you achieve your
            fitness goals with complete confidence.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              01
            </div>

            <h3>
              Premium Quality
            </h3>

            <p>
              Carefully selected equipment,
              supplements and recovery tools
              from trusted manufacturers.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              02
            </div>

            <h3>
              Secure Shopping
            </h3>

            <p>
              Safe browsing, trusted payments
              and a seamless checkout experience
              from start to finish.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              03
            </div>

            <h3>
              Fast Delivery
            </h3>

            <p>
              Reliable shipping across India
              with secure packaging and timely
              order updates.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              04
            </div>

            <h3>
              Customer First
            </h3>

            <p>
              Dedicated support to help you
              choose the right products and
              resolve every query quickly.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              05
            </div>

            <h3>
              Performance Driven
            </h3>

            <p>
              Products selected to improve
              strength, endurance, recovery
              and overall fitness.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              06
            </div>

            <h3>
              Trusted Experience
            </h3>

            <p>
              A premium ecommerce platform
              focused on reliability, quality
              and customer satisfaction.
            </p>

          </div>

        </div>

      </section>

      {/* STATISTICS */}

      <section className="about-stats">

        <div className="stats-overlay"></div>

        <div className="stats-content">

          <div className="stats-heading">

            <span>
              Our Impact
            </span>

            <h2>
              Helping Thousands
              Build Better Fitness
            </h2>

            <p>

              We are committed to providing
              premium fitness equipment,
              supplements and recovery tools
              trusted by fitness enthusiasts
              across India.

            </p>

          </div>

          <div className="stats-grid">

            <div className="stat-card">

              <h3>10K+</h3>

              <p>
                Happy Customers
              </p>

            </div>

            <div className="stat-card">

              <h3>500+</h3>

              <p>
                Premium Products
              </p>

            </div>

            <div className="stat-card">

              <h3>100+</h3>

              <p>
                Cities Served
              </p>

            </div>

            <div className="stat-card">

              <h3>4.9★</h3>

              <p>
                Average Rating
              </p>

            </div>

          </div>

        </div>

      </section>

      
    </div>

  );
}
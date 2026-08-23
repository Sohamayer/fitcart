import Link from "next/link";
import Image from "next/image";
import { getCollectionProducts } from "@/lib/shopify";
import "./page.css";

export const metadata = {
  title:
    "Strength Equipment | Premium Gym Equipment India | FitCart",

  description:
    "Shop premium strength training equipment including dumbbells, barbells, benches, squat racks, kettlebells and home gym essentials at FitCart.",

  keywords: [
    "strength equipment",
    "gym equipment india",
    "dumbbells",
    "barbells",
    "weight lifting equipment",
    "home gym",
    "strength training",
    "fitcart"
  ],

  alternates: {
    canonical:
      "https://fitcart.in/StrengthEquipment",
  },

  openGraph: {
    title:
      "Strength Equipment | FitCart",

    description:
      "Premium strength training equipment for every fitness level.",

    url:
      "https://fitcart.in/StrengthEquipment",

    siteName:
      "FitCart",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Strength Equipment | FitCart",

    description:
      "Premium strength equipment for home and commercial gyms.",
  },
};

export default async function StrengthEquipmentPage() {

  const products =
    await getCollectionProducts(
      "strength-equipment"
    );

  return (

    <main className="strength-page">

      <section className="strength-hero">

        <div className="strength-overlay"></div>

        <div className="strength-content">

          <span className="hero-tag">

            Premium Strength Collection

          </span>

          <h1>

            Build Strength

            <span>
              Without Limits
            </span>

          </h1>

          <p>

            Discover premium dumbbells,
            barbells, benches, squat racks,
            kettlebells and professional
            strength equipment engineered
            for athletes, fitness enthusiasts
            and home gym owners.

          </p>

          <div className="hero-buttons">

            <Link
              href="/products?category=Strength Equipment"
              className="primary-btn"
            >
              Explore Equipment
            </Link>

            <Link
              href="/contact"
              className="secondary-btn"
            >
              Need Expert Advice?
            </Link>

          </div>

        </div>

      </section>

      {/* SHOP BY EQUIPMENT */}

    <section className="equipment-section">

        <div className="section-heading">

            <span>
            Shop By Equipment
            </span>

            <h2>
            Everything You Need
            For Strength Training
            </h2>

            <p>

            Explore premium strength training
            equipment designed for home gyms,
            commercial fitness centers and
            professional athletes.

            </p>

        </div>

        <div className="equipment-grid">

            <div className="equipment-card dumbbells">

            <div className="equipment-overlay"></div>

            <div className="equipment-content">

                <span>
                Equipment 01
                </span>

                <h3>
                Dumbbells
                </h3>

                <p>

                Adjustable and fixed dumbbells
                for progressive strength training.

                </p>

                <Link
                href="/products?category=Strength Equipment"
                className="equipment-btn"
                >
                Explore
                </Link>

            </div>

            </div>

            <div className="equipment-card barbells">

            <div className="equipment-overlay"></div>

            <div className="equipment-content">

                <span>
                Equipment 02
                </span>

                <h3>
                Barbells
                </h3>

                <p>

                Olympic barbells and weightlifting
                bars built for maximum durability.

                </p>

                <Link
                href="/products?category=Strength Equipment"
                className="equipment-btn"
                >
                Explore
                </Link>

            </div>

            </div>

            <div className="equipment-card benches">

            <div className="equipment-overlay"></div>

            <div className="equipment-content">

                <span>
                Equipment 03
                </span>

                <h3>
                Benches
                </h3>

                <p>

                Flat, adjustable and incline
                benches for complete workouts.

                </p>

                <Link
                href="/products?category=Strength Equipment"
                className="equipment-btn"
                >
                Explore
                </Link>

            </div>

            </div>

            <div className="equipment-card racks">

            <div className="equipment-overlay"></div>

            <div className="equipment-content">

                <span>
                Equipment 04
                </span>

                <h3>
                Squat Racks
                </h3>

                <p>

                Professional power racks and
                squat stands for serious lifting.

                </p>

                <Link
                href="/products?category=Strength Equipment"
                className="equipment-btn"
                >
                Explore
                </Link>

            </div>

            </div>

        </div>

    </section>

    {/* FEATURED PRODUCTS */}

    <section className="strength-products">

        <div className="section-heading">

            <span>
                Premium Collection
            </span>

            <h2>
                Featured Strength Equipment
            </h2>

            <p>

                Explore our carefully selected
                strength training equipment
                trusted by athletes and fitness
                enthusiasts.

            </p>

        </div>

        <div className="products-grid">

            {products.map(({ node }) => (

                <div
                    key={node.id}
                    className="product-card"
                >

                    <div className="product-image">

                        <Image
                            src={node.featuredImage?.url}
                            alt={node.title}
                            width={500}
                            height={500}
                            className="product-img"
                        />

                    </div>

                    <div className="product-info">

                        <p className="product-price">

                            ₹
                            {Math.round(
                                node.priceRange
                                .minVariantPrice
                                .amount
                            )}

                        </p>

                        <h3>
                            {node.title}
                        </h3>

                        <p className="description">

                            {node.description.slice(
                                0,
                                90
                            )}...

                        </p>

                        <Link
                            href="/products"
                            className="product-btn"
                        >
                            View Product
                        </Link>

                    </div>

                </div>

            ))}

        </div>

    </section>

    {/* WHY CHOOSE OUR EQUIPMENT */}

    <section className="strength-benefits">

        <div className="section-heading">

            <span>
                Why Choose FitCart
            </span>

            <h2>
                Built For Maximum Performance
            </h2>

            <p>

                Every strength training product
                is selected for durability,
                performance and long-term
                reliability.

            </p>

        </div>

        <div className="benefits-grid">

            <div className="benefit-card">

                <div className="benefit-number">
                    01
                </div>

                <h3>
                    Commercial Grade Quality
                </h3>

                <p>

                    Premium materials designed
                    for intense daily workouts
                    in both home and commercial
                    gyms.

                </p>

            </div>

            <div className="benefit-card">

                <div className="benefit-number">
                    02
                </div>

                <h3>
                    Maximum Durability
                </h3>

                <p>

                    Heavy-duty construction
                    engineered for years of
                    reliable performance.

                </p>

            </div>

            <div className="benefit-card">

                <div className="benefit-number">
                    03
                </div>

                <h3>
                    Ergonomic Design
                </h3>

                <p>

                    Comfortable grip,
                    balanced weight and
                    user-friendly designs
                    for safer workouts.

                </p>

            </div>

            <div className="benefit-card">

                <div className="benefit-number">
                    04
                </div>

                <h3>
                    Perfect For Every Level
                </h3>

                <p>

                    Whether you are a beginner,
                    fitness enthusiast or
                    professional athlete,
                    we have equipment for you.

                </p> 

            </div>

        </div>

    </section>

    {/* TRAINING GOALS */}

    <section className="training-section">

        <div className="section-heading">

            <span>
                Shop By Goal
            </span>

            <h2>
                Find Equipment That Matches
                Your Training Style
            </h2>

            <p>

                Whether you are starting your
                fitness journey or building a
                professional gym, FitCart has
                equipment designed for every
                training goal.

            </p>

        </div>

        <div className="training-grid">

            <div className="training-card">

                <h3>
                    Beginner Home Gym
                </h3>

                <p>

                    Perfect starter equipment
                    including adjustable dumbbells,
                    benches and resistance tools.

                </p>

                <Link
                    href="/products?category=Strength Equipment"
                    className="training-btn"
                >
                    View Equipment →
                </Link>

            </div>

            <div className="training-card">

                <h3>
                    Muscle Building
                </h3>

                <p>

                    Olympic barbells, weight
                    plates, squat racks and
                    heavy-duty benches for
                    serious strength training.

                </p>

                <Link
                    href="/products?category=Strength Equipment"
                    className="training-btn"
                >
                    View Equipment →
                </Link>

            </div>

            <div className="training-card">

                <h3>
                    Commercial Gym
                </h3>

                <p>

                    Professional-grade strength
                    equipment built to withstand
                    continuous daily usage.

                </p>

                <Link
                    href="/products?category=Strength Equipment"
                    className="training-btn"
                >
                    View Equipment →
                </Link>

            </div>

        </div>

    </section>

    {/* STRENGTH TRAINING INFO */}

    <section className="strength-info">

        <div className="strength-info-container">

            <div className="strength-left">

                <span className="section-tag">
                    Strength Training Guide
                </span>

                <h2>

                    Build Muscle,
                    Increase Strength &
                    Improve Overall Health

                </h2>

                <p>

                    Strength training is one of the
                    most effective ways to build lean
                    muscle, improve endurance, enhance
                    metabolism and increase overall
                    athletic performance. Whether you&apos;re
                    creating a home gym or upgrading a
                    commercial fitness facility,
                    choosing high-quality equipment
                    makes every workout safer and more
                    effective.

                </p>

                <p>

                    At FitCart, every strength product
                    is selected for durability,
                    performance and long-term
                    reliability so you can focus on
                    achieving your fitness goals.

                </p>

            </div>

            <div className="strength-right">

                <div className="highlight-card">

                    <h3>
                        Benefits of Strength Training
                    </h3>

                    <ul>

                        <li>✔ Builds Lean Muscle Mass</li>

                        <li>✔ Improves Bone Strength</li>

                        <li>✔ Increases Daily Energy</li>

                        <li>✔ Enhances Athletic Performance</li>

                        <li>✔ Supports Weight Management</li>

                        <li>✔ Improves Overall Fitness</li>

                    </ul>

                </div>

            </div>

        </div>

    </section>

    {/* FAQ */}

    <section className="faq-section">

    <div className="section-heading">

        <span>
        Frequently Asked Questions
        </span>

        <h2>
        Everything You Need To Know
        </h2>

        <p>

        Find answers to the most common
        questions about strength training
        equipment before making your purchase.

        </p>

    </div>

    <div className="faq-container">

        <div className="faq-card">

        <h3>
            Which strength equipment is best for beginners?
        </h3>

        <p>

            Beginners should start with adjustable
            dumbbells, a workout bench and resistance
            bands. These provide a complete full-body
            workout while requiring minimal space.

        </p>

        </div>

        <div className="faq-card">

        <h3>
            Can I build a home gym with FitCart products?
        </h3>

        <p>

            Yes. FitCart offers everything from
            dumbbells and benches to squat racks
            and complete home gym solutions for
            every fitness level.

        </p>

        </div>

        <div className="faq-card">

        <h3>
            Are these products suitable for commercial gyms?
        </h3>

        <p>

            Absolutely. Our commercial-grade
            equipment is designed to withstand
            heavy daily usage in professional
            fitness centers.

        </p>

        </div>

        <div className="faq-card">

        <h3>
            Do you deliver across India?
        </h3>

        <p>

            Yes. We provide secure shipping
            across India with carefully packaged
            equipment and reliable delivery.

        </p>

        </div>

    </div>

    </section>

    </main>

  );

}
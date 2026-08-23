import Link from "next/link";
import Image from "next/image";
import { getCollectionProducts } from "@/lib/shopify";
import "./page.css";

export const metadata = {
  title:
    "Cardio Equipment | Treadmills, Exercise Bikes & Cross Trainers | FitCart",

  description:
    "Shop premium cardio equipment including treadmills, exercise bikes, rowing machines, ellipticals and more for home and commercial gyms.",

  keywords: [
    "cardio equipment",
    "treadmill india",
    "exercise bike",
    "elliptical trainer",
    "rowing machine",
    "home cardio equipment",
    "fitness equipment",
    "fitcart"
  ],

  alternates: {
    canonical:
      "https://fitcart.in/CardioEquipment",
  },

  openGraph: {
    title:
      "Cardio Equipment | FitCart",

    description:
      "Premium cardio equipment designed for endurance, weight loss and heart health.",

    url:
      "https://fitcart.in/CardioEquipment",

    siteName:
      "FitCart",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Cardio Equipment | FitCart",

    description:
      "Premium cardio machines for every fitness level.",
  },
};

export default async function CardioEquipmentPage() {

  const products =
    await getCollectionProducts(
      "cardio-equipment"
    );

  return (

    <main className="cardio-page">

      <section className="cardio-hero">

        <div className="cardio-overlay"></div>

        <div className="cardio-content">

          <span className="hero-tag">

            Premium Cardio Collection

          </span>

          <h1>

            Train Hard

            <span>
              Stay Strong
            </span>

          </h1>

          <p>

            Improve endurance, burn calories
            and strengthen your heart with
            premium treadmills, exercise bikes,
            rowing machines, ellipticals and
            professional cardio equipment built
            for every fitness journey.

          </p>

          <div className="hero-buttons">

            <Link
              href="/products?category=Cardio Equipment"
              className="primary-btn"
            >
              Explore Equipment
            </Link>

            <Link
              href="/contact"
              className="secondary-btn"
            >
              Speak With An Expert
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
            Find The Perfect
            Cardio Equipment
            </h2>

            <p>

            Whether you are building a home gym,
            improving endurance or starting your
            fitness journey, discover premium
            cardio machines designed for every
            fitness level.

            </p>

        </div>

        <div className="equipment-grid">

            {/* Treadmills */}

            <div className="equipment-card treadmill">

            <div className="equipment-overlay"></div>

            <div className="equipment-content">

                <span>
                Equipment 01
                </span>

                <h3>
                Treadmills
                </h3>

                <p>

                Walk, jog and run with premium
                treadmills designed for smooth
                performance and durability.

                </p>

                <Link
                href="/products?category=Cardio Equipment"
                className="equipment-btn"
                >
                Explore
                </Link>

            </div>

            </div>

            {/* Exercise Bikes */}

            <div className="equipment-card bike">

            <div className="equipment-overlay"></div>

            <div className="equipment-content">

                <span>
                Equipment 02
                </span>

                <h3>
                Exercise Bikes
                </h3>

                <p>

                Improve cardiovascular fitness
                with upright and spin bikes
                suitable for every workout.

                </p>

                <Link
                href="/products?category=Cardio Equipment"
                className="equipment-btn"
                >
                Explore
                </Link>

            </div>

            </div>

            {/* Rowing Machines */}

            <div className="equipment-card rowing">

            <div className="equipment-overlay"></div>

            <div className="equipment-content">

                <span>
                Equipment 03
                </span>

                <h3>
                Rowing Machines
                </h3>

                <p>

                Full-body cardio workouts that
                improve endurance, strength
                and overall conditioning.

                </p>

                <Link
                href="/products?category=Cardio Equipment"
                className="equipment-btn"
                >
                Explore
                </Link>

            </div>

            </div>

            {/* Ellipticals */}

            <div className="equipment-card elliptical">

            <div className="equipment-overlay"></div>

            <div className="equipment-content">

                <span>
                Equipment 04
                </span>

                <h3>
                Ellipticals
                </h3>

                <p>

                Low-impact cardio equipment
                that delivers smooth and
                effective full-body workouts.

                </p>

                <Link
                href="/products?category=Cardio Equipment"
                className="equipment-btn"
                >
                Explore
                </Link>

            </div>

            </div>

        </div>

        </section>

        {/* FEATURED PRODUCTS */}

        <section className="cardio-products">

            <div className="section-heading">

                <span>

                    Premium Collection

                </span>

                <h2>

                    Featured Cardio Equipment

                </h2>

                <p>

                    Discover premium cardio
                    equipment trusted by
                    athletes, fitness enthusiasts
                    and commercial gyms.

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
                                href={`/products`}
                                className="product-btn"
                            >

                                View Product

                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </section>

        {/* WHY CARDIO TRAINING */}

        <section className="cardio-benefits">

            <div className="benefits-heading">

                <span>
                    Why Cardio Matters
                </span>

                <h2>
                    More Than Just Burning Calories
                </h2>

                <p>

                    Regular cardiovascular exercise
                    improves overall health, endurance
                    and energy while helping you stay
                    active every day.

                </p>

            </div>

            <div className="benefits-grid">

                <div className="benefit-card">

                    <div className="benefit-number">
                        01
                    </div>

                    <h3>
                        Better Heart Health
                    </h3>

                    <p>

                        Strengthen your heart,
                        improve circulation and
                        increase cardiovascular
                        endurance with regular
                        cardio workouts.

                    </p>

                </div>

                <div className="benefit-card">

                    <div className="benefit-number">
                        02
                    </div>

                    <h3>
                        Burn More Calories
                    </h3>

                    <p>

                        Cardio equipment helps
                        maximize calorie burn,
                        making weight management
                        and fat loss more effective.

                    </p>

                </div>

                <div className="benefit-card">

                    <div className="benefit-number">
                        03
                    </div>

                    <h3>
                        Build Endurance
                    </h3>

                    <p>

                        Improve stamina and
                        athletic performance
                        with consistent training
                        on premium cardio machines.

                    </p>

                </div>

                <div className="benefit-card">

                    <div className="benefit-number">
                        04
                    </div>

                    <h3>
                        Low Impact Options
                    </h3>

                    <p>

                        Ellipticals and exercise
                        bikes provide effective
                        workouts while reducing
                        stress on your joints.

                    </p>

                </div>

            </div>

        </section>

        {/* WHY BUY FROM FITCART */}

        <section className="why-fitcart">

            <div className="why-left">

                <span className="why-tag">
                    Why FitCart
                </span>

                <h2>

                    Trusted Cardio
                    Equipment For Every Goal

                </h2>

                <p>

                    Whether you are creating your first
                    home gym or upgrading a professional
                    fitness facility, FitCart provides
                    carefully selected cardio equipment
                    built for durability, performance
                    and long-term reliability.

                </p>

            </div>

            <div className="why-right">

                <div className="why-item">

                    <div className="why-icon">
                        ✓
                    </div>

                    <div>

                        <h3>
                            Premium Quality
                        </h3>

                        <p>

                            Equipment sourced from trusted
                            fitness brands for maximum
                            performance.

                        </p>

                    </div>

                </div>

                <div className="why-item">

                    <div className="why-icon">
                        ✓
                    </div>

                    <div>

                        <h3>
                            Fast Delivery
                        </h3>

                        <p>

                            Secure shipping across India
                            with careful packaging and
                            order tracking.

                        </p>

                    </div>

                </div>

                <div className="why-item">

                    <div className="why-icon">
                        ✓
                    </div>

                    <div>

                        <h3>
                            Expert Guidance
                        </h3>

                        <p>

                            Our team helps you choose the
                            perfect equipment based on
                            your fitness goals.

                        </p>

                    </div>

                </div>

                <div className="why-item">

                    <div className="why-icon">
                        ✓
                    </div>

                    <div>

                        <h3>
                            Secure Shopping
                        </h3>

                        <p>

                            Safe checkout, trusted payments
                            and dedicated customer support
                            whenever you need assistance.

                        </p>

                    </div>

                </div>

            </div>

        </section>

        {/* CTA */}

        <section className="cardio-cta">

            <div className="cta-overlay"></div>

            <div className="cta-content">

                <span>

                    Start Your Fitness Journey

                </span>

                <h2>

                    Upgrade Your Cardio
                    Training Today

                </h2>

                <p>

                    Explore premium treadmills,
                    exercise bikes, rowing machines
                    and ellipticals designed for
                    performance, durability and
                    long-term fitness success.

                </p>

                <div className="cta-buttons">

                    <Link
                        href="/products?category=Cardio Equipment"
                        className="primary-btn"
                    >

                        Shop Cardio Equipment

                    </Link>

                    <Link
                        href="/contact"
                        className="secondary-btn"
                    >

                        Contact Our Experts

                    </Link>

                </div>

            </div>

        </section>

    </main>

  );

}
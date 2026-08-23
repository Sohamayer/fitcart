import Link from "next/link";
import "./page.css";
import Image from "next/image";
import { getCollectionProducts } from "@/lib/shopify";

export const metadata = {
  title:
    "Supplements | Protein, Creatine & Sports Nutrition | FitCart",

  description:
    "Shop premium protein powders, creatine, pre-workouts, BCAAs, vitamins and sports nutrition supplements from trusted fitness brands at FitCart.",

  keywords: [
    "protein powder",
    "sports supplements",
    "creatine",
    "pre workout",
    "whey protein india",
    "gym supplements",
    "sports nutrition",
    "fitcart"
  ],

  alternates: {
    canonical:
      "https://fitcart.in/Supplements",
  },

  openGraph: {
    title:
      "Supplements | FitCart",

    description:
      "Premium sports nutrition and supplements for muscle growth, recovery and performance.",

    url:
      "https://fitcart.in/Supplements",

    siteName:
      "FitCart",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Supplements | FitCart",

    description:
      "Premium protein powders, creatine and sports nutrition.",
  },
};

export default async function SupplementsPage() {

  const products =
    await getCollectionProducts(
      "supplements"
    );

  return (

    <main className="supplements-page">

      <section className="supplements-hero">

        <div className="supplements-overlay"></div>

        <div className="supplements-content">

          <span className="hero-tag">

            Premium Sports Nutrition

          </span>

          <h1>

            Fuel Your Body

            <span>

              Perform Better

            </span>

          </h1>

          <p>

            Discover premium protein powders,
            creatine, pre-workouts, BCAAs,
            mass gainers and daily nutrition
            supplements designed to maximize
            performance, recovery and results.

          </p>

          <div className="hero-buttons">

            <Link
              href="/products?category=Supplements"
              className="primary-btn"
            >

              Shop Supplements

            </Link>

            <Link
              href="/contact"
              className="secondary-btn"
            >

              Get Expert Advice

            </Link>

          </div>

        </div>

      </section>

      {/* SHOP BY SUPPLEMENT */}

    <section className="supplement-category-section">

        <div className="supplement-heading">

            <span>

                Shop By Category

            </span>

            <h2>

                Find The Right Nutrition
                For Your Fitness Goals

            </h2>

            <p>

                From muscle growth and recovery
                to endurance and daily wellness,
                explore premium supplements
                trusted by athletes and fitness
                enthusiasts across India.

            </p>

        </div>

        <div className="supplement-grid">

            {/* Protein */}

            <div className="supplement-card protein">

                <div className="supplement-card-overlay"></div>

                <div className="supplement-card-content">

                    <span>

                        Category 01

                    </span>

                    <h3>

                        Whey Protein

                    </h3>

                    <p>

                        Premium protein powders
                        for muscle growth,
                        recovery and lean gains.

                    </p>

                    <Link
                        href="/products?category=Supplements"
                        className="supplement-btn"
                    >

                        Explore

                    </Link>

                </div>

            </div>

            {/* Creatine */}

            <div className="supplement-card creatine">

                <div className="supplement-card-overlay"></div>

                <div className="supplement-card-content">

                    <span>

                        Category 02

                    </span>

                    <h3>

                        Creatine

                    </h3>

                    <p>

                        Improve strength,
                        power output and
                        workout performance.

                    </p>

                    <Link
                        href="/products?category=Supplements"
                        className="supplement-btn"
                    >

                        Explore

                    </Link>

                </div>

            </div>

            {/* Pre Workout */}

            <div className="supplement-card preworkout">

                <div className="supplement-card-overlay"></div>

                <div className="supplement-card-content">

                    <span>

                        Category 03

                    </span>

                    <h3>

                        Pre Workout

                    </h3>

                    <p>

                        High-energy formulas
                        to maximize focus,
                        endurance and intensity.

                    </p>

                    <Link
                        href="/products?category=Supplements"
                        className="supplement-btn"
                    >

                        Explore

                    </Link>

                </div>

            </div>

            {/* Recovery */}

            <div className="supplement-card recovery">

                <div className="supplement-card-overlay"></div>

                <div className="supplement-card-content">

                    <span>

                        Category 04

                    </span>

                    <h3>

                        Recovery & Vitamins

                    </h3>

                    <p>

                        Essential nutrients
                        that support recovery,
                        immunity and wellness.

                    </p>

                    <Link
                        href="/products?category=Supplements"
                        className="supplement-btn"
                    >

                        Explore

                    </Link>

                </div>

            </div>

        </div>

    </section>

    {/* FEATURED SUPPLEMENTS */}

    <section className="supplements-products">

        <div className="supplement-heading">

            <span>

                Premium Collection

            </span>

            <h2>

                Best Selling Supplements

            </h2>

            <p>

                Shop premium sports nutrition
                products trusted by athletes,
                bodybuilders and fitness
                enthusiasts across India.

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

    {/* WHY CHOOSE FITCART */}

    <section className="supplement-benefits">

        <div className="supplement-heading">

            <span>

                Why Choose FitCart

            </span>

            <h2>

                Premium Nutrition You
                Can Trust

            </h2>

            <p>

                Every supplement available at
                FitCart is selected for quality,
                safety and performance to help
                you achieve your fitness goals
                with confidence.

            </p>

        </div>

        <div className="benefits-grid">

            <div className="benefit-card">

                <div className="benefit-number">
                    01
                </div>

                <h3>

                    Authentic Products

                </h3>

                <p>

                    Shop genuine supplements
                    sourced from trusted brands
                    with guaranteed authenticity.

                </p>

            </div>

            <div className="benefit-card">

                <div className="benefit-number">
                    02
                </div>

                <h3>

                    Premium Ingredients

                </h3>

                <p>

                    High-quality ingredients
                    formulated to support
                    performance, recovery and
                    overall wellness.

                </p>

            </div>

            <div className="benefit-card">

                <div className="benefit-number">
                    03
                </div>

                <h3>

                    Expert Guidance

                </h3>

                <p>

                    Our team helps you choose
                    the right supplements based
                    on your fitness goals.

                </p>

            </div>

            <div className="benefit-card">

                <div className="benefit-number">
                    04
                </div>

                <h3>

                    Fast Delivery

                </h3>

                <p>

                    Quick shipping across India
                    with secure packaging and
                    reliable order tracking.

                </p>

            </div>

        </div>

    </section>

    {/* FITNESS GOALS */}

    <section className="fitness-goals">

        <div className="supplement-heading">

            <span>

                Shop By Goal

            </span>

            <h2>

                Choose Supplements
                Based On Your Goal

            </h2>

            <p>

                Every fitness journey is different.
                Find the right supplements that
                match your personal training
                goals and nutritional needs.

            </p>

        </div>

        <div className="goals-grid">

            <div className="goal-card">

                <h3>

                    💪 Muscle Building

                </h3>

                <p>

                    Whey Protein, Mass Gainers
                    and Creatine designed to
                    support muscle growth and
                    faster recovery.

                </p>

            </div>

            <div className="goal-card">

                <h3>

                    ⚡ Workout Performance

                </h3>

                <p>

                    Pre-workout formulas and
                    Creatine to improve energy,
                    endurance and training
                    intensity.

                </p>

            </div>

            <div className="goal-card">

                <h3>

                    🔥 Fat Loss

                </h3>

                <p>

                    Lean protein supplements
                    that help preserve muscle
                    while supporting calorie
                    controlled nutrition.

                </p>

            </div>

            <div className="goal-card">

                <h3>

                    🌿 Daily Wellness

                </h3>

                <p>

                    Multivitamins, minerals and
                    recovery supplements to
                    support immunity and
                    overall health.

                </p>

            </div>

        </div>

    </section>

    {/* HOW TO CHOOSE */}

    <section className="supplement-guide">

        <div className="supplement-heading">

            <span>

                Supplement Guide

            </span>

            <h2>

                How To Choose The
                Right Supplement

            </h2>

            <p>

                Not sure where to begin? Follow these
                simple steps to select supplements
                that match your fitness goals,
                workout routine and nutrition plan.

            </p>

        </div>

        <div className="guide-grid">

            <div className="guide-step">

                <div className="step-number">

                    01

                </div>

                <h3>

                    Define Your Goal

                </h3>

                <p>

                    Whether your objective is muscle
                    gain, fat loss, endurance or
                    recovery, start by identifying
                    your primary fitness goal.

                </p>

            </div>

            <div className="guide-step">

                <div className="step-number">

                    02

                </div>

                <h3>

                    Choose The Right Product

                </h3>

                <p>

                    Protein supports recovery,
                    Creatine improves strength,
                    while Pre-Workout helps
                    maximize training intensity.

                </p>

            </div>

            <div className="guide-step">

                <div className="step-number">

                    03

                </div>

                <h3>

                    Stay Consistent

                </h3>

                <p>

                    Supplements work best when
                    combined with proper nutrition,
                    regular workouts and adequate
                    sleep.

                </p>

            </div>

        </div>

    </section>

    {/* FINAL CTA */}

    <section className="supplement-cta">

        <div className="cta-content">

            <span>

                Ready To Transform Your Fitness?

            </span>

            <h2>

                Fuel Every Workout
                With Premium Nutrition

            </h2>

            <p>

                Whether your goal is building muscle,
                improving performance, enhancing recovery
                or maintaining overall wellness,
                FitCart offers premium supplements from
                trusted brands to help you achieve
                your fitness goals with confidence.

            </p>

            <div className="cta-buttons">

                <Link
                    href="/products?category=Supplements"
                    className="cta-primary"
                >

                    Shop Supplements

                </Link>

                <Link
                    href="/contact"
                    className="cta-secondary"
                >

                    Talk To An Expert

                </Link>

            </div>

        </div>

    </section>

    </main>

  );

}
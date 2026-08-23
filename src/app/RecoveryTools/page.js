import Link from "next/link";
import Image from "next/image";
import { getCollectionProducts } from "@/lib/shopify";
import "./page.css";

export const metadata = {
  title:
    "Recovery Tools | Foam Rollers, Massage Guns & Recovery Equipment | FitCart",

  description:
    "Shop premium recovery tools including massage guns, foam rollers, resistance bands, stretching equipment and muscle recovery accessories at FitCart.",

  keywords: [
    "recovery tools",
    "massage gun",
    "foam roller",
    "muscle recovery",
    "stretching equipment",
    "fitness recovery",
    "gym recovery",
    "fitcart"
  ],

  alternates: {
    canonical:
      "https://fitcart.in/RecoveryTools",
  },

  openGraph: {
    title:
      "Recovery Tools | FitCart",

    description:
      "Premium recovery tools for faster muscle recovery, flexibility and performance.",

    url:
      "https://fitcart.in/RecoveryTools",

    siteName:
      "FitCart",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Recovery Tools | FitCart",

    description:
      "Massage guns, foam rollers and premium recovery accessories.",
  },
};

export default async function RecoveryToolsPage() {

      const products =
        await getCollectionProducts(
            "recovery-tools"
        );

  return (

    <main className="recovery-page">

      <section className="recovery-hero">

        <div className="recovery-overlay"></div>

        <div className="recovery-content">

          <span className="hero-tag">

            Premium Recovery Collection

          </span>

          <h1>

            Recover Faster

            <span>

              Perform Better

            </span>

          </h1>

          <p>

            Support muscle recovery, reduce
            soreness and improve flexibility
            with premium massage guns, foam
            rollers, stretching accessories,
            resistance bands and recovery
            essentials trusted by athletes.

          </p>

          <div className="hero-buttons">

            <Link
              href="/products?category=Recovery Tools"
              className="primary-btn"
            >

              Explore Recovery Tools

            </Link>

            <Link
              href="/contact"
              className="secondary-btn"
            >

              Talk To Our Experts

            </Link>

          </div>

        </div>

      </section>

      {/* SHOP BY RECOVERY CATEGORY */}

    <section className="recovery-category-section">

        <div className="recovery-heading">

            <span>

                Shop By Recovery Category

            </span>

            <h2>

                Recover Smarter,
                Perform Stronger

            </h2>

            <p>

                Discover premium recovery tools
                designed to reduce muscle soreness,
                improve flexibility and accelerate
                post-workout recovery for every
                fitness level.

            </p>

        </div>

        <div className="recovery-grid">

            {/* Massage Guns */}

            <div className="recovery-card massage">

                <div className="recovery-card-overlay"></div>

                <div className="recovery-card-content">

                    <span>

                        Category 01

                    </span>

                    <h3>

                        Massage Guns

                    </h3>

                    <p>

                        Relieve muscle tension and
                        accelerate recovery with
                        deep tissue massage therapy.

                    </p>

                    <Link
                        href="/products"
                        className="recovery-btn"
                    >

                        Explore

                    </Link>

                </div>

            </div>

            {/* Foam Rollers */}

            <div className="recovery-card roller">

                <div className="recovery-card-overlay"></div>

                <div className="recovery-card-content">

                    <span>

                        Category 02

                    </span>

                    <h3>

                        Foam Rollers

                    </h3>

                    <p>

                        Improve flexibility,
                        mobility and muscle
                        recovery after workouts.

                    </p>

                    <Link
                        href="/products?category=Recovery Tools"
                        className="recovery-btn"
                    >

                        Explore

                    </Link>

                </div>

            </div>

            {/* Resistance Bands */}

            <div className="recovery-card bands">

                <div className="recovery-card-overlay"></div>

                <div className="recovery-card-content">

                    <span>

                        Category 03

                    </span>

                    <h3>

                        Resistance Bands

                    </h3>

                    <p>

                        Perfect for stretching,
                        rehabilitation and
                        mobility training.

                    </p>

                    <Link
                        href="/products?category=Recovery Tools"
                        className="recovery-btn"
                    >

                        Explore

                    </Link>

                </div>

            </div>

            {/* Recovery Accessories */}

            <div className="recovery-card accessories">

                <div className="recovery-card-overlay"></div>

                <div className="recovery-card-content">

                    <span>

                        Category 04

                    </span>

                    <h3>

                        Recovery Accessories

                    </h3>

                    <p>

                        Mobility balls, stretching
                        straps and recovery tools
                        for complete muscle care.

                    </p>

                    <Link
                        href="/products?category=Recovery Tools"
                        className="recovery-btn"
                    >

                        Explore

                    </Link>

                </div>

            </div>

        </div>

    </section>

    {/* FEATURED RECOVERY PRODUCTS */}

    <section className="recovery-products">

        <div className="recovery-heading">

            <span>

                Premium Collection

            </span>

            <h2>

                Best Selling Recovery Tools

            </h2>

            <p>

                Discover premium recovery
                equipment trusted by athletes,
                fitness enthusiasts and
                professionals for faster
                muscle recovery.

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

    {/* WHY RECOVERY MATTERS */}

    <section className="recovery-benefits">

        <div className="recovery-heading">

            <span>

                Why Recovery Matters

            </span>

            <h2>

                Better Recovery,
                Better Performance

            </h2>

            <p>

                Recovery is just as important as
                training. Proper recovery helps
                your muscles rebuild, reduces
                fatigue and prepares you for
                your next workout.

            </p>

        </div>

        <div className="benefits-grid">

            <div className="benefit-card">

                <div className="benefit-number">

                    01

                </div>

                <h3>

                    Reduce Muscle Soreness

                </h3>

                <p>

                    Massage guns and foam rollers
                    help relieve muscle tightness
                    and reduce post-workout pain.

                </p>

            </div>

            <div className="benefit-card">

                <div className="benefit-number">

                    02

                </div>

                <h3>

                    Improve Flexibility

                </h3>

                <p>

                    Regular stretching and mobility
                    work improves flexibility,
                    movement quality and posture.

                </p>

            </div>

            <div className="benefit-card">

                <div className="benefit-number">

                    03

                </div>

                <h3>

                    Faster Recovery

                </h3>

                <p>

                    Recover more efficiently so you
                    can train consistently and
                    achieve better long-term results.

                </p>

            </div>

            <div className="benefit-card">

                <div className="benefit-number">

                    04

                </div>

                <h3>

                    Prevent Injuries

                </h3>

                <p>

                    Proper recovery routines reduce
                    the risk of overuse injuries
                    and improve overall performance.

                </p>

            </div>

        </div>

    </section>

    {/* RECOVERY CTA */}

    <section className="recovery-cta">

        <div className="cta-content">

            <span>

                Train Hard. Recover Smarter.

            </span>

            <h2>

                Give Your Muscles
                The Recovery They Deserve

            </h2>

            <p>

                Explore premium recovery tools
                trusted by athletes, fitness
                enthusiasts and professionals to
                reduce soreness, improve mobility
                and maximize every workout.

            </p>

            <div className="cta-buttons">

                <Link
                    href="/products?category=Recovery Tools"
                    className="cta-primary"
                >

                    Shop Recovery Tools

                </Link>

                <Link
                    href="/contact"
                    className="cta-secondary"
                >

                    Contact Our Experts

                </Link>

            </div>

        </div>

    </section>

    </main>

  );

}
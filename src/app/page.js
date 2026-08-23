import Link from "next/link";
import "./page.css";
import { getProducts } from "@/lib/shopify";
import Image from "next/image";
import { metadata } from "./metadata";

export { metadata };

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="home-page">

      <section className="hero">

        <div className="hero-overlay"></div>
 
        <div className="hero-content">

          <span className="hero-tag">
            India&apos;s Premium Fitness Marketplace
          </span>

          <h1>
            Elevate Your
            <span>Fitness Journey</span>
          </h1>

          <p>
            Shop premium fitness equipment, gym accessories,
            supplements and recovery tools designed for serious
            athletes and fitness enthusiasts across India.
          </p>

          <div className="hero-buttons">

            <Link
              href="/products"
              className="primary-btn"
            >
              Shop Now
            </Link>

            <Link
              href="/collections"
              className="secondary-btn"
            >
              Explore Collections
            </Link>

          </div>

        </div>

      </section>

      {/* =========================
          SHOP BY CATEGORY
      ========================= */}

      <section className="category-section">

        <div className="section-heading">

          <span>Shop By Category</span>

          <h2>
            Everything You Need
            For Peak Performance
          </h2>

        </div>

        {/* Strength */}

        <div className="category-card strength-category">

          <div className="category-overlay"></div>

          <div className="category-content">

            <span className="category-tag">
              Category 01
            </span>

            <h2>
              Strength Equipment
            </h2>

            <p>
              Premium dumbbells, barbells,
              benches, squat racks and
              professional strength training
              equipment.
            </p>

            <Link href="/collections" className="category-btn">
              Explore Category
            </Link>

          </div>

        </div>

        {/* Cardio */}

        <div className="category-card cardio-category reverse">

          <div className="category-overlay"></div>

          <div className="category-content">

            <span className="category-tag">
              Category 02
            </span>

            <h2>
              Cardio Equipment
            </h2>

            <p>
              Treadmills, exercise bikes,
              rowing machines and cardio
              equipment built to maximize
              endurance and performance.
            </p>

            <Link href="/collections" className="category-btn">
              Explore Category
            </Link>

          </div>

        </div>

        {/* Supplements */}

        <div className="category-card supplement-category">

          <div className="category-overlay"></div>

          <div className="category-content">

            <span className="category-tag">
              Category 03
            </span>

            <h2>
              Supplements
            </h2>

            <p>
              Protein powders, creatine,
              pre-workouts and nutrition
              supplements from trusted
              fitness brands.
            </p>

            <Link href="/collections" className="category-btn">
              Explore Category
            </Link>

          </div>

        </div>

        {/* Recovery */}

        <div className="category-card recovery-category reverse">

          <div className="category-overlay"></div>

          <div className="category-content">

            <span className="category-tag">
              Category 04
            </span>

            <h2>
              Recovery Tools
            </h2>

            <p>
              Foam rollers, massage guns,
              stretching equipment and
              recovery essentials for faster
              muscle recovery.
            </p>

            <Link href="/collections" className="category-btn">
              Explore Category
            </Link>

          </div>

        </div>

      </section>

      {/* FEATURED PRODUCTS */}

      <section className="featured-products">

        <div className="section-heading">

          <span>Featured Products</span>

          <h2>
            Best Selling Products
          </h2>

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
                  $
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
                  {node.description.slice(0, 80)}...
                </p>
                <Link
                  href={`/products/${node.handle}`}
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

      <section className="why-fitcart">

        <div className="section-heading">

          <span>Why Choose FitCart</span>

          <h2>
            Built For Athletes.
            Trusted By Fitness Enthusiasts.
          </h2>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <div className="why-number">
              01
            </div>

            <h3>
              Premium Quality Products
            </h3>

            <p>
              Carefully selected fitness equipment,
              supplements and recovery tools from
              trusted brands known for quality
              and performance.
            </p>

          </div>

          <div className="why-card">

            <div className="why-number">
              02
            </div>

            <h3>
              Secure Shopping Experience
            </h3>

            <p>
              Safe checkout process with trusted
              payment solutions ensuring a smooth
              and reliable shopping experience.
            </p>

          </div>

          <div className="why-card">

            <div className="why-number">
              03
            </div>

            <h3>
              Fast Nationwide Delivery
            </h3>

            <p>
              Efficient shipping network designed
              to deliver your fitness essentials
              quickly across India.
            </p>

          </div>

          <div className="why-card">

            <div className="why-number">
              04
            </div>

            <h3>
              Performance Driven Selection
            </h3>

            <p>
              Every product is chosen with a focus
              on helping athletes improve strength,
              endurance and recovery.
            </p>

          </div>

        </div>

      </section>

      {/* SHOP BY GOALS */}

      <section className="goals-section">

        <div className="section-heading">
          <span>Shop By Goal</span>
          <h2>
            Find Products Based On
            Your Fitness Objective
          </h2>
        </div>

        <div className="goals-grid">

          <div className="goal-card"> 
            <h3>Build Muscle</h3>
            <p>
              Strength equipment, protein
              supplements and muscle building
              essentials.
            </p>
          </div>

          <div className="goal-card">
            <h3>Weight Loss</h3>
            <p>
              Cardio equipment and recovery
              products designed to support
              fat loss goals.
            </p>
          </div>

          <div className="goal-card">
            <h3>Improve Endurance</h3>
            <p>
              Performance focused equipment
              for athletes and runners.
            </p>
          </div>

          <div className="goal-card">
            <h3>Faster Recovery</h3>
            <p>
              Recovery tools and accessories
              designed for muscle recovery.
            </p>
          </div>

        </div>

      </section>

      {/* STATISTICS */}

      <section className="stats-section">

        <div className="stats-grid">

          <div className="stat-card">
            <h3>10K+</h3>
            <p>Fitness Enthusiasts</p>
          </div>

          <div className="stat-card">
            <h3>500+</h3>
            <p>Products Available</p>
          </div>

          <div className="stat-card">
            <h3>100+</h3>
            <p>Cities Served</p>
          </div>

          <div className="stat-card">
            <h3>4.9</h3>
            <p>Average Rating</p>
          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="testimonials-section">

        <div className="section-heading">
          <span>Customer Reviews</span>
          <h2>
            What Our Customers Say
          </h2>
        </div>

        <div className="testimonials-grid">

          <div className="testimonial-card">
            <p>
              The product quality exceeded my
              expectations. Fast delivery and
              premium packaging.
            </p>

            <h4>Rahul Sharma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              Genuine supplements and excellent
              customer support throughout the
              buying process.
            </p>

            <h4>Aman Verma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              One of the best fitness ecommerce
              experiences I have had online.
            </p>

            <h4>Karan Patel</h4>
          </div>

        </div>

      </section>

      {/* NEWSLETTER */}

      <section className="newsletter-section">

        <div className="newsletter-content">

          <span>Stay Updated</span>

          <h2>
            Get Fitness Tips, New Launches
            And Exclusive Offers
          </h2>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email address"
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>

      </section>
    </div>
  );
}
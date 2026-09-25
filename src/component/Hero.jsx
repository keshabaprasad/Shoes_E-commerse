const HeroSection = () => {
  return (
    <section>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="hero-btn">
            <button id="primary-btn">Shop Now </button>
            <button id="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
              <img src="/amazon.png" alt="amazon-logo" />
              <img src="/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.png" alt="hero-image" />
        </div>
      </main>
    </section>
  );
};
export default HeroSection;

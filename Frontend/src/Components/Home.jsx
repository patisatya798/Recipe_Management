import "./Home.css";
import About from "./About";
import Contact from "./Contact"
function Home() {
  return (
    <>
      <div className="hero">

        <div className="hero-image"></div>

        <div className="hero-content">
          <h2>Taste the Magic of Homemade Food</h2>
          <p>From quick bites to gourmet meals, find recipes you'll love to cook!</p>

          <button className="hero-btn">GET THE RECIPE →</button>
        </div>

      </div>

      <About />
      <Contact />
    </>
  );
}

export default Home;
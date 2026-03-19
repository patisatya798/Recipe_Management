import "./About.css";
import recipe1 from "../Images/recipe1.jpg";


function About() {
  return (
    <>
    <div className="about">

      <div className="about-text">
        <h1>About RecipeHub</h1>
        <p>
          Welcome to RecipeHub! Discover delicious recipes, share your own creations,
          and explore a world of flavors from different cuisines.
        </p>

        <p>
          Whether you're a beginner or a professional chef, our platform helps you
          cook amazing dishes with ease.
        </p>

        <button>Learn More</button>
      </div>
      <div className="about-image">
        <img
          src={recipe1}
          alt="food"
        />
      </div>

    </div>
    </>
  );
}

export default About; 
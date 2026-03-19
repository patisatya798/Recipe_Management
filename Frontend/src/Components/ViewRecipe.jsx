import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);
 

  useEffect(() => {
    axios.get("http://localhost:5000/recipes")
      .then(res => {
        setRecipes(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      });
  }, []);

 

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Recipes</h2>

      {/* {recipes.length === 0 && (
        <p className="text-center">No recipes found</p>
      )} */}

      <div className="row">
        {recipes.map((r, i) => (
          <div className="col-md-4" key={i}>
            <div className="card mb-4 shadow">
              <img
                src={`http://localhost:5000/uploads/${r.image}`}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt={r.name}
              />
              <div className="card-body">
                <h5 className="card-title">{r.name}</h5>
                <p className="card-text">{r.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewRecipes;
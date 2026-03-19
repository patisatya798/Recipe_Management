import { useState } from "react";
import axios from "axios";
import './Upload.css'

function UploadRecipe() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    await axios.post("http://localhost:5000/upload", formData);
    alert("Recipe Uploaded!");
  };

return (
  <div className="form-container">
    <form className="form-box" onSubmit={handleSubmit}>
      <h2>Upload Recipe</h2>

      <input
        type="text"
        placeholder="Recipe Name"
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Upload</button>
    </form>
  </div>
);
}

export default UploadRecipe;
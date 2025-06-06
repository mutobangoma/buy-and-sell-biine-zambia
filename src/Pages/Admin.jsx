// src/pages/Admin.jsx
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

function Admin() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "Electronics",
    contact: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (image) {
        if (image.size > 5 * 1024 * 1024) {
          alert("Image must be less than 5MB.");
          setLoading(false);
          return;
        }

        const imageRef = ref(storage, `ads/${uuidv4()}-${image.name}`);
        const snapshot = await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, "ads"), {
        ...formData,
        price: parseFloat(formData.price),
        imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Ad added successfully!");
      setFormData({
        title: "",
        description: "",
        price: "",
        location: "",
        category: "Electronics",
        contact: "",
      });
      setImage(null);
    } catch (err) {
      console.error("Error adding ad:", err);
      alert("Error submitting ad.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin: Add a New Ad</h1>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        >
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Vehicles</option>
          <option>Jobs</option>
          <option>Real Estate</option>
          <option>Services</option>
          <option>Other</option>
        </select>
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Add Ad"}
        </button>
      </form>
    </div>
  );
}

export default Admin;

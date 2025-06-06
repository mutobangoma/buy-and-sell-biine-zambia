import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage, auth } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function PostAd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [user, authLoading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
  if (!authLoading && !user) {
    navigate("/login");
  }
}, [user, authLoading, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image must be under 5MB.");
        return;
      }
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let imageUrl = "";

    try {
      // Upload image if present
      if (image) {
        const imageRef = ref(storage, `ads/${uuidv4()}-${image.name}`);
        const snapshot = await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, "ads"), {
        ...form,
        price: Number(form.price),
        imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Ad posted successfully!");
      setForm({
        title: "",
        description: "",
        price: "",
        location: "",
        category: "Electronics",
        contact: "",
      });
      setImage(null);
      navigate("/");
    } catch (error) {
      console.error("Error posting ad:", error);
      alert("Failed to post ad.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post a New Ad</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="h-40 object-contain border rounded"
          />
        )}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <select
          name="category"
          value={form.category}
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
          value={form.contact}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className={`p-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Posting..." : "Post Ad"}
        </button>
      </form>
    </div>
  );
}

export default PostAd;

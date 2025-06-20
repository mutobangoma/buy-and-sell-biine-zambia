import { useState } from "react";
import { db, storage, auth } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export default function PostAdForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    location: "",
    price: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageRef = ref(storage, `ads/${uuidv4()}-${formData.image.name}`);
      await uploadBytes(imageRef, formData.image);
      const imageUrl = await getDownloadURL(imageRef);

      const adData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        subcategory: formData.subcategory,
        location: formData.location,
        price: Number(formData.price),
        imageUrl,
        createdAt: Timestamp.now(),
        userId: auth.currentUser?.uid || null,
      };

      await addDoc(collection(db, "ads"), adData);
      alert("Ad posted successfully!");
      setFormData({
        title: "",
        description: "",
        category: "",
        subcategory: "",
        location: "",
        price: "",
        image: null,
      });
    } catch (error) {
      console.error("Error posting ad:", error);
      alert("Failed to post ad. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white shadow rounded">
      <input name="title" placeholder="Ad Title" required value={formData.title} onChange={handleChange} className="w-full mb-3" />
      <textarea name="description" placeholder="Description" required value={formData.description} onChange={handleChange} className="w-full mb-3" />
      <input name="category" placeholder="Category" required value={formData.category} onChange={handleChange} className="w-full mb-3" />
      <input name="subcategory" placeholder="Subcategory" value={formData.subcategory} onChange={handleChange} className="w-full mb-3" />
      <input name="location" placeholder="Location" required value={formData.location} onChange={handleChange} className="w-full mb-3" />
      <input name="price" placeholder="Price" required type="number" value={formData.price} onChange={handleChange} className="w-full mb-3" />
      <input type="file" name="image" accept="image/*" required onChange={handleChange} className="w-full mb-3" />
      <button type="submit" disabled={loading} className="bg-green-600 text-white px-4 py-2 rounded">
        {loading ? "Posting..." : "Post Ad"}
      </button>
    </form>
  );
}

import { useState } from "react";
import { auth, db, storage } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function PostAd() {
  const [user] = useAuthState(auth);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    image: null,
  });
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState("");

  if (!user) {
    return (
      <div className="p-4 max-w-lg mx-auto text-center">
        <h1 className="text-xl font-bold mb-2">Login Required</h1>
        <p className="text-gray-700">You must be logged in to post an ad.</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = "";
      if (form.image) {
        const imageRef = ref(storage, `ads/${Date.now()}-${form.image.name}`);
        await uploadBytes(imageRef, form.image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const now = Timestamp.now();
      const expiresAt = Timestamp.fromDate(
        new Date(now.toDate().getTime() + 5 * 24 * 60 * 60 * 1000) // +5 days
      );

      await addDoc(collection(db, "ads"), {
        userId: user.uid,
        title: form.title,
        description: form.description,
        price: form.price,
        category: form.category,
        location: form.location,
        imageUrl,
        createdAt: now,
        expiresAt,
        featured: false,
      });

      setSuccess("✅ Ad posted successfully! It will expire in 5 days.");
      setForm({
        title: "",
        description: "",
        price: "",
        category: "",
        location: "",
        image: null,
      });
    } catch (err) {
      console.error("❌ Failed to post ad:", err);
      alert("Failed to post ad. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Post a New Ad</h1>

      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Ad title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Cars)"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          disabled={uploading}
        >
          {uploading ? "Posting..." : "Post Ad"}
        </button>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function CategoryAdmin() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [subcategories, setSubcategories] = useState("");
  const [promoted, setPromoted] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const snapshot = await getDocs(collection(db, "categories"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    const newCat = {
      name,
      promoted,
      subcategories: subcategories.split(",").map((s) => s.trim()),
    };
    const docRef = await addDoc(collection(db, "categories"), newCat);
    setCategories([...categories, { id: docRef.id, ...newCat }]);
    setName("");
    setSubcategories("");
    setPromoted(false);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "categories", id));
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const togglePromoted = async (cat) => {
    const updated = { ...cat, promoted: !cat.promoted };
    await updateDoc(doc(db, "categories", cat.id), { promoted: updated.promoted });
    setCategories(categories.map((c) => (c.id === cat.id ? updated : c)));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Category Admin Panel</h2>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Category</h3>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Subcategories (comma separated)"
          value={subcategories}
          onChange={(e) => setSubcategories(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={promoted}
            onChange={() => setPromoted(!promoted)}
          />
          Promote category
        </label>
        <button
          onClick={handleAddCategory}
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Category
        </button>
      </div>

      <div className="space-y-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-4 border rounded flex justify-between items-start"
          >
            <div>
              <h4 className="font-bold">{cat.name}</h4>
              <p className="text-sm text-gray-600">
                Subcategories: {cat.subcategories?.join(", ") || "None"}
              </p>
              <p className="text-sm">
                Promoted: {cat.promoted ? "✅" : "❌"}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => togglePromoted(cat)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Toggle Promote
              </button>
              <button
                onClick={() => handleDelete(cat.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryAdmin;

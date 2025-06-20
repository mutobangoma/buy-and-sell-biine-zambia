// src/pages/Categories.jsx
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase' // adjust path if needed

function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'categories'))
        const results = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setCategories(results)
      } catch (err) {
        console.error('❌ Error fetching categories:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div>
      <h2>Categories</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {categories.map(cat => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Categories

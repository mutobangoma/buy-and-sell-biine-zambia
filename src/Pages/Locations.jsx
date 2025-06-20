// src/pages/Locations.jsx
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase' // adjust path if needed

function Locations() {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'locations'))
        const results = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setLocations(results)
      } catch (err) {
        console.error('❌ Error fetching Locations:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchLocations()
  }, [])

  return (
    <div>
      <h2>Locations</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {locations.map(cat => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Locations

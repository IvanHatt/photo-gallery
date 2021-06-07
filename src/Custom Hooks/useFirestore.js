import { useState, useEffect } from 'react'
import { projectFirestore } from '../Backend/config'

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        let documents = []
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id })
        })
        setDocs(documents)
      })

    return () => unsub()
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection])

  return { docs }
}

export default useFirestore

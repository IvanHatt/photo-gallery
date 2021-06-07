import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../Backend/config'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // references - see firebase doc
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('images')

    // put method uploads a file obj - see firebase doc "Monitor Upload Progress"
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        //percentaje of upload progress
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(percentage)
      },
      (err) => {
        setError(err)
      },
      async () => {
        const url = await storageRef.getDownloadURL()
        const createdAt = timestamp()
        //add a file to a collection in the database
        await collectionRef.add({ url: url, createdAt: createdAt })
        setUrl(url)
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage

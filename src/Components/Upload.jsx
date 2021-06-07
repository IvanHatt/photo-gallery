import React, { useState } from 'react'

const Upload = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const validFile = ['image/png', 'image/jpeg']

  const handleChange = (e) => {
    let selectedFile = e.target.files[0]

    if (selectedFile && validFile.includes(selectedFile.type)) {
      setFile(selectedFile)
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file (png or jpg)')
    }
  }

  return (
    <form>
      <input type='file' onChange={handleChange} />
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  )
}

export default Upload

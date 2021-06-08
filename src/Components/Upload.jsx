import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

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
      <label>
        <input type='file' onChange={handleChange} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div> Uploading ...</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default Upload

import { useState } from 'react'
import './index.css'
import Header from './Components/Header'
import Upload from './Components/Upload'
import ImageGrid from './Components/ImageGrid'
import Modal from './Components/Modal'

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='App'>
      <Header />
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  )
}

export default App

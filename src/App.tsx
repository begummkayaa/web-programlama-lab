import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        {/* Vite ve React logolarını yan yana tutuyoruz */}
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      
      <h1>Web Tasarımı ve Programlama</h1>
      <h2>LAB-1</h2>

      <div className="card">
        <p><strong>Ad Soyad:</strong> Begüm Kaya</p>
        <p><strong>Öğrenci No:</strong> 235542018</p>
      </div>

      <p className="read-the-docs">
        Vite + React + TypeScript ile geliştirilmiştir.
      </p>
    </div>
  )
}

export default App
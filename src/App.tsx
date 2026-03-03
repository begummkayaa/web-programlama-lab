import './App.css'

function App() {
  return (
    <>
      {/* Erişilebilirlik: Ana içeriğe atla linki (CSS ile temaya uyarlandı) */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <span className="site-title">Begüm Kaya</span>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Ana içerik alanı - 'app-container' class'ı ile sarmalayabiliriz veya direkt main üzerinden gidebiliriz */}
      <main id="main-content">

        {/* Hakkımda Bölümü: Görseldeki yumuşak geçişleri yansıtacak */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            {/* Profil fotoğrafı alanı - alinti.PNG'yi yuvarlak ve çerçeveli kullanıyoruz */}
            <img src="https://ui-avatars.com/api/?name=Begum+Kaya&background=8EA68B&color=fff&size=180" alt="Begüm Kaya profil fotoğrafı" />
            <figcaption style={{ color: 'var(--sage-green)', fontWeight: 500 }}>
              Yazılım Mühendisliği Öğrencisi
            </figcaption>
          </figure>
          <p>
            Merhaba! Ben <strong>Begüm Kaya</strong>, 235542018 numaralı öğrenciyim. 
            Web tasarımı ve programlama alanında, görsel estetik ile kodun gücünü birleştirmeyi seviyorum.
          </p>
          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git</li>
          </ul>
        </section>

        {/* Projeler Bölümü: Temiz kart yapısı */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <h3>Web Programlama Lab</h3>
              <p>Vite + React + TypeScript ile geliştirilmiş, minimalist ve sanatsal bir portföy projesi.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
              </ul>
            </article>
            
            <article className="project-card">
              <h3>Semantik HTML Projesi</h3>
              <p>Erişilebilirlik ilkelerine tam uyumlu, temiz kod yapısına sahip web sayfası.</p>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </article>
          </div>
        </section>

        {/* İletişim Bölümü: Pastel tonlarda form yapısı */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Bana Mesaj Gönderin</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Adınız ve Soyadınız"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ornek@mail.com"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Size nasıl yardımcı olabilirim?"
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <div style={{ textAlign: 'center' }}>
                 <button type="submit">Mesajı Gönder</button>
              </div>
            </fieldset>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2025 Begüm Kaya. Sevgiyle tasarlandı.</p>
      </footer>
    </>
  )
}

export default App
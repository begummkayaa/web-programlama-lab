import { useState } from 'react';
import UIKit from './pages/UIKit';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

function App() {
  const [page, setPage] = useState<'portfolio' | 'uikit'>('portfolio');
  const [showAlert, setShowAlert] = useState(true);

  // UI Kit sayfası görünümü
  if (page === 'uikit') {
    return (
      <div className="min-h-screen bg-(--color-bg) text-(--color-text-main) transition-colors duration-300">
        <div className="fixed top-4 left-4 z-50">
          <Button size="sm" variant="ghost" onClick={() => setPage('portfolio')}>
            ← Portföye Dön
          </Button>
        </div>
        <UIKit />
      </div>
    );
  }

  return (
    /* Ana kapsayıcı: bg-(--color-bg) kullanarak index.css'deki değişkeni çeker */
    <div className="min-h-screen bg-(--color-bg) text-(--color-text-main) transition-colors duration-300 selection:bg-(--color-coral)/30">

      {/* Erişilebilirlik Linki */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-(--color-coral) text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      {/* Header: Dark modda sınır rengi ve arka plan otomatik değişir */}
      <header className="sticky top-0 z-40 bg-(--color-bg)/80 backdrop-blur-md border-b border-(--color-sage)/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xl font-bold text-(--color-coral)">Begüm Kaya</span>
          
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              {['hakkimda', 'projeler', 'iletisim'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    className="px-3 py-1 rounded-md capitalize hover:bg-(--color-coral)/10 transition-colors"
                  >
                    {item === 'hakkimda' ? 'Hakkımda' : item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-2">
            {/* Tema Değiştirici Buton */}
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="bg-black/5 dark:bg-white/10 p-2 rounded-full hover:scale-110 transition-all active:scale-95"
              aria-label="Tema değiştir"
            >
              <span className="dark:hidden">🌙</span>
              <span className="hidden dark:inline">☀️</span>
            </button>
            
            <Button size="sm" variant="secondary" onClick={() => setPage('uikit')}>
              UI Kit
            </Button>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkımda Section */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="https://ui-avatars.com/api/?name=Begum+Kaya&background=8EA68B&color=fff&size=180"
                alt="Begüm Kaya"
                className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-(--color-sage)/20"
              />
              <figcaption className="text-center text-sm text-(--color-sage) font-medium mt-2">
                Yazılım Mühendisliği Öğrencisi
              </figcaption>
            </figure>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-center md:text-left dark:text-white">
                Hakkımda
              </h2>
              <p className="opacity-80 mb-4 leading-relaxed">
                Merhaba! Ben <strong>Begüm Kaya</strong>, 235542018 numaralı öğrenciyim.
                Web tasarımı ve programlama alanında, görsel estetik ile kodun gücünü birleştirmeyi seviyorum.
              </p>
              
              {showAlert && (
                <div className="mb-4">
                  <Alert variant="info" dismissible onDismiss={() => setShowAlert(false)}>
                    Portföyüm sürekli güncellenmektedir!
                  </Alert>
                </div>
              )}
              
              <ul className="flex flex-wrap gap-2" role="list">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Git'].map(skill => (
                  <li key={skill} className="bg-(--color-sage) text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler Section: bg-(--color-coral)/5 ile hafif bir ton veriyoruz */}
        <section id="projeler" className="py-16 px-4 bg-(--color-coral)/5 dark:bg-white/5 transition-colors">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" title="Web Programlama Lab">
                Vite + React + TypeScript ile geliştirilmiş minimalist portföy projesi.
              </Card>
              <Card variant="outlined" title="Semantik HTML Projesi">
                Erişilebilirlik ilkelerine tam uyumlu, temiz kod yapısına sahip web sayfası.
              </Card>
              <Card variant="filled" title="Tailwind UI Kit" footer={<Button size="sm">Görüntüle</Button>}>
                Yeniden kullanılabilir component kütüphanesi.
              </Card>
            </div>
          </div>
        </section>

        {/* İletişim Section */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
              İletişim
            </h2>
            <div className="space-y-4">
              <Input id="name" label="Ad Soyad" placeholder="Adınız ve Soyadınız" required />
              <Input id="email" label="E-posta" type="email" placeholder="ornek@mail.com" required />
              
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium opacity-90">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Size nasıl yardımcı olabilirim?"
                  className="w-full px-3 py-2 rounded-lg border border-(--color-sage) focus:ring-2 focus:ring-(--color-coral) focus:outline-none bg-white dark:bg-gray-800 transition-colors"
                />
              </div>
              
              <Button variant="primary" size="lg" className="w-full">
                Mesajı Gönder
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t border-(--color-sage)/20 text-center opacity-60 text-sm">
        <p>&copy; 2026 Begüm Kaya. Sevgiyle tasarlandı.</p>
      </footer>

    </div>
  );
}

export default App;
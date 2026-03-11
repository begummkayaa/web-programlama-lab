import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-gray-950 p-8 space-y-12">

      {/* Başlık */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-[#4A4A4A] dark:text-white">
          UI Kit
        </h1>
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="bg-gray-200 dark:bg-gray-700 text-[#4A4A4A] dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Tema değiştir"
        >
          <span className="dark:hidden">🌙</span>
          <span className="hidden dark:inline">☀️</span>
        </button>
      </div>

      {/* BUTTONS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-[#8EA68B] pb-2 text-[#4A4A4A] dark:text-white">
          Buttons
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" disabled className="opacity-50 cursor-not-allowed">
            Disabled
          </Button>
        </div>
      </section>

      {/* INPUTS */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b border-[#8EA68B] pb-2 text-[#4A4A4A] dark:text-white">
          Inputs
        </h2>
        <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
        <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" />
        <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
        <Input id="ui-dis" label="Disabled" disabled value="Düzenlenemez" />
      </section>

      {/* CARDS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-[#8EA68B] pb-2 text-[#4A4A4A] dark:text-white">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated" title="Elevated Card">
            Gölge ile yükseltilmiş kart. Hover'da gölge artar.
          </Card>
          <Card variant="outlined" title="Outlined Card">
            Çerçeveli kart. Sage yeşili border ile.
          </Card>
          <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detay</Button>}>
            Dolgulu arka plan ve footer ile kart.
          </Card>
        </div>
      </section>

      {/* ALERTS */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold border-b border-[#8EA68B] pb-2 text-[#4A4A4A] dark:text-white">
          Alerts
        </h2>
        <Alert variant="info" title="Bilgi">
          Bilgilendirme mesajı.
        </Alert>
        <Alert variant="success" title="Başarılı">
          İşlem tamamlandı!
        </Alert>
        <Alert variant="warning" title="Uyarı">
          Dikkat edilmesi gereken durum.
        </Alert>
        {showAlert && (
          <Alert variant="error" title="Hata" dismissible onDismiss={() => setShowAlert(false)}>
            Bir hata oluştu. Tekrar deneyin.
          </Alert>
        )}
      </section>

    </div>
  );
}
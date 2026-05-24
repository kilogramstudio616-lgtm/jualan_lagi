import { useState } from 'react';
import { Header } from './components/Header';
import { MenuPanel } from './components/MenuPanel';
import { Dashboard } from './components/Dashboard';
import { Pesanan } from './components/Pesanan';
import { Produk } from './components/Produk';
import { Riwayat } from './components/Riwayat';
import { Setting } from './components/Setting';
import { Informasi } from './components/Informasi';
import { Pelanggan } from './components/Pelanggan';
import { Kasir } from './components/Kasir';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'pesanan':
        return <Pesanan />;
      case 'produk':
        return <Produk />;
      case 'riwayat':
        return <Riwayat />;
      case 'setting':
        return <Setting />;
      case 'informasi':
        return <Informasi />;
      case 'pelanggan':
        return <Pelanggan />;
      case 'kasir':
        return <Kasir />;
      case 'pengeluaran':
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <div className="text-2xl text-white mb-2">
                Halaman Pengeluaran
              </div>
              <div className="text-lg text-white/60">
                Fitur dalam pengembangan
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="size-full flex flex-col overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGNhbXBpbmclMjBvdXRkb29yJTIwYWR2ZW50dXJlJTIwdGVudCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Nzk1MDc2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          filter: 'blur(3px) brightness(0.6)',
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <Header />

        <div className="flex-1 flex overflow-hidden">
          <div className="w-1/2 overflow-hidden">{renderContent()}</div>

          <div className="w-1/2 border-l border-white/20">
            <MenuPanel activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
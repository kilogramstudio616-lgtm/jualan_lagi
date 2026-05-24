import { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Clock, Package } from 'lucide-react';

export function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promos = [
    {
      title: 'Promo Camping Weekend',
      description: 'Diskon 20% untuk sewa tenda 2 hari lebih',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Paket Hemat Carrier',
      description: 'Gratis sleeping bag untuk sewa carrier',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Diskon Member',
      description: 'Cashback 15% untuk member setia',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const stockItems = [
    { name: 'Tenda', icon: '🏕️', available: 8, total: 12 },
    { name: 'Carrier', icon: '🎒', available: 12, total: 15 },
    { name: 'Sleeping Bag', icon: '🛌', available: 15, total: 20 },
    { name: 'Cooking Set', icon: '🍳', available: 6, total: 10 },
  ];

  const recentCustomers = [
    {
      name: 'Budi Santoso',
      phone: '081234567890',
      products: 'Tenda Dome 4P, Sleeping Bag',
      time: '2 jam lalu',
    },
    {
      name: 'Siti Aminah',
      phone: '081298765432',
      products: 'Carrier 70L, Jaket Gunung',
      time: '3 jam lalu',
    },
    {
      name: 'Ahmad Rizki',
      phone: '081356789012',
      products: 'Cooking Set, Kompor Portable',
      time: '5 jam lalu',
    },
  ];

  const stats = [
    {
      label: 'Total Transaksi Hari Ini',
      value: '24',
      icon: DollarSign,
      color: 'from-emerald-400 to-teal-500',
    },
    {
      label: 'Pelanggan Aktif',
      value: '18',
      icon: Users,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      label: 'Produk Tersewa',
      value: '42',
      icon: TrendingUp,
      color: 'from-purple-400 to-pink-500',
    },
    {
      label: 'Pending Return',
      value: '7',
      icon: Clock,
      color: 'from-orange-400 to-red-500',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [promos.length]);

  return (
    <div className="h-full overflow-y-auto p-6 space-y-6">
      <div className="relative h-56 rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
        {promos.map((promo, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 transition-opacity duration-1000
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div
              className={`h-full bg-gradient-to-r ${promo.color} p-8 flex flex-col justify-center`}
            >
              <h3 className="text-4xl text-white mb-3">{promo.title}</h3>
              <p className="text-xl text-white/90">{promo.description}</p>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {promos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }
              `}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl text-white mb-2">{stat.value}</div>
              <div className="text-lg text-white/70">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
        <h3 className="text-2xl text-white mb-6">Pelanggan Terbaru</h3>
        <div className="space-y-4">
          {recentCustomers.map((customer, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xl text-white mb-1">
                    {customer.name}
                  </div>
                  <div className="text-base text-white/60">
                    {customer.phone}
                  </div>
                </div>
                <div className="text-sm text-white/50">{customer.time}</div>
              </div>
              <div className="text-base text-white/80">
                📦 {customer.products}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
        <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
          <Package className="w-7 h-7" />
          Inventory / Stok Overview
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {stockItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="text-white text-lg mb-1">{item.name}</div>
                  <div className="text-white/60 text-sm">
                    {item.available} / {item.total} tersedia
                  </div>
                </div>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all"
                  style={{ width: `${(item.available / item.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
        <h3 className="text-2xl text-white mb-4">Status Kasir</h3>
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
          <span className="text-xl text-white">Kasir Aktif - Shift Pagi</span>
        </div>
      </div>
    </div>
  );
}

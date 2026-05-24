import {
  ShoppingCart,
  Package,
  History,
  Settings,
  Wallet,
  Info,
  Users,
  UserCircle,
  Shield,
} from 'lucide-react';

interface MenuPanelProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'pesanan', label: 'Pesanan', icon: ShoppingCart, adminOnly: false },
  { id: 'produk', label: 'Produk', icon: Package, adminOnly: true },
  { id: 'riwayat', label: 'Riwayat', icon: History, adminOnly: false },
  { id: 'setting', label: 'Setting', icon: Settings, adminOnly: true },
  { id: 'pengeluaran', label: 'Pengeluaran', icon: Wallet, adminOnly: false },
  { id: 'informasi', label: 'Informasi', icon: Info, adminOnly: false },
  { id: 'pelanggan', label: 'Pelanggan', icon: Users, adminOnly: false },
  { id: 'kasir', label: 'Kasir', icon: UserCircle, adminOnly: true },
];

export function MenuPanel({ activeTab, onTabChange }: MenuPanelProps) {
  return (
    <div className="h-full p-8 overflow-y-auto">
      <div className="grid grid-cols-2 gap-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`
                relative aspect-square rounded-3xl backdrop-blur-md border transition-all duration-300
                flex flex-col items-center justify-center gap-4 p-8
                ${
                  isActive
                    ? 'bg-white/25 border-white/50 shadow-2xl shadow-white/20 scale-105'
                    : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/35 hover:shadow-xl hover:scale-102'
                }
                ${item.adminOnly ? 'ring-1 ring-orange-400/30' : ''}
              `}
            >
              {item.adminOnly && (
                <div className="absolute top-3 right-3">
                  <Shield className="w-5 h-5 text-orange-400" />
                </div>
              )}

              <Icon className="w-14 h-14 text-white" strokeWidth={1.5} />
              <span className="text-white text-xl font-light">
                {item.label}
              </span>

              {isActive && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-4 h-4 text-orange-400" />
          <span className="text-white/70 text-sm">Admin Access</span>
        </div>
        <div className="text-white/50 text-xs">
          Fitur dengan icon shield hanya untuk Administrator
        </div>
      </div>
    </div>
  );
}

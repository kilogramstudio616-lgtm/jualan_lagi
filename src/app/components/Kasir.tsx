import { UserCircle, Plus, Shield, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { useState } from 'react';

interface Cashier {
  id: string;
  name: string;
  pin: string;
  role: string;
  status: 'active' | 'inactive';
  transactions: number;
  revenue: string;
  lastActive: string;
}

export function Kasir() {
  const [cashiers, setCashiers] = useState<Cashier[]>([
    {
      id: 'K001',
      name: 'Admin Arjuno',
      pin: '******',
      role: 'Administrator',
      status: 'active',
      transactions: 145,
      revenue: 'Rp 12.450.000',
      lastActive: '23 Mei 2026 14:30',
    },
    {
      id: 'K002',
      name: 'Kasir Satu',
      pin: '******',
      role: 'Cashier',
      status: 'active',
      transactions: 89,
      revenue: 'Rp 6.780.000',
      lastActive: '23 Mei 2026 13:15',
    },
    {
      id: 'K003',
      name: 'Kasir Dua',
      pin: '******',
      role: 'Cashier',
      status: 'inactive',
      transactions: 52,
      revenue: 'Rp 4.230.000',
      lastActive: '22 Mei 2026 20:00',
    },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newCashier, setNewCashier] = useState({
    name: '',
    pin: '',
    role: 'Cashier',
  });

  const handleAddCashier = () => {
    if (newCashier.name && newCashier.pin) {
      const cashier: Cashier = {
        id: `K00${cashiers.length + 1}`,
        name: newCashier.name,
        pin: '******',
        role: newCashier.role,
        status: 'active',
        transactions: 0,
        revenue: 'Rp 0',
        lastActive: new Date().toLocaleString('id-ID'),
      };
      setCashiers([...cashiers, cashier]);
      setNewCashier({ name: '', pin: '', role: 'Cashier' });
      setIsAddDialogOpen(false);
    }
  };

  const toggleCashierStatus = (id: string) => {
    setCashiers(
      cashiers.map((c) =>
        c.id === id
          ? { ...c, status: c.status === 'active' ? 'inactive' : 'active' }
          : c
      )
    );
  };

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="space-y-6">
        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white flex items-center gap-3">
              <Shield className="w-7 h-7 text-orange-400" />
              Admin Control Center
            </h2>

            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="h-12 text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
                  <Plus className="w-5 h-5 mr-2" />
                  Tambah Kasir
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900/95 backdrop-blur-xl border-white/20 text-white max-w-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-white">
                    Tambah Kasir Baru
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                  <div>
                    <Label className="text-white text-base mb-2 block">
                      Nama Kasir
                    </Label>
                    <Input
                      type="text"
                      value={newCashier.name}
                      onChange={(e) =>
                        setNewCashier({ ...newCashier, name: e.target.value })
                      }
                      placeholder="Masukkan nama kasir"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
                    />
                  </div>

                  <div>
                    <Label className="text-white text-base mb-2 block">
                      PIN (6 digit)
                    </Label>
                    <Input
                      type="password"
                      maxLength={6}
                      value={newCashier.pin}
                      onChange={(e) =>
                        setNewCashier({ ...newCashier, pin: e.target.value })
                      }
                      placeholder="******"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
                    />
                  </div>

                  <div>
                    <Label className="text-white text-base mb-2 block">
                      Role
                    </Label>
                    <select
                      value={newCashier.role}
                      onChange={(e) =>
                        setNewCashier({ ...newCashier, role: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 text-white h-12 text-lg rounded-xl px-4"
                    >
                      <option value="Cashier" className="bg-gray-800">
                        Cashier
                      </option>
                      <option value="Administrator" className="bg-gray-800">
                        Administrator
                      </option>
                    </select>
                  </div>

                  <Button
                    onClick={handleAddCashier}
                    className="w-full h-14 text-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg mt-4"
                  >
                    Tambah Kasir
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 p-4">
              <div className="text-emerald-300 text-sm mb-1">Total Kasir</div>
              <div className="text-white text-3xl">{cashiers.length}</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 p-4">
              <div className="text-blue-300 text-sm mb-1">Kasir Aktif</div>
              <div className="text-white text-3xl">
                {cashiers.filter((c) => c.status === 'active').length}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 p-4">
              <div className="text-orange-300 text-sm mb-1">
                Total Transaksi
              </div>
              <div className="text-white text-3xl">
                {cashiers.reduce((sum, c) => sum + c.transactions, 0)}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {cashiers.map((cashier) => (
            <div
              key={cashier.id}
              className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      cashier.role === 'Administrator'
                        ? 'bg-gradient-to-br from-orange-400 to-red-500'
                        : 'bg-gradient-to-br from-emerald-400 to-teal-500'
                    }`}
                  >
                    {cashier.role === 'Administrator' ? (
                      <Shield className="w-8 h-8 text-white" />
                    ) : (
                      <UserCircle className="w-8 h-8 text-white" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl text-white mb-1">
                      {cashier.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-lg text-sm ${
                          cashier.role === 'Administrator'
                            ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                        }`}
                      >
                        {cashier.role}
                      </span>
                      <span className="text-white/60 text-sm">
                        ID: {cashier.id}
                      </span>
                    </div>
                    <div className="text-white/60 text-sm">
                      PIN: {cashier.pin}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right mr-3">
                    <div
                      className={`text-sm mb-1 ${
                        cashier.status === 'active'
                          ? 'text-emerald-300'
                          : 'text-red-300'
                      }`}
                    >
                      {cashier.status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </div>
                    <Switch
                      checked={cashier.status === 'active'}
                      onCheckedChange={() => toggleCashierStatus(cashier.id)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-white/70 text-sm">Transaksi</span>
                  </div>
                  <div className="text-white text-xl">{cashier.transactions}</div>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white/70 text-sm mb-2">
                    Total Revenue
                  </div>
                  <div className="text-emerald-300 text-xl">
                    {cashier.revenue}
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white/70 text-sm mb-2">
                    Terakhir Aktif
                  </div>
                  <div className="text-white text-sm">{cashier.lastActive}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-white text-base mb-3">
                  Permission & Akses
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/70 text-sm">
                      Akses Pesanan
                    </span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/70 text-sm">
                      Akses Riwayat
                    </span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/70 text-sm">
                      Akses Produk
                    </span>
                    <Switch
                      defaultChecked={cashier.role === 'Administrator'}
                      disabled={cashier.role !== 'Administrator'}
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/70 text-sm">
                      Akses Setting
                    </span>
                    <Switch
                      defaultChecked={cashier.role === 'Administrator'}
                      disabled={cashier.role !== 'Administrator'}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

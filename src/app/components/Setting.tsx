import { Settings, User, Printer, Monitor, Shield, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';

export function Setting() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="space-y-6">
        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
            <User className="w-7 h-7" />
            Pengaturan Akun
          </h2>

          <div className="space-y-4">
            <div>
              <Label className="text-white text-base mb-2 block">
                Nama Pengguna
              </Label>
              <Input
                type="text"
                defaultValue="Admin Arjuno"
                className="bg-white/10 border-white/20 text-white h-12 text-lg"
              />
            </div>

            <div>
              <Label className="text-white text-base mb-2 block">
                Role
              </Label>
              <div className="px-4 py-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-lg">
                Administrator
              </div>
            </div>

            <div>
              <Label className="text-white text-base mb-2 block">
                Ubah PIN
              </Label>
              <Input
                type="password"
                placeholder="Masukkan PIN baru (6 digit)"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
              />
            </div>

            <Button className="w-full h-12 text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
              Simpan Perubahan
            </Button>

            <Separator className="bg-white/20 my-6" />

            <Button
              variant="ghost"
              className="w-full h-12 text-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-400/30"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Keluar dari Akun
            </Button>
          </div>
        </div>

        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
            <Shield className="w-7 h-7" />
            Pengaturan Sistem (Admin Only)
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <div className="text-white text-lg mb-1">
                  Manajemen User & Role
                </div>
                <div className="text-white/60 text-sm">
                  Kelola akun kasir dan permission
                </div>
              </div>
              <Button
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                Kelola
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <div className="text-white text-lg mb-1">Kontrol Akses</div>
                <div className="text-white/60 text-sm">
                  Atur permission untuk setiap role
                </div>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <div className="text-white text-lg mb-1">
                  Aktifkan Mode Admin
                </div>
                <div className="text-white/60 text-sm">
                  Akses penuh ke semua fitur
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
            <Printer className="w-7 h-7" />
            Pengaturan Printer
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white text-lg">Status Printer</div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 text-sm">Terhubung</span>
                </div>
              </div>
              <div className="text-white/60 text-sm">
                Printer: Bluetooth Thermal 58mm
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full h-12 text-lg bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              Hubungkan Printer Bluetooth
            </Button>

            <Button
              variant="ghost"
              className="w-full h-12 text-lg bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              <Printer className="w-5 h-5 mr-2" />
              Test Print
            </Button>

            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <div className="text-white text-lg mb-1">
                  Auto Print Struk
                </div>
                <div className="text-white/60 text-sm">
                  Cetak otomatis setelah transaksi
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
            <Monitor className="w-7 h-7" />
            Preferensi Aplikasi
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <div className="text-white text-lg mb-1">Mode Gelap</div>
                <div className="text-white/60 text-sm">
                  Tema semi-dark untuk outdoor vibe
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div>
              <Label className="text-white text-base mb-2 block">Bahasa</Label>
              <select className="w-full bg-white/10 border border-white/20 text-white h-12 text-lg rounded-xl px-4">
                <option value="id" className="bg-gray-800">
                  Bahasa Indonesia
                </option>
                <option value="en" className="bg-gray-800">
                  English
                </option>
              </select>
            </div>

            <div>
              <Label className="text-white text-base mb-2 block">
                UI Density
              </Label>
              <select className="w-full bg-white/10 border border-white/20 text-white h-12 text-lg rounded-xl px-4">
                <option value="normal" className="bg-gray-800">
                  Normal
                </option>
                <option value="compact" className="bg-gray-800">
                  Compact
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

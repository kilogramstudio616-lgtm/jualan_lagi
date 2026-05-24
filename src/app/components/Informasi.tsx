import { Info, Phone, MapPin, AlertCircle, FileText } from 'lucide-react';

export function Informasi() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="space-y-6">
        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
            <Info className="w-7 h-7" />
            Informasi Toko
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-xl">
                <span className="text-4xl">🏔️</span>
              </div>
              <div>
                <h3 className="text-2xl text-white mb-1">ARJUNO OUTDOOR</h3>
                <p className="text-lg text-white/70">
                  Rental Management System
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-6 h-6 text-emerald-400 mt-1" />
                <div>
                  <div className="text-white text-lg mb-1">Alamat</div>
                  <div className="text-white/70">
                    Jl. Gunung Arjuno No. 123
                    <br />
                    Malang, Jawa Timur 65126
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-emerald-400 mt-1" />
                <div>
                  <div className="text-white text-lg mb-1">Kontak</div>
                  <div className="text-white/70">
                    Telepon: (0341) 555-0123
                    <br />
                    WhatsApp: 0812-3456-7890
                    <br />
                    Email: info@arjunooutdoor.com
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-white text-lg mb-2">Jam Operasional</div>
              <div className="text-white/70">
                Senin - Jumat: 08.00 - 20.00 WIB
                <br />
                Sabtu - Minggu: 07.00 - 21.00 WIB
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7" />
            SOP Rental Pendakian
          </h2>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-white text-lg mb-2">
                1. Syarat Penyewaan
              </div>
              <ul className="text-white/70 space-y-1 ml-4">
                <li>• KTP/Identitas asli wajib ditunjukkan</li>
                <li>• Deposit sesuai kategori barang</li>
                <li>• Minimal usia 17 tahun atau didampingi wali</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-white text-lg mb-2">
                2. Durasi & Pengembalian
              </div>
              <ul className="text-white/70 space-y-1 ml-4">
                <li>• Minimal sewa 1 hari (24 jam)</li>
                <li>• Keterlambatan dikenakan biaya 50% per hari</li>
                <li>• Maksimal keterlambatan 3 hari</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-white text-lg mb-2">
                3. Kondisi Barang
              </div>
              <ul className="text-white/70 space-y-1 ml-4">
                <li>• Pengecekan kondisi saat penyewaan</li>
                <li>• Kerusakan ringan: biaya perbaikan</li>
                <li>• Kehilangan: ganti rugi sesuai harga barang</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <h2 className="text-2xl text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-7 h-7" />
            Panduan Keselamatan
          </h2>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-orange-500/20 border border-orange-400/30">
              <div className="text-orange-300 text-lg mb-2">
                ⚠️ Peralatan Tenda
              </div>
              <ul className="text-orange-200/80 space-y-1 ml-4">
                <li>• Pastikan tenda terpasang dengan kuat</li>
                <li>• Hindari memasang di area rawan longsor</li>
                <li>• Simpan di tempat kering saat tidak digunakan</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-blue-500/20 border border-blue-400/30">
              <div className="text-blue-300 text-lg mb-2">
                🔥 Peralatan Masak
              </div>
              <ul className="text-blue-200/80 space-y-1 ml-4">
                <li>• Jangan tinggalkan kompor menyala tanpa pengawasan</li>
                <li>• Gunakan di area terbuka dengan ventilasi baik</li>
                <li>• Jauhkan dari bahan mudah terbakar</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/30">
              <div className="text-emerald-300 text-lg mb-2">
                🎒 Carrier & Tas
              </div>
              <ul className="text-emerald-200/80 space-y-1 ml-4">
                <li>• Atur beban secara merata</li>
                <li>• Jangan melebihi kapasitas maksimal</li>
                <li>• Gunakan rain cover saat hujan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <div className="text-center">
            <div className="text-white/70 text-sm mb-2">
              ARJUNO OUTDOOR Rental Management System
            </div>
            <div className="text-white/50 text-xs">Version 1.0.0 - 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

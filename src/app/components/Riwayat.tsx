import { History as HistoryIcon, Search } from 'lucide-react';
import { Input } from './ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export function Riwayat() {
  const transactions = [
    {
      id: '001',
      customerName: 'Budi Santoso',
      phone: '081234567890',
      products: 'Tenda Dome 4P, Sleeping Bag',
      status: 'Aktif',
      date: '23 Mei 2026',
      total: 'Rp 200.000',
    },
    {
      id: '002',
      customerName: 'Siti Aminah',
      phone: '081298765432',
      products: 'Carrier 70L, Jaket Gunung',
      status: 'Selesai',
      date: '22 Mei 2026',
      total: 'Rp 255.000',
    },
    {
      id: '003',
      customerName: 'Ahmad Rizki',
      phone: '081356789012',
      products: 'Cooking Set, Kompor Portable',
      status: 'Aktif',
      date: '23 Mei 2026',
      total: 'Rp 120.000',
    },
    {
      id: '004',
      customerName: 'Dewi Lestari',
      phone: '081445678901',
      products: 'Tenda Dome 4P, Carrier 70L',
      status: 'Pending Return',
      date: '21 Mei 2026',
      total: 'Rp 375.000',
    },
    {
      id: '005',
      customerName: 'Eko Prasetyo',
      phone: '081523456789',
      products: 'Sleeping Bag, Jaket Gunung',
      status: 'Selesai',
      date: '20 Mei 2026',
      total: 'Rp 180.000',
    },
    {
      id: '006',
      customerName: 'Fitri Handayani',
      phone: '081612345678',
      products: 'Cooking Set, Kompor Portable',
      status: 'Selesai',
      date: '20 Mei 2026',
      total: 'Rp 120.000',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aktif':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
      case 'Selesai':
        return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      case 'Pending Return':
        return 'bg-orange-500/20 text-orange-300 border-orange-400/30';
      default:
        return 'bg-white/10 text-white/70 border-white/20';
    }
  };

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-white flex items-center gap-3">
            <HistoryIcon className="w-7 h-7" />
            Riwayat Transaksi
          </h2>

          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <Input
              type="text"
              placeholder="Cari nama pelanggan atau nomor telepon..."
              className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-white/90 text-lg h-14">
                  ID
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  Nama Pelanggan
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  No. Telepon
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  Produk Disewa
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  Status
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  Tanggal
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14 text-right">
                  Total
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  className="border-white/10 hover:bg-white/5"
                >
                  <TableCell className="text-white/70 text-base h-16">
                    #{transaction.id}
                  </TableCell>
                  <TableCell className="text-white text-lg h-16">
                    {transaction.customerName}
                  </TableCell>
                  <TableCell className="text-white/70 text-base h-16">
                    {transaction.phone}
                  </TableCell>
                  <TableCell className="text-white/80 text-base h-16 max-w-xs">
                    {transaction.products}
                  </TableCell>
                  <TableCell className="h-16">
                    <span
                      className={`px-4 py-2 rounded-xl border text-sm ${getStatusColor(
                        transaction.status
                      )}`}
                    >
                      {transaction.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-white/70 text-base h-16">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="text-emerald-300 text-lg h-16 text-right">
                    {transaction.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-white/70 text-base">
            Menampilkan {transactions.length} transaksi
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-base">
              Sebelumnya
            </button>
            <button className="px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 text-base">
              1
            </button>
            <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-base">
              2
            </button>
            <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-base">
              Berikutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

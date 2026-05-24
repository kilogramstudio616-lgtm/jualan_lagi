import { Users, Search, UserPlus } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export function Pelanggan() {
  const customers = [
    {
      id: 'C001',
      name: 'Budi Santoso',
      phone: '081234567890',
      rentalCount: 12,
      status: 'Active Customer',
      lastRental: '23 Mei 2026',
    },
    {
      id: 'C002',
      name: 'Siti Aminah',
      phone: '081298765432',
      rentalCount: 8,
      status: 'Active Customer',
      lastRental: '22 Mei 2026',
    },
    {
      id: 'C003',
      name: 'Ahmad Rizki',
      phone: '081356789012',
      rentalCount: 5,
      status: 'Active Customer',
      lastRental: '23 Mei 2026',
    },
    {
      id: 'C004',
      name: 'Dewi Lestari',
      phone: '081445678901',
      rentalCount: 15,
      status: 'Active Customer',
      lastRental: '21 Mei 2026',
    },
    {
      id: 'C005',
      name: 'Eko Prasetyo',
      phone: '081523456789',
      rentalCount: 3,
      status: 'New Customer',
      lastRental: '20 Mei 2026',
    },
    {
      id: 'C006',
      name: 'Fitri Handayani',
      phone: '081612345678',
      rentalCount: 1,
      status: 'New Customer',
      lastRental: '20 Mei 2026',
    },
    {
      id: 'C007',
      name: 'Gunawan Setiawan',
      phone: '081734567890',
      rentalCount: 20,
      status: 'Active Customer',
      lastRental: '19 Mei 2026',
    },
    {
      id: 'C008',
      name: 'Hana Safitri',
      phone: '081823456789',
      rentalCount: 7,
      status: 'Active Customer',
      lastRental: '18 Mei 2026',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active Customer'
      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
      : 'bg-blue-500/20 text-blue-300 border-blue-400/30';
  };

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-white flex items-center gap-3">
            <Users className="w-7 h-7" />
            Database Pelanggan
          </h2>

          <Button className="h-12 text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
            <UserPlus className="w-5 h-5 mr-2" />
            Tambah Pelanggan
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <Input
              type="text"
              placeholder="Cari nama pelanggan atau nomor telepon..."
              className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 p-4">
            <div className="text-emerald-300 text-sm mb-1">
              Total Pelanggan
            </div>
            <div className="text-white text-3xl">{customers.length}</div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 p-4">
            <div className="text-blue-300 text-sm mb-1">Active Customer</div>
            <div className="text-white text-3xl">
              {customers.filter((c) => c.status === 'Active Customer').length}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 p-4">
            <div className="text-purple-300 text-sm mb-1">New Customer</div>
            <div className="text-white text-3xl">
              {customers.filter((c) => c.status === 'New Customer').length}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-white/90 text-lg h-14">ID</TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  Nama Pelanggan
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  No. Telepon
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  Jumlah Rental
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  Status
                </TableHead>
                <TableHead className="text-white/90 text-lg h-14">
                  Terakhir Rental
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow
                  key={customer.id}
                  className="border-white/10 hover:bg-white/5 cursor-pointer"
                >
                  <TableCell className="text-white/70 text-base h-16">
                    {customer.id}
                  </TableCell>
                  <TableCell className="text-white text-lg h-16">
                    {customer.name}
                  </TableCell>
                  <TableCell className="text-white/70 text-base h-16">
                    {customer.phone}
                  </TableCell>
                  <TableCell className="text-white text-lg h-16">
                    {customer.rentalCount}x
                  </TableCell>
                  <TableCell className="h-16">
                    <span
                      className={`px-4 py-2 rounded-xl border text-sm ${getStatusColor(
                        customer.status
                      )}`}
                    >
                      {customer.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-white/70 text-base h-16">
                    {customer.lastRental}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-white/70 text-base">
            Menampilkan {customers.length} pelanggan
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

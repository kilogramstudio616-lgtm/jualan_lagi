import { useState } from 'react';
import { Plus, Minus, Trash2, Printer, ShoppingCart, PlusCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

interface CartItem {
  id: string;
  name: string;
  customName?: string;
  price: number;
  quantity: number;
  duration: number;
  image: string;
}

export function Pesanan() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isManualAddOpen, setIsManualAddOpen] = useState(false);
  const [manualItem, setManualItem] = useState({
    name: '',
    price: '',
    quantity: '1',
    duration: '1',
  });

  const products = [
    {
      id: '1',
      name: 'Tenda Dome 4 Person',
      price: 75000,
      image: '🏕️',
    },
    {
      id: '2',
      name: 'Carrier 70L',
      price: 50000,
      image: '🎒',
    },
    {
      id: '3',
      name: 'Sleeping Bag',
      price: 25000,
      image: '🛌',
    },
    {
      id: '4',
      name: 'Jaket Gunung',
      price: 35000,
      image: '🧥',
    },
    {
      id: '5',
      name: 'Cooking Set',
      price: 40000,
      image: '🍳',
    },
    {
      id: '6',
      name: 'Kompor Portable',
      price: 20000,
      image: '🔥',
    },
  ];

  const addToCart = (product: typeof products[0]) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
          duration: 1,
        },
      ]);
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const updateDuration = (id: string, duration: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, duration: Math.max(1, duration) } : item
      )
    );
  };

  const updateCustomName = (id: string, customName: string) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, customName } : item))
    );
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity * item.duration,
      0
    );
  };

  const handlePrint = () => {
    alert('Cetak struk thermal - fitur akan dihubungkan ke printer Bluetooth');
  };

  const handleManualAdd = () => {
    if (manualItem.name && manualItem.price) {
      const item: CartItem = {
        id: `manual-${Date.now()}`,
        name: manualItem.name,
        price: parseInt(manualItem.price),
        quantity: parseInt(manualItem.quantity) || 1,
        duration: parseInt(manualItem.duration) || 1,
        image: '📦',
      };
      setCart([...cart, item]);
      setManualItem({ name: '', price: '', quantity: '1', duration: '1' });
      setIsManualAddOpen(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white flex items-center gap-3">
              <ShoppingCart className="w-7 h-7" />
              Pilih Produk
            </h2>

            <Dialog open={isManualAddOpen} onOpenChange={setIsManualAddOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Manual Add
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900/95 backdrop-blur-xl border-white/20 text-white max-w-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-white">
                    Tambah Item Manual
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                  <div>
                    <Label className="text-white text-base mb-2 block">
                      Nama Produk
                    </Label>
                    <Input
                      type="text"
                      value={manualItem.name}
                      onChange={(e) =>
                        setManualItem({ ...manualItem, name: e.target.value })
                      }
                      placeholder="Nama produk custom"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
                    />
                  </div>

                  <div>
                    <Label className="text-white text-base mb-2 block">
                      Harga Sewa (per hari)
                    </Label>
                    <Input
                      type="number"
                      value={manualItem.price}
                      onChange={(e) =>
                        setManualItem({ ...manualItem, price: e.target.value })
                      }
                      placeholder="50000"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white text-base mb-2 block">
                        Jumlah
                      </Label>
                      <Input
                        type="number"
                        value={manualItem.quantity}
                        onChange={(e) =>
                          setManualItem({
                            ...manualItem,
                            quantity: e.target.value,
                          })
                        }
                        min="1"
                        className="bg-white/10 border-white/20 text-white h-12 text-lg"
                      />
                    </div>

                    <div>
                      <Label className="text-white text-base mb-2 block">
                        Durasi (hari)
                      </Label>
                      <Input
                        type="number"
                        value={manualItem.duration}
                        onChange={(e) =>
                          setManualItem({
                            ...manualItem,
                            duration: e.target.value,
                          })
                        }
                        min="1"
                        className="bg-white/10 border-white/20 text-white h-12 text-lg"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleManualAdd}
                    className="w-full h-14 text-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg mt-4"
                  >
                    Tambah ke Keranjang
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                className="rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-white/15 hover:border-white/20 transition-all text-left"
              >
                <div className="text-5xl mb-3">{product.image}</div>
                <div className="text-lg text-white mb-2">{product.name}</div>
                <div className="text-xl text-emerald-300">
                  Rp {product.price.toLocaleString()}/hari
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
          <h2 className="text-2xl text-white mb-6">Keranjang Pesanan</h2>
          <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center text-white/50 py-12 text-lg">
                Keranjang masih kosong
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-lg text-white mb-2">
                        {item.image} {item.customName || item.name}
                      </div>
                      <div className="space-y-1">
                        {item.customName && (
                          <div className="text-sm text-white/50">
                            Asli: {item.name}
                          </div>
                        )}
                        <Input
                          type="text"
                          placeholder="Rename produk untuk struk (opsional)"
                          value={item.customName || ''}
                          onChange={(e) =>
                            updateCustomName(item.id, e.target.value)
                          }
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-10 text-base"
                        />
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-400/10 h-10 w-10"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-white/70 text-sm mb-2 block">
                        Jumlah
                      </Label>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="h-10 w-10 bg-white/10 hover:bg-white/20 text-white border border-white/20"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-white text-xl w-12 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="h-10 w-10 bg-white/10 hover:bg-white/20 text-white border border-white/20"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label className="text-white/70 text-sm mb-2 block">
                        Durasi (hari)
                      </Label>
                      <Input
                        type="number"
                        min="1"
                        value={item.duration}
                        onChange={(e) =>
                          updateDuration(item.id, parseInt(e.target.value) || 1)
                        }
                        className="bg-white/10 border-white/20 text-white text-xl text-center h-10"
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-right text-xl text-emerald-300">
                    Rp{' '}
                    {(
                      item.price *
                      item.quantity *
                      item.duration
                    ).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="space-y-4 pt-4 border-t border-white/20">
            <div>
              <Label className="text-white text-base mb-2 block">
                Nama Pelanggan
              </Label>
              <Input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Masukkan nama pelanggan"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
              />
            </div>

            <div>
              <Label className="text-white text-base mb-2 block">
                No. Telepon
              </Label>
              <Input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="08xxxxxxxxxx"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
              />
            </div>

            <div className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl text-white">Total Bayar</span>
                <span className="text-4xl text-emerald-300">
                  Rp {calculateTotal().toLocaleString()}
                </span>
              </div>

              <Button
                onClick={handlePrint}
                disabled={cart.length === 0 || !customerName || !customerPhone}
                className="w-full h-16 text-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Printer className="w-6 h-6 mr-3" />
                Cetak Struk & Proses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

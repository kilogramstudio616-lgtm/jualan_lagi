import { useState } from 'react';
import { Plus, Edit, Trash2, Package } from 'lucide-react';
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

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
}

export function Produk() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Tenda Dome 4 Person',
      category: 'Tenda',
      price: 75000,
      stock: 8,
      image: '🏕️',
    },
    {
      id: '2',
      name: 'Carrier 70L',
      category: 'Tas',
      price: 50000,
      stock: 12,
      image: '🎒',
    },
    {
      id: '3',
      name: 'Sleeping Bag',
      category: 'Perlengkapan Tidur',
      price: 25000,
      stock: 15,
      image: '🛌',
    },
    {
      id: '4',
      name: 'Jaket Gunung',
      category: 'Pakaian',
      price: 35000,
      stock: 10,
      image: '🧥',
    },
    {
      id: '5',
      name: 'Cooking Set',
      category: 'Peralatan Masak',
      price: 40000,
      stock: 6,
      image: '🍳',
    },
    {
      id: '6',
      name: 'Kompor Portable',
      category: 'Peralatan Masak',
      price: 20000,
      stock: 9,
      image: '🔥',
    },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    image: '📦',
  });

  const categories = [
    'Tenda',
    'Tas',
    'Perlengkapan Tidur',
    'Pakaian',
    'Peralatan Masak',
  ];

  const handleAddProduct = () => {
    if (
      newProduct.name &&
      newProduct.category &&
      newProduct.price &&
      newProduct.stock
    ) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        category: newProduct.category,
        price: parseInt(newProduct.price),
        stock: parseInt(newProduct.stock),
        image: newProduct.image,
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', category: '', price: '', stock: '', image: '📦' });
      setIsAddDialogOpen(false);
    }
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Hapus produk ini?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-white flex items-center gap-3">
            <Package className="w-7 h-7" />
            Manajemen Produk
          </h2>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="h-12 text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
                <Plus className="w-5 h-5 mr-2" />
                Tambah Produk
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900/95 backdrop-blur-xl border-white/20 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl text-white">
                  Tambah Produk Baru
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div>
                  <Label className="text-white text-base mb-2 block">
                    Nama Produk
                  </Label>
                  <Input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    placeholder="Contoh: Tenda Dome 6 Person"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
                  />
                </div>

                <div>
                  <Label className="text-white text-base mb-2 block">
                    Kategori
                  </Label>
                  <select
                    value={newProduct.category}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, category: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 text-white h-12 text-lg rounded-lg px-3"
                  >
                    <option value="" className="bg-gray-800">
                      Pilih Kategori
                    </option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-gray-800">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white text-base mb-2 block">
                      Harga Sewa (per hari)
                    </Label>
                    <Input
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, price: e.target.value })
                      }
                      placeholder="50000"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
                    />
                  </div>

                  <div>
                    <Label className="text-white text-base mb-2 block">
                      Stok
                    </Label>
                    <Input
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, stock: e.target.value })
                      }
                      placeholder="10"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white text-base mb-2 block">
                    Emoji Icon
                  </Label>
                  <Input
                    type="text"
                    value={newProduct.image}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, image: e.target.value })
                    }
                    placeholder="🏕️"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-lg"
                  />
                </div>

                <Button
                  onClick={handleAddProduct}
                  className="w-full h-14 text-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg mt-4"
                >
                  Simpan Produk
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all"
            >
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <div className="text-xl text-white mb-2">{product.name}</div>
              <div className="text-base text-white/60 mb-3">
                {product.category}
              </div>
              <div className="text-2xl text-emerald-300 mb-3">
                Rp {product.price.toLocaleString()}/hari
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-base text-white/70">Stok:</span>
                <span
                  className={`text-lg ${
                    product.stock > 5 ? 'text-emerald-400' : 'text-orange-400'
                  }`}
                >
                  {product.stock} unit
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 h-10"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteProduct(product.id)}
                  className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-400/30 h-10"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Hapus
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

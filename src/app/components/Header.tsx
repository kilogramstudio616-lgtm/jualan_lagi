import { useState, useEffect } from 'react';
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <header className="h-24 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="h-full px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-xl">
            <span className="text-2xl text-white">🏔️</span>
          </div>
          <div>
            <h1 className="text-3xl text-white tracking-wide">
              ARJUNO OUTDOOR
            </h1>
            <p className="text-sm text-white/70">Rental Management System</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-right">
            <div className="text-2xl text-white tabular-nums">
              {formatTime(currentTime)}
            </div>
            <div className="text-sm text-white/70">
              {formatDate(currentTime)}
            </div>
          </div>

          <div className="h-14 w-px bg-white/20" />

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-white/70">Logged in as</div>
              <div className="text-white">Admin Arjuno</div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

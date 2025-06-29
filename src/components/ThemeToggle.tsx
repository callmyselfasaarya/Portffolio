
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-slate-200 dark:border-slate-700"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-slate-800 dark:text-slate-200" />
      ) : (
        <Moon className="h-4 w-4 text-slate-800 dark:text-slate-200" />
      )}
    </Button>
  );
};

export default ThemeToggle;

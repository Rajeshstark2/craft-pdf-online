
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-docucraft-600 dark:text-docucraft-400">
            DocuCraft
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-docucraft-600 transition-colors">
            Home
          </Link>
          <Link to="/tools" className="font-medium hover:text-docucraft-600 transition-colors">
            All Tools
          </Link>
          <Link to="/pricing" className="font-medium hover:text-docucraft-600 transition-colors">
            Pricing
          </Link>
          <Link to="/auth/login" className="font-medium hover:text-docucraft-600 transition-colors">
            Login
          </Link>
          <Link to="/auth/signup">
            <Button className="bg-docucraft-500 hover:bg-docucraft-600">Sign Up</Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="font-medium py-2 hover:text-docucraft-600 transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/tools" className="font-medium py-2 hover:text-docucraft-600 transition-colors" onClick={toggleMenu}>
              All Tools
            </Link>
            <Link to="/pricing" className="font-medium py-2 hover:text-docucraft-600 transition-colors" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link to="/auth/login" className="font-medium py-2 hover:text-docucraft-600 transition-colors" onClick={toggleMenu}>
              Login
            </Link>
            <Link to="/auth/signup" onClick={toggleMenu}>
              <Button className="w-full bg-docucraft-500 hover:bg-docucraft-600">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DocuCraft</h3>
            <p className="text-muted-foreground">
              All-in-One Online PDF Editor & Converter. Simplify your document workflows.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">PDF Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tool/edit-pdf" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  Edit PDF
                </Link>
              </li>
              <li>
                <Link to="/tool/merge-pdf" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  Merge PDFs
                </Link>
              </li>
              <li>
                <Link to="/tool/split-pdf" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  Split PDF
                </Link>
              </li>
              <li>
                <Link to="/tool/compress-pdf" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  Compress PDF
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  All Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Conversion</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tool/pdf-to-word" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  PDF to Word
                </Link>
              </li>
              <li>
                <Link to="/tool/pdf-to-excel" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  PDF to Excel
                </Link>
              </li>
              <li>
                <Link to="/tool/pdf-to-ppt" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  PDF to PowerPoint
                </Link>
              </li>
              <li>
                <Link to="/tool/pdf-to-jpg" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  PDF to JPG
                </Link>
              </li>
              <li>
                <Link to="/tool/ocr-pdf" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  OCR PDF
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-docucraft-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border mt-8 pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DocuCraft. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Globe size={16} className="text-muted-foreground" />
            <select
              className="text-sm bg-transparent border-none focus:outline-none text-muted-foreground"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

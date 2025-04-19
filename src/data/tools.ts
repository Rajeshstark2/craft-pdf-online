import {
  FileText, Files, FilePlus2, FileMinus2, FileBarChart2, FileSearch, FileX2, FileUp, FileDown, FileCheck2,
  Lock, Unlock, Image, Columns, Table, LayoutPresentationAlt, FileHeart, Camera, FileScan, Edit, LineChart,
  FileSignature, PencilRuler, FileInput, FormInput, Stamp, FileDigit, Clock, FileCode, FileJson
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  path: string;
  category: "edit" | "convert" | "utility";
  isPro?: boolean;
}

export const tools: Tool[] = [
  // PDF Editing Tools
  {
    id: "edit-pdf",
    name: "Edit PDF",
    description: "Modify text, add images and shapes to your PDF files",
    icon: Edit,
    path: "/tool/edit-pdf",
    category: "edit",
  },
  {
    id: "annotate-pdf",
    name: "Annotate PDF",
    description: "Highlight, underline, and add notes to your PDF",
    icon: FileText,
    path: "/tool/annotate-pdf",
    category: "edit",
  },
  {
    id: "fill-sign-pdf",
    name: "Fill & Sign PDF",
    description: "Fill forms and add your signature to PDFs",
    icon: FileSignature,
    path: "/tool/fill-sign-pdf",
    category: "utility",
  },
  {
    id: "merge-pdf",
    name: "Merge PDFs",
    description: "Combine multiple PDFs into a single document",
    icon: Files,
    path: "/tool/merge-pdf",
    category: "edit",
  },
  {
    id: "split-pdf",
    name: "Split PDF",
    description: "Extract pages from your PDF into separate files",
    icon: FileMinus2,
    path: "/tool/split-pdf",
    category: "edit",
  },
  {
    id: "compress-pdf",
    name: "Compress PDF",
    description: "Reduce the size of your PDF files",
    icon: FileBarChart2,
    path: "/tool/compress-pdf",
    category: "utility",
  },
  {
    id: "delete-pdf-pages",
    name: "Delete PDF Pages",
    description: "Remove unwanted pages from your PDF",
    icon: FileX2,
    path: "/tool/delete-pdf-pages",
    category: "edit",
  },
  {
    id: "crop-pdf",
    name: "Crop PDF",
    description: "Adjust the margins and crop your PDF pages",
    icon: PencilRuler,
    path: "/tool/crop-pdf",
    category: "edit",
    isPro: true,
  },
  {
    id: "rotate-pdf",
    name: "Rotate PDF",
    description: "Rotate pages in your PDF document",
    icon: FileDown,
    path: "/tool/rotate-pdf",
    category: "edit",
  },
  {
    id: "add-page-numbers",
    name: "Add Page Numbers",
    description: "Insert page numbers into your PDF",
    icon: FileDigit,
    path: "/tool/add-page-numbers",
    category: "edit",
    isPro: true,
  },
  {
    id: "watermark-pdf",
    name: "Watermark PDF",
    description: "Add text or image watermarks to your PDF",
    icon: Stamp,
    path: "/tool/watermark-pdf",
    category: "edit",
    isPro: true,
  },
  {
    id: "unlock-pdf",
    name: "Unlock PDF",
    description: "Remove password protection from your PDF",
    icon: Unlock,
    path: "/tool/unlock-pdf",
    category: "utility",
  },
  {
    id: "protect-pdf",
    name: "Protect PDF",
    description: "Add password protection to your PDF",
    icon: Lock,
    path: "/tool/protect-pdf",
    category: "utility",
    isPro: true,
  },
  
  // PDF Conversion Tools
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF to editable Word documents",
    icon: FileText,
    path: "/tool/pdf-to-word",
    category: "convert",
  },
  {
    id: "pdf-to-excel",
    name: "PDF to Excel",
    description: "Convert PDF tables to Excel spreadsheets",
    icon: Table,
    path: "/tool/pdf-to-excel",
    category: "convert",
  },
  {
    id: "pdf-to-ppt",
    name: "PDF to PowerPoint",
    description: "Convert PDF to PowerPoint presentations",
    icon: LayoutPresentationAlt,
    path: "/tool/pdf-to-ppt",
    category: "convert",
    isPro: true,
  },
  {
    id: "pdf-to-jpg",
    name: "PDF to JPG/PNG",
    description: "Convert PDF pages to JPG or PNG images",
    icon: Image,
    path: "/tool/pdf-to-jpg",
    category: "convert",
  },
  {
    id: "html-to-pdf",
    name: "HTML to PDF",
    description: "Convert webpages to PDF documents",
    icon: FileCode,
    path: "/tool/html-to-pdf",
    category: "convert",
    isPro: true,
  },
  {
    id: "pdf-to-html",
    name: "PDF to HTML",
    description: "Convert PDF documents to HTML webpages",
    icon: FileJson,
    path: "/tool/pdf-to-html",
    category: "convert",
    isPro: true,
  },
  {
    id: "ocr-pdf",
    name: "OCR PDF",
    description: "Extract text from scanned PDFs",
    icon: FileScan,
    path: "/tool/ocr-pdf",
    category: "convert",
    isPro: true,
  },
  
  // Other Utilities
  {
    id: "create-pdf",
    name: "Create PDF",
    description: "Create a PDF from scratch",
    icon: FilePlus2,
    path: "/tool/create-pdf",
    category: "utility",
  },
  {
    id: "organize-pdf",
    name: "Organize PDF",
    description: "Reorder, rotate, and delete PDF pages",
    icon: Columns,
    path: "/tool/organize-pdf",
    category: "utility",
    isPro: true,
  },
  {
    id: "form-creator",
    name: "PDF Form Creator",
    description: "Create fillable PDF forms",
    icon: FormInput,
    path: "/tool/form-creator",
    category: "utility",
    isPro: true,
  },
  {
    id: "sign-documents",
    name: "Sign Documents",
    description: "Electronically sign PDF documents",
    icon: FileCheck2,
    path: "/tool/sign-documents",
    category: "utility",
  },
];

export const getToolById = (id: string) => {
  return tools.find(tool => tool.id === id);
};

export const getToolsByCategory = (category: "edit" | "convert" | "utility") => {
  return tools.filter(tool => tool.category === category);
};

export const getAllTools = () => tools;


import React from "react";
import { useNavigate } from "react-router-dom";
import { FileQuestion, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="p-6 bg-docucraft-50 dark:bg-gray-800 rounded-full mb-6">
        <FileQuestion className="h-16 w-16 text-docucraft-600 dark:text-docucraft-400" />
      </div>
      
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          className="bg-docucraft-500 hover:bg-docucraft-600 gap-2"
          onClick={() => navigate("/")}
        >
          <Home size={18} /> Go Home
        </Button>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => navigate("/tools")}
        >
          <Search size={18} /> Browse Tools
        </Button>
      </div>
    </div>
  );
};

export default NotFound404;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronRight, Upload, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tools, Tool } from "@/data/tools";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTools = tools.filter((tool) => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleToolClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-docucraft-50 dark:from-gray-900 dark:to-gray-900 pt-12 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            All-in-One Online PDF Editor & Converter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Edit, convert, sign, and manage PDF documents with our powerful suite of tools. No software installation needed.
          </p>
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a tool..."
                className="pl-10 py-6 text-lg"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              className="bg-docucraft-500 hover:bg-docucraft-600 text-white gap-2"
              size="lg"
              onClick={() => navigate("/tools")}
            >
              View All Tools <ChevronRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-docucraft-500 text-docucraft-600 hover:bg-docucraft-50 dark:border-docucraft-600 dark:text-docucraft-400 gap-2"
              onClick={() => navigate("/pricing")}
            >
              View Pricing <ChevronRight size={18} />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-12">
            <div className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-docucraft-500" />
              <span className="text-sm">Easy Upload</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-docucraft-500" />
              <span className="text-sm">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-docucraft-500" />
              <span className="text-sm">Fast Processing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular PDF Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTools.slice(0, 8).map((tool) => (
              <div
                key={tool.id}
                className={`tool-card cursor-pointer ${tool.isPro ? "tool-card-pro" : ""}`}
                onClick={() => handleToolClick(tool.path)}
              >
                <div className="p-4 bg-docucraft-50 dark:bg-gray-800 rounded-full mb-4">
                  <tool.icon className="h-10 w-10 text-docucraft-600 dark:text-docucraft-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-center text-muted-foreground text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
          {filteredTools.length > 8 && (
            <div className="text-center mt-10">
              <Button
                variant="outline"
                className="border-docucraft-500 text-docucraft-600 hover:bg-docucraft-50 dark:border-docucraft-600 dark:text-docucraft-400 gap-2"
                onClick={() => navigate("/tools")}
              >
                View All Tools <ChevronRight size={18} />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose DocuCraft</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="p-4 bg-docucraft-50 dark:bg-gray-800 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                <Zap className="h-8 w-8 text-docucraft-600 dark:text-docucraft-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-muted-foreground">
                Process your documents in seconds with our optimized tools. No waiting, no delays.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="p-4 bg-docucraft-50 dark:bg-gray-800 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-docucraft-600 dark:text-docucraft-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
              <p className="text-muted-foreground">
                Your files are processed securely in your browser and automatically deleted after processing.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="p-4 bg-docucraft-50 dark:bg-gray-800 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                <Upload className="h-8 w-8 text-docucraft-600 dark:text-docucraft-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy To Use</h3>
              <p className="text-muted-foreground">
                Simple drag-and-drop interface. No technical knowledge required to master our tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-docucraft-500/10 dark:bg-docucraft-500/5 p-10 rounded-2xl max-w-4xl mx-auto border border-docucraft-200 dark:border-docucraft-900">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock unlimited access to all our premium tools with a one-time payment.
              No subscriptions, no recurring fees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-docucraft-600 hover:bg-docucraft-700 text-white gap-2"
                onClick={() => navigate("/pricing")}
              >
                Get Lifetime Access - ₹399 <ChevronRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-docucraft-500 text-docucraft-600 hover:bg-docucraft-50 dark:border-docucraft-600 dark:text-docucraft-400"
                onClick={() => navigate("/tools")}
              >
                Try Free Tools
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

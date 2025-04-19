
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getToolById } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, AlertTriangle, FileText, Download, ChevronRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ToolPage = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [processComplete, setProcessComplete] = useState<boolean>(false);
  
  const tool = getToolById(toolId as string);
  
  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
        <p className="mb-8">The tool you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate("/tools")}>View All Tools</Button>
      </div>
    );
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== "application/pdf" && !tool.id.includes("to-pdf")) {
        toast({
          variant: "destructive",
          title: "Invalid file format",
          description: "Please upload a PDF file",
        });
        return;
      }
      
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type !== "application/pdf" && !tool.id.includes("to-pdf")) {
        toast({
          variant: "destructive",
          title: "Invalid file format",
          description: "Please upload a PDF file",
        });
        return;
      }
      
      setFile(droppedFile);
    }
  };

  const handleProcess = () => {
    if (!file) return;
    
    setProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      setProcessComplete(true);
      toast({
        title: "Processing Complete",
        description: `Your ${file.name} has been processed successfully!`,
      });
    }, 2000);
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your processed file is downloading...",
    });
    
    // Reset the state to allow new uploads
    setTimeout(() => {
      setFile(null);
      setProcessComplete(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-docucraft-50 dark:bg-gray-800 rounded-full">
            <tool.icon className="h-8 w-8 text-docucraft-600 dark:text-docucraft-400" />
          </div>
          <h1 className="text-3xl font-bold">{tool.name}</h1>
          {tool.isPro && (
            <span className="bg-docucraft-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              PRO
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground mb-8 text-lg">{tool.description}</p>
        
        {tool.isPro && (
          <Alert className="mb-8 border-docucraft-500/30 bg-docucraft-500/5">
            <AlertTriangle className="h-4 w-4 text-docucraft-500" />
            <AlertDescription>
              This is a Pro feature. <a href="/pricing" className="text-docucraft-600 dark:text-docucraft-400 font-medium underline">Upgrade to Pro</a> for unlimited access.
            </AlertDescription>
          </Alert>
        )}
        
        {!file && (
          <div 
            className="border-2 border-dashed border-border rounded-xl p-12 text-center cursor-pointer hover:border-docucraft-400 transition-colors"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept=".pdf"
              onChange={handleFileUpload}
            />
            <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-medium mb-2">Upload your file</h3>
            <p className="text-muted-foreground mb-4">
              Drag & drop your file here or click to browse
            </p>
            <Button className="bg-docucraft-500 hover:bg-docucraft-600">
              Select File
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Max file size: {tool.isPro ? "100MB" : "10MB"}
            </p>
          </div>
        )}
        
        {file && !processComplete && (
          <div className="border rounded-xl p-8 bg-card">
            <div className="flex items-center gap-4 mb-6">
              <FileText className="h-10 w-10 text-docucraft-600 dark:text-docucraft-400" />
              <div className="flex-1">
                <p className="font-medium truncate">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(file.size / 1048576).toFixed(2)} MB
                </p>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setFile(null)}
              >
                Change
              </Button>
            </div>
            <Button
              className="w-full bg-docucraft-500 hover:bg-docucraft-600"
              disabled={processing}
              onClick={handleProcess}
            >
              {processing ? "Processing..." : `Process with ${tool.name}`}
            </Button>
          </div>
        )}
        
        {processComplete && (
          <div className="border rounded-xl p-8 bg-card">
            <div className="flex items-center gap-4 mb-6">
              <FileText className="h-10 w-10 text-docucraft-600 dark:text-docucraft-400" />
              <div className="flex-1">
                <p className="font-medium truncate">processed_{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  Ready for download
                </p>
              </div>
            </div>
            <Button
              className="w-full bg-docucraft-500 hover:bg-docucraft-600 flex items-center gap-2 justify-center"
              onClick={handleDownload}
            >
              <Download size={18} /> Download Result
            </Button>
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => {
                setFile(null);
                setProcessComplete(false);
              }}
            >
              Process Another File
            </Button>
          </div>
        )}
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">How to use {tool.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="rounded-full w-8 h-8 bg-docucraft-500 text-white flex items-center justify-center mb-4 font-semibold">
                1
              </div>
              <h3 className="font-medium mb-2">Upload your file</h3>
              <p className="text-sm text-muted-foreground">
                Select or drag & drop your PDF file into the upload area.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="rounded-full w-8 h-8 bg-docucraft-500 text-white flex items-center justify-center mb-4 font-semibold">
                2
              </div>
              <h3 className="font-medium mb-2">Process your file</h3>
              <p className="text-sm text-muted-foreground">
                Click the process button and let our tools do the work.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="rounded-full w-8 h-8 bg-docucraft-500 text-white flex items-center justify-center mb-4 font-semibold">
                3
              </div>
              <h3 className="font-medium mb-2">Download result</h3>
              <p className="text-sm text-muted-foreground">
                Download your processed file when it's ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tools, Tool } from "@/data/tools";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const AllTools = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filterTools = (tools: Tool[], query: string) => {
    return tools.filter((tool) =>
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleToolClick = (path: string) => {
    navigate(path);
  };

  const editTools = tools.filter((tool) => tool.category === "edit");
  const convertTools = tools.filter((tool) => tool.category === "convert");
  const utilityTools = tools.filter((tool) => tool.category === "utility");

  const filteredEditTools = filterTools(editTools, searchQuery);
  const filteredConvertTools = filterTools(convertTools, searchQuery);
  const filteredUtilityTools = filterTools(utilityTools, searchQuery);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">All PDF Tools</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Discover our complete collection of tools to edit, convert, and manage your PDF documents with ease.
      </p>
      
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12 relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a tool..."
          className="pl-10 py-6 text-lg"
        />
      </div>
      
      {/* Tools Categories */}
      <Tabs defaultValue="all" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="all">All Tools</TabsTrigger>
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="convert">Convert</TabsTrigger>
          <TabsTrigger value="utility">Utilities</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...filteredEditTools, ...filteredConvertTools, ...filteredUtilityTools].map((tool) => (
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
        </TabsContent>
        
        <TabsContent value="edit">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredEditTools.map((tool) => (
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
        </TabsContent>
        
        <TabsContent value="convert">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredConvertTools.map((tool) => (
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
        </TabsContent>
        
        <TabsContent value="utility">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredUtilityTools.map((tool) => (
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AllTools;

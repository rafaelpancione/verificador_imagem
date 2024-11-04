import React, { useState } from 'react';
import { FileCheck, Download, FolderOpen } from 'lucide-react';
import { ImageChecker } from './components/ImageChecker';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ImageChecker />
      </main>
      <Footer />
    </div>
  );
}

export default App;
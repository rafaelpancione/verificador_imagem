import React, { useState } from 'react';
import { FileCheck } from 'lucide-react';
import { FolderOpen, Download, RefreshCw } from 'lucide-react';
import { ResultsTable } from './ResultsTable';
import { processDirectory } from '../utils/imageProcessor';
import type { ImageResult } from '../types';

export function ImageChecker() {
  const [results, setResults] = useState<ImageResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [directoryHandle, setDirectoryHandle] = useState<FileSystemDirectoryHandle | null>(null);
  const [noIssuesMessage, setNoIssuesMessage] = useState(false);

  const handleDirectorySelect = async () => {
    try {
      const handle = await window.showDirectoryPicker();
      setDirectoryHandle(handle);
    } catch (error) {
      console.error('Erro ao selecionar diretório:', error);
    }
  };

  const handleVerification = async () => {
    if (!directoryHandle) return;

    setIsProcessing(true);
    setNoIssuesMessage(false); // Resetar mensagem antes da nova verificação
    try {
      const imageResults = await processDirectory(directoryHandle);
      setResults(imageResults);
      if (imageResults.length === 0) {
        setNoIssuesMessage(true); // Ativar a mensagem se não houverem imagens com problemas
      }
    } catch (error) {
      console.error('Erro ao processar diretório:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExport = () => {
    if (results.length === 0) return;

    const csv = [
      ['Nome do Arquivo', 'Caminho', 'Dimensões'],
      ...results.map(result => [
        result.name,
        result.path,
        `${result.dimensions.width}x${result.dimensions.height}`
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'imagens_nao_conformes.csv';
    link.click();
  };

  const handleNewAnalysis = () => {
    setResults([]);            // Limpa os resultados
    setDirectoryHandle(null);   // Reseta o diretório selecionado
    setNoIssuesMessage(false);  // Reseta a mensagem
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
      <FileCheck className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-primary">
            Verificador de Dimensões de Imagens Múltiplas de 4.
          </h1>
          </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDirectorySelect}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FolderOpen className="h-5 w-5" />
              Selecionar Diretório
            </button>

            <button
              onClick={handleVerification}
              disabled={!directoryHandle || isProcessing}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-header text-white rounded-lg hover:bg-header transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <span className="animate-pulse">Processando...</span>
              ) : (
                <>Verificar Imagens</>
              )}
            </button>

            {results.length > 0 && (
              <>
                <button
                  onClick={handleExport}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  Exportar Resultados
                </button>
                
                <button
                  onClick={handleNewAnalysis}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <RefreshCw className="h-5 w-5" />
                  Nova Análise
                </button>
              </>
            )}
          </div>

          {directoryHandle && (
            <p className="text-sm text-gray-600">
              Diretório selecionado: {directoryHandle.name}
            </p>
          )}
        </div>
      </div>

      {results.length > 0 ? (
        <ResultsTable results={results} />
      ) : (
        noIssuesMessage && (
          <p className="text-sm text-gray-600">
            Verificação concluída, não foram encontradas imagens com problemas ou o diretório informado não possui imagens.
          </p>
        )
      )}
    </div>
  );
}

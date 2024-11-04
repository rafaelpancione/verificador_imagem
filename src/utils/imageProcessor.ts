import type { ImageResult } from '../types';

async function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

function isMultipleOf4(num: number): boolean {
  return num % 4 === 0;
}

async function* getFilesRecursively(
  dirHandle: FileSystemDirectoryHandle,
  path = ''
): AsyncGenerator<{ file: File; path: string }> {
  for await (const entry of dirHandle.values()) {
    const newPath = path ? `${path}/${entry.name}` : entry.name;

    if (entry.kind === 'directory') {
      const newDirHandle = await dirHandle.getDirectoryHandle(entry.name);
      yield* getFilesRecursively(newDirHandle, newPath);
    } else if (entry.kind === 'file') {
      const file = await entry.getFile();
      if (file.type.startsWith('image/')) {
        yield { file, path: newPath };
      }
    }
  }
}

export async function processDirectory(
  dirHandle: FileSystemDirectoryHandle
): Promise<ImageResult[]> {
  const results: ImageResult[] = [];

  for await (const { file, path } of getFilesRecursively(dirHandle)) {
    try {
      const dimensions = await getImageDimensions(file);
      
      if (!isMultipleOf4(dimensions.width) || !isMultipleOf4(dimensions.height)) {
        results.push({
          name: file.name,
          path,
          dimensions,
        });
      }
    } catch (error) {
      console.error(`Erro ao processar ${file.name}:`, error);
    }
  }

  return results;
}
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-header text-white py-4 border-t border-gray-300 w-full sticky bottom-0">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gameficare Studios. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

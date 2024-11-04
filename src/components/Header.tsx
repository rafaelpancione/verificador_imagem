import React from 'react';

import logo from '../images/logo.svg';

export function Header() {
  return (
    <header className="bg-header shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* Logo da startup */}
          <img src={logo} alt="Logo Gameficare Studio" className="h-10 w-30" />
          
        </div>
      </div>
    </header>
  );
}

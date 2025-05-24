import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-nasteaBeige-light/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/nastea-logo.png" alt="Nastea Logo" className="h-14 w-auto" />
            </a>
          </div>
          {/* Future navigation links can be added here if needed.
              For now, we'll keep it clean.
           */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white p-3 text-center">
      <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
import React, { useEffect } from 'react';
import 'fontsource-roboto';

export default function App({ children }) {
  useEffect(() => {
    document.title = 'Reminders App'
  });
  return (
    <div className="home-app">
      <div className="page-container">{children}</div>
    </div>
  );
}

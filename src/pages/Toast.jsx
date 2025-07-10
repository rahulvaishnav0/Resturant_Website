import React from 'react';

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-6 right-6 bg-green-600 text-white py-2 px-4 rounded-md shadow-lg animate-bounce z-50">
      {message}
    </div>
  );
}

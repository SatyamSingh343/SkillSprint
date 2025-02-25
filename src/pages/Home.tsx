import React from 'react';

export function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to MyApp</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Features</h2>
          <p className="text-gray-600">
            Discover the amazing features that make our application stand out from the rest.
            Built with modern technologies and designed for the best user experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Get Started</h2>
          <p className="text-gray-600">
            Ready to begin? Follow our simple setup process and start using our application
            today. No complex configuration required.
          </p>
        </div>
      </div>
    </div>
  );
}
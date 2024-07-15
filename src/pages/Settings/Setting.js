// src/Settings.js
import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    metaTitle: '',
    metaDescription: '',
    phoneNumbers: '',
    emailAddress: '',
    whatsappSupport: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Save the settings (e.g., send to API)
    console.log('Settings saved:', settings);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">General</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="metaTitle">
            Meta Title
          </label>
          <input
            type="text"
            id="metaTitle"
            name="metaTitle"
            value={settings.metaTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="metaDescription">
            Meta Description
          </label>
          <textarea
            id="metaDescription"
            name="metaDescription"
            value={settings.metaDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumbers">
            Phone Numbers
          </label>
          <input
            type="text"
            id="phoneNumbers"
            name="phoneNumbers"
            value={settings.phoneNumbers}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="emailAddress">
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={settings.emailAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="whatsappSupport">
            WhatsApp Support
          </label>
          <input
            type="text"
            id="whatsappSupport"
            name="whatsappSupport"
            value={settings.whatsappSupport}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;

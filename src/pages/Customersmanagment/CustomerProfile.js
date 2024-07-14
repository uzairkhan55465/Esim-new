import React, { useState } from 'react';

const CustomerProfile = () => {
  const [formData, setFormData] = useState({
    id: '',
    companyCode: '',
    title: '',
    companyType: '',
    taxAdministration: '',
    taxNumber: '',
    ibanOwner: '',
    iban: '',
    address: '',
    country: '',
    city: '',
    district: '',
    telephone: '',
    email: '',
    note: '',
    web: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData); // Log all form data to console
    // Implement your save logic here
    // This function will be used when you integrate the form fields
    // with the state and update logic for customers
  };

  return (
    <div className="p-5" style={{
        backgroundColor:"white",
        borderRadius:"10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",        
        }}>
      <h1 className="text-xl font-bold mb-4">Customer Management</h1>
      <form onSubmit={handleSave} className="bg-offwhite rounded p-4 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="id" className="block mb-1">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyCode" className="block mb-1">Company Code</label>
            <input
              type="text"
              id="companyCode"
              name="companyCode"
              value={formData.companyCode}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyType" className="block mb-1">Company Type</label>
            <input
              type="text"
              id="companyType"
              name="companyType"
              value={formData.companyType}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="taxAdministration" className="block mb-1">Tax Administration</label>
            <input
              type="text"
              id="taxAdministration"
              name="taxAdministration"
              value={formData.taxAdministration}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="taxNumber" className="block mb-1">Tax Number</label>
            <input
              type="text"
              id="taxNumber"
              name="taxNumber"
              value={formData.taxNumber}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ibanOwner" className="block mb-1">IBAN Owner</label>
            <input
              type="text"
              id="ibanOwner"
              name="ibanOwner"
              value={formData.ibanOwner}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="iban" className="block mb-1">IBAN</label>
            <input
              type="text"
              id="iban"
              name="iban"
              value={formData.iban}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block mb-1">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block mb-1">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="district" className="block mb-1">District</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telephone" className="block mb-1">Telephone</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="note" className="block mb-1">Note</label>
            <input
              type="text"
              id="note"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="web" className="block mb-1">Web</label>
            <input
              type="text"
              id="web"
              name="web"
              value={formData.web}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary center" style={{ padding: "10px", borderRadius: "10px", marginTop: "20px", backgroundColor: "#007bff", borderColor: "#007bff", color: "#fff", fontWeight: "bold" }}>Save</button>
      </form>

    </div>
  );
};

export default CustomerProfile;

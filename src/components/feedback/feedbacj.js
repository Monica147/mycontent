import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Dropdown = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Define the mapping of batches and domains to routes
    const routeMap = {
      '20': {
        page1: '/page1',
        page2: '/page2',
        page3: '/page3',
        page4: '/page4',
        page5: '/page5',
        page6: '/page6',
        page7: '/page7',
        page8: '/page8',
        page9: '/page9'
      },
      '21': {
        page10: '/page10',
        'page1': '/Page10' 
      }
    };

    // Check if selected batch and domain combination exists in the route map
    const route = routeMap[selectedBatch]?.[selectedDomain];
    if (route) {
      navigate(route);
    }
  }, [selectedBatch, selectedDomain, navigate]);

  const handleBatchChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedBatch(selectedValue);
  };

  const handleDomainChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDomain(selectedValue);
  };

  return (
    <div style={{ background: 'white', padding: '10px', borderRadius: '5px', height: '100vh' }}>
      <label className='text-dark' htmlFor="batchInput">Enter the batch:</label>
      <input
        id="batchInput"
        className='text-dark'
        type="text"
        value={selectedBatch}
        onChange={handleBatchChange}
        style={{ width: '200px', padding: '5px', borderRadius: '5px', marginRight: '10px' }}
      />
      <label className='text-dark' htmlFor="domainDropdown">Select the Domain:</label>
      <select
        className='subdomain_page1'
        id="domainDropdown"
        placeholder='Domain'
        value={selectedDomain}
        onChange={handleDomainChange}
        style={{ width: '200px', padding: '5px', borderRadius: '5px', marginRight: '10px' }}
      >
        <option value="" disabled selected hidden>
          Sub Domain
        </option>
        <option value="page1">SP-FS</option>
        <option value="page2"> SP-WD</option>
        <option value="page3">SP-DA</option>
        <option value="page4">SP-DS</option>
        <option value="page5">SP-ST</option>
        <option value="page6"> IMS-DevOps</option>
        <option value="page7">IMS-Cyber Security</option>
        <option value="page8">SAP-ABAP, HANA</option>
        <option value="page9">FICCO</option>
      </select>
    </div>
  );
};

export default Dropdown;

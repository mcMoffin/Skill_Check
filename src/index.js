import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './style.css';

import HeaderBar from './components/HeaderBar/HeaderBar';
import TabMenue from './components/TabMenue/TabMenue';
import ListCard from './components/ListCard/ListCard';
import Footer from './components/Footer/Footer';

const App = () => {

  const live_items = [
    {
      Status: 'Active',
      Domain: 'loremipsumdolorsitamet.tiiny.UK',
      Modified: '2024-02-14 12:00:00'
    },
    {
      Status: 'Private',
      Domain: 'loremipsumdolorsitamet.international.pdf',
      Modified: '2024-02-14 12:00:00'
    },
    {
      Status: 'Private',
      Domain: 'loremipsumdolorsitamet.ca',
      Modified: '2024-02-14 12:00:00'
    },
    {
      Status: 'Private',
      Domain: 'loremipsumdolorsitamet.in',
      Modified: '2024-02-14 12:00:00'
    },
    {
      Status: 'Active',
      Domain: 'loremipsumdolorsitamet.org.gov',
      Modified: '2024-02-14 12:00:00'
    },
    {
      Status: 'Private',
      Domain: 'loremipsum.tiiny.pdf',
      Modified: '2024-02-14 12:00:00'
    },
    {
      Status: 'Active',
      Domain: 'loremipsumdolorsitametumdolorsi.tiiny.site',
      Modified: '2024-02-14 12:00:00'
    },
    {
      Status: 'Private',
      Domain: 'Sumdolorsitametloremip.tiiny.pdf',
      Modified: '2024-02-14 12:00:00'
    },
    {
      Status: 'Active',
      Domain: 'Emipsumdolorsitametlor.tiiny.pdf',
      Modified: '2024-02-14 12:00:00'
    }
  ];

  const domains_items = [
    {
      Status: 'Active',
      Domain: 'Ipsumdolorsitamelorem.tiiny.site',
      Modified: '2024-02-14 12:00:00',
      Actions: {},
    },
    {
      Status: 'Disabled',
      Domain: 'Ipsumdolorsitamelorem.tiiny.site',
      Modified: '2024-02-14 12:00:00',
      Actions: {},
    },
  ];

  return (
    <React.StrictMode>
      <HeaderBar/>

      <section className="main_content_wrapper">
        <div className="main_content_header">
          <h1>My Account</h1>

          <TabMenue />
        </div>

        <ListCard name='liveSite' items={live_items}>Live Site</ListCard>
        <ListCard name='domains' items={domains_items}>Custom Domains</ListCard>
      </section>

      <Footer/>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();

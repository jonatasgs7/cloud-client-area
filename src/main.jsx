import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/reset.css'
import './assets/css/globals.css'
import Header from './components/Header'
import Totals from './components/Totals'
import BulkActions from './components/BulkActions'
import Table from './components/Table'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header name="Nuvem Alterdata" />
    <Totals />
    <BulkActions />
    <Table />
  </React.StrictMode>
)
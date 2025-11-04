import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { gtiCard } from './components/SidebarConfig';
import './styles/Sidebar.css';
import Intro from './pages/Intro';
import Objetivo from './pages/Objetivo';
import Plano from './pages/Plano';
import Equip from './pages/Equip';
import Equipe from './pages/Equipe';
import Internet from './pages/Internet';
import Servers from './pages/Servers';
import Soft from './pages/Soft';
import Audit from './pages/Audit';
import Conclusion from './pages/Conclusion';
import All from './pages/Allpages';
import Header from './components/Header';


const App = () => {
  return (
    <Router>
      <div className="app-layout">

        {/* Sidebar: Fixa e fora do Routes, pois é um componente de layout */}
        <Sidebar />

        {/* main-content: Deslocado pela margem-esquerda no CSS */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/objetivo" element={<Objetivo />} />
            <Route path="/plano" element={<Plano />} />
            <Route path="/equip" element={<Equip />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/soft" element={<Soft />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/all" element={<All />} />
            <Route path="/Header" element={<Header />} />

            {/* GTI card */}
            <Route
              path={gtiCard.path}
              element={<Equipe />} // ou a página que quiser associar ao card
            />

            {/* Página não encontrada */}
            <Route path="*" element={<h1>Página não encontrada</h1>} />
          </Routes>

        </main>
      </div>
    </Router>
  );
};

export default App;
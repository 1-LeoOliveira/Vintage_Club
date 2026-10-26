import { Route, Routes } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RolarAoTopo } from '@/components/RolarAoTopo';
import Home from '@/routes/Home';
import Colecoes from '@/routes/Colecoes';
import Colecao from '@/routes/Colecao';
import Peca from '@/routes/Peca';
import NaoEncontrada from '@/routes/NaoEncontrada';

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <RolarAoTopo />
      <Header />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colecoes" element={<Colecoes />} />
          <Route path="/colecao/:id" element={<Colecao />} />
          <Route path="/peca/:id" element={<Peca />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

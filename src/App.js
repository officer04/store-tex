import { useState } from 'react';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [modal, setModal] = useState(false);

  const onClickModal = () => {
    setModal(true);
  };
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AppRoutes onClickModal={onClickModal} modal={modal} setModal={setModal} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

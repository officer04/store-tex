import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import SinglProduct from '../Products/SingleProduct';
import UserFormLogin from '../user/UserFormLogin';
import UserFormSignUp from '../user/UserFormSignUp';
import News from '../News/News';
import Stocks from '../Stock/Stocks';


const AppRoutes = ({onClickModal, modal, setModal}) => {
  return (
    <Routes>
      <Route path="/products" element={<Home/>} />
      <Route path="/login" element={<UserFormLogin/>} />
      <Route path="/register" element={<UserFormSignUp/>} />
      <Route path="/" element={<Stocks/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/products/:id" element={<SinglProduct modal={modal} onClickModal={onClickModal} setModal={setModal} /> }></Route>
    </Routes>
  );
};

export default AppRoutes;

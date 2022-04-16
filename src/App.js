import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Blog from './pages/Blog/Blog/Blog';
import About from './pages/About/About';
import Login from './pages/Account/Login/Login';
import Signup from './pages/Account/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
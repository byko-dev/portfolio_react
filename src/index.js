import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.scss';
import MainPage from './pages/MainPage';
import reportWebVitals from './reportWebVitals';
import "aos/dist/aos.css";
import Aos from "aos";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));

Aos.init({duration: 2000});

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

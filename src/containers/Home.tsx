import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Home.css';



const Home: React.FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light-subtle mb-3">
                <div className="container-fluid">
                    <span className="text-uppercase text-logo">ПИК</span>
                    <ul className="navbar-nav mr-auto text-uppercase">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="continue" className="nav-link">contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about-us" className="nav-link">about us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link">profile</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <div className="sale-block row justify-content-center">
                    <div className="sela1 col-3 m-2">
                        <strong className="d-block text-white fs-1" >Кешбек 7%</strong>
                        <span>Осталось 136 квартир из 300</span>
                    </div>
                    <div className=" sela2 col-3 m-2">
                        <strong className="d-block text-white fs-2">Специальные цены</strong>
                        <span className="bg-white rounded-4 p-2 mt-3 fs-3">до 15-Февраля</span>
                    </div>
                    <div className=" sela3 col-3 m-2 fs-4" >
                        <span className="bg-body-tertiary">Ипотека для всех от 8% низким первоначальным взносом</span>

                    </div>
                </div>

            </main>
            <Outlet/>
        </>
    );
};

export default Home;
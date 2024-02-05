import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Home.css';



const Home: React.FC = () => {
    return (
        <>
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
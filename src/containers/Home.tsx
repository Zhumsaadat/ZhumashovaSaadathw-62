import React from 'react';
import {  Outlet } from 'react-router-dom';
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

                <div className="news text-center w-75 mx-auto my-5 py-5">
                    <h5 className="fs-1 m-2">Ипотека с низкой ставкой, специальные цены и кэшбэк</h5>
                    <p className="m-2">Продолжаем активно работать и запускать новые программы, чтобы покупать квартиры было выгодно и просто. Сниженная ставка по ипотеке, рассрочка или скидка — подберите условия, которые подойдут именно вам.</p>
                     <span className="fw-bold d-block m-2">Рассрочка без переплат</span>
                    <p className="m-2">Внесите первый платёж 20% или 30% — это ваш первоначальный взнос. Остаток нужно внести только через 3 или 6 месяцев в зависимости от первого взноса. За это время вы успеете продать свою старую квартиру и внести оставшуюся сумму или дождаться  окончания срока по вкладу, чтобы не потерять проценты.</p>

                </div>

                <div className="newProject  my-5 mx-auto">
                    <h4 className="newProject-title m-5">Матвеевский кластер</h4>
                    <span className="m-5">Новый формат жилого пространства с атмосферой для жизни и развития</span>
                    <span className="text-white d-block m-5">M.Аминевское</span>
                </div>
            </main>
            <Outlet/>
        </>
    );
};

export default Home;
import React from 'react';
import "./Profile.css"

const Profile = () => {
    return (
        <div className="text-center">
            <h2 className="fs-1 text-center my-5">Новостройки в Москве и области</h2>

            <p className="border border-black p-3 d-inline-block rounded-5">63 проекта 22495 квартир</p>
            <div className="d-flex justify-content-between mx-4 text-center align-items-center mb-5">
                <p>
                    <span className="border border-black p-3 d-inline-block rounded-5 mx-2">Cтудия</span>
                    <span className="border border-black p-2 d-inline-block rounded-5 mx-2">1</span>
                    <span className="border border-black p-2 d-inline-block rounded-5 mx-2">2</span>
                    <span className="border border-black p-2 d-inline-block rounded-5 mx-2">3+</span>
                </p>
                <span className="border border-black py-2 px-5  d-inline-block rounded-5">Карта</span>
                <span className="border border-black p-2 d-inline-block rounded-5">Условия покупки</span>
                <span className="border border-black p-2 d-inline-block rounded-5">Все фильтры</span>
            </div>
            <div className="row mt-5 text-center">
                <div className="card col-3">
                    <img src="https://cdn.pik.ru/articles/72390/2022/05/27/785326a25e6d14c5f532168e1cd4e678.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            Метро Славянский булвьар
                        </div>
                </div>
                <div className="card col-3">
                    <img src="https://cdn.pik.ru/articles/72390/2022/05/27/785326a25e6d14c5f532168e1cd4e678.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        Метро Смоленская
                    </div>
                </div>
                <div className="card col-3">
                    <img src="https://cdn.pik.ru/articles/72390/2022/05/27/785326a25e6d14c5f532168e1cd4e678.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        Метро Арбат
                    </div>
                </div>
                <div className="card col-3">
                    <img src="https://cdn.pik.ru/articles/72390/2022/05/27/785326a25e6d14c5f532168e1cd4e678.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        Метро Парк культураы
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
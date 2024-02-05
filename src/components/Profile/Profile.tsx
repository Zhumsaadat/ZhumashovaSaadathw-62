import React from 'react';
import "./Profile.css";
import { PROFILES } from '../../constants';

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
            <div className="row mt-5 justify-content-center">
                {PROFILES.map(profile => (
                    <div className="card col-3 mx-2">
                        <img src={profile.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            Метро {profile.location}
                        </div>
                    </div>
                ))
                }


            </div>
        </div>
    );
};

export default Profile;
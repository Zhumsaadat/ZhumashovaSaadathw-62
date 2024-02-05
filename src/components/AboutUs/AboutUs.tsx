import React from 'react';
import './AboutUs.css';

const AboutUs:React.FC = () => {
    return (
        <div className="m-3">
            <h2 className="fs-1">Видение и миссия</h2>
            <p className="w-50 mb-5">Мы создаем передовые технологические сервисы и продукты, позволяющие нам находить инновационные решения во всех сферах недвижимости. Наша миссия — изменить повседневность, создав более комфортные, безопасные и экологичные условия для жизни.</p>
            <div className="mt-5">
                <h4>Отчетность</h4>
                <div className="row">
                    <div className='file col-5 border border-black py-2 m-2'>
                        Cокращенная консолидировананная промежуточная финансовая отчетность за 1пол 2023г
                    </div>
                    <div className='file col-5 border border-black py-2 m-2'>
                        Cокращенная консолидировананная промежуточная финансовая отчетность за 1пол 2023г
                    </div>
                    <div className='file col-5 border border-black py-2 m-2'>Консолидировананная  финансовая отчетность по МСФПО за 2021г</div>
                    <div className='file col-5 border border-black py-2 m-2'>Консолидировананная  финансовая отчетность по МСФПО за 2020г</div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
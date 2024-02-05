import React from 'react';
import { Link } from 'react-router-dom';

const Contacts:React.FC = () => {
    return (
        <div className="row justify-content-between mt-3">
           <div className="col-4 text-center">
               <span className="bg-body-secondary rounded-4 p-2 ">Доступно в Google Play</span>
           <br className="m-2"/>
               <span className="bg-body-secondary rounded-4 p-2 ">Загрузите в App Store</span>
               <br className="m-2"/>
               <img src="data:image/png;base64,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" alt="qr-code"/>
           </div>
            <div className="col-4 text-center">
                <h4>Связаться с нами</h4>
                <span className="d-block fs-2 my-3 " >+7 (495) 266 19 71</span>
                <span className="bg-body-secondary rounded-4 p-3 ">Перезвоните мне</span>
            </div>
            <div className="col-4 text-center">
               <h4>Мы в соцсетях</h4>
                <Link className="d-block text-decoration-none text-black m-2" to="https://www.youtube.com/c/gkpik" >YouTube</Link>
                <Link className="d-block text-decoration-none text-black m-2" to="https://vk.com/pikru" >ВКонтакте</Link>
                <Link className="d-block text-decoration-none text-black m-2" to="https://t.me/pik_ru" >Telegram</Link>
            </div>
        </div>
    );
};

export default Contacts;
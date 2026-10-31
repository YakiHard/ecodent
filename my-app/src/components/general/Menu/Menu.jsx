import './Menu.css'
import { SiVk } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Button from '../../UI/Button/Button'
import { useEffect, useState } from 'react';

function Menu({closeForm}) {
    const [isBurger, setBurger] = useState(false)

    const OpenMenu = () => {
        setBurger(!isBurger)
    }

    useEffect(() => {
        if(isBurger) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ''
        }
    }, [isBurger])

    const ScrollSection = (id) => {
        const element = document.getElementById(id)
        if(element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
        setBurger(false)
    }

    return (
        <section className='menu'>
            <div className="menu-container">
                <div className="menu-lft">
                    <img src="logo.png" />
                    <div className="logo-text">
                        <h2>ЭКОДЕНТ</h2>
                        <p>стоматологическая клиника</p>
                    </div>
                    <div className={`menu-nav-mobile ${isBurger ? 'active' : ''}`}>
                        <div className="exitIcon">
                            <RxCross2 onClick={OpenMenu}/>
                        </div>
                        <ul className="menu-nav">
                            <li onClick={() => ScrollSection('leader')}>О клинике</li>
                            <li onClick={() => ScrollSection('doctors')} >Врачи</li>
                            <li>Вакансии</li>
                            <li>Статьи</li>
                            <li onClick={() => ScrollSection('services')}>Услуги</li>
                            <li>Контакты</li>
                        </ul>
                        <div className="menu-contacts">
                            <div className="num">
                                <p>+7 (953) 019-73-74</p>
                                <p>ПН-ПТ: 08 - 20; СБ: 09 - 15; ВС: выходной</p>
                            </div>
                            <div className="messager">
                                <SiVk />
                                <FaTelegram />
                            </div>
                            <Button onClick={closeForm}>Заказать звонок</Button>
                        </div>  
                    </div>
                </div>
                <div className="menu-rth">
                    <div className="num">
                        <p>+7 (953) 019-73-74</p>
                        <p>ПН-ПТ: 08 - 20; СБ: 09 - 15; ВС: выходной</p>
                    </div>
                    <div className="messager">
                        <SiVk />
                        <FaTelegram />
                    </div>
                    <Button onClick={closeForm}>Заказать звонок</Button>
                </div>  
                <div className="burger" onClick={OpenMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>          
        </section>
    )
}

export default Menu
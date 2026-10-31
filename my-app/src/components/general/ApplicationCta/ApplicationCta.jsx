import { useState } from "react"
import "./ApplicationCta.css"
import Button from "../../UI/Button/Button.jsx"
import { RxCross2 } from "react-icons/rx";

function ApplicationCta({closeForm, isOpen}) {
    const[isTopic, setTopic] = useState("")
    const[fio, setFio] = useState("")
    const[tel, setTel] = useState("")
    const[agree, setAgree] = useState("")
    const[error, setError] = useState(false)
    const handleOverlayClick = (event) => {
        if(event.target === event.currentTarget) {
            closeForm()
        }
    }
    const check = () => {
        if(!fio || !tel) {
            setError(true)
        } else {
            alert("Прошел проверку")
        }
    }
    return (
        <section className={`modal ${isOpen? 'active' : ""}`} onClick={handleOverlayClick}>
            <div className="cta">
                <RxCross2 onClick={closeForm}/>
                <h2>Записаться на лечение</h2>
                <p>Заполните форму, мы свяжемся с вами и запишем к нужному специалисту</p>
                <div className="form-cta">
                    <select 
                        value={isTopic}
                        onChange={(e) => setTopic(e.target.value)}
                    >
                        <option value="" disabled>Что беспокоит?</option>
                        <option value="consultation">Первичная консультация</option>
                        <option value="implantation">Первчиная имплантация</option>
                        <option value="pain">Острая боль</option>
                        <option value="other">Другое</option>
                    </select>
                    <input type="text" placeholder="ФИО" onChange={(e) => setFio(e.target.value)}/>
                    <input type="tel" placeholder="Телефон" onChange={(e) => setTel(e.target.value) } />
                    <label className="agree">
                        <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} />
                        <p>Я информирован, что Экодент хранит персональные данные согласно Политике конфиденциальности</p>
                    </label>
                    {error && (
                        <div className="errorMessage">
                            <p>Заполните все обязательные поля</p>
                        </div>

                        
                    )}
                    <Button className="btnCta" disabled={!agree} onClick={check}>Отправить</Button>
                </div>
            </div>
        </section>
        
    )
}

export default ApplicationCta
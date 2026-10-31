import "./Doctors.css"
import Button from "../../../UI/Button/Button.jsx"

function Doctors({data, openForm}) {
    
    const BtnLeft = () => {
        document.querySelector('.doctors-items').scrollBy({
            left: -340,
            behavior: 'smooth'
        })   
    }

    const BtnRight = () => {
        document.querySelector('.doctors-items').scrollBy({
            left: 340,
            behavior: 'smooth'
        })   
    }

    return (
        <section className="doctors" id="doctors">
            <h1>наши специалисты</h1>
            <p>У нас работают только лучшие специалисты с многолетней практикой и доказанным опытом. Врачи клиники «Экодент» находят индивидуальный подход к каждому, обеспечивая заботу и внимание как взрослым, так и детям.</p>
            <div className="doctors-items">
                {data.map((doctor) => (
                    <div key={doctor.id} className="doctor-item">
                        <img src={doctor.img} />
                        <div className="doctor-text">
                            <p>{doctor.specialization}</p>
                            <p>{doctor.name}</p>
                            <Button onClick={openForm}>Запись онлайн</Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <Button onClick={BtnLeft}>&lt;</Button>
                <Button onClick={BtnRight}>&gt;</Button>
            </div>
            
        </section>
    )
}

export default Doctors
import "./Footer.css"

function Footer() {
    return (
        <section className="footer">
            <div className="footer-lft">
                <div className="name">
                    <img src="logoWhite.png" />
                    <div className="name-text">
                        <h2>ЭКОДЕНТ</h2>
                        <p>стоматологическая клиника</p>
                    </div>
                </div>
                <div className="footer-nav">
                    <p>Навигация</p>
                    <ul className="navigation">
                        <li>О клинике</li>
                        <li>Врачи</li>
                        <li>Вакансии</li>
                        <li>Услуги</li>
                        <li>Цены</li>
                        <li>Акции</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
            <div className="footer-rht">
                
            </div>
        </section>
    )
}

export default Footer
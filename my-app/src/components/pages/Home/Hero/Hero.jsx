import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-lft">
                    <h1>КЛИНИКА <br/>«ЭКОДЕНТ» <br />В ЧЕБОКСАРАХ </h1>
                    <p>Современная стоматология с опытными врачами и индивидуальным подходом к каждому пациенту.</p>
                    <div className="hero-btn">
                        <button>Записаться на приём</button>
                        <button>Позвонить в клинику</button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h1>15+</h1>
                            <p>лет опыта</p>
                        </div>
                        <div className="stat-item">
                            <h1>10к</h1>
                            <p>довольных клиентов</p>
                        </div>
                        <div className="stat-item">
                            <h1>20+</h1>
                            <p>опытных врачей</p>
                        </div>
                    </div>
                </div>
                <div className="hero-rth">
                    <img src="tooth.png" />
                </div> 
                <img className="block1" src="block1.png" />
                <img className="block2" src="block1.png" />
            </div>  
        </section>
    )
}

export default Hero
import './Services.css'

function Services({data}) {
    return (
        <section className="services">
            <h1>УСЛУГИ <br /> СТОМАТОЛОГИИ</h1>
            <div className="services-items">
                {data.map((service) => (
                    <div key={service.id} className='services-item'>
                        <img src={service.img} />
                        <div className="service-info">
                            <h2>{service.name}</h2>
                            <p>{service.description}</p>
                        </div>
                        <button>Подробнее</button>
                    </ div>
                ))}
            </div>
        </section>
    )
}

export default Services
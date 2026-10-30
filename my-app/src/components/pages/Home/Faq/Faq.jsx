import './Faq.css'
import { useState } from 'react'

function Faq({data}) {
    const[isFaq, setFaq] = useState(null)

    const handleToggle = (id) => {
        setFaq(isFaq === id ? null : id)
    }

    return (
        <section className="faq">
            <h1>Часто <br /> задаваемые вопросы</h1>
            <div className="faq-items">
                {data.map((faq) => (
                    <div key={faq.id} className={`faq-item ${isFaq === faq.id ? 'active': '' }`} onClick={() => handleToggle(faq.id)}>
                        <div className="question">
                            <p>{faq.name}</p>
                            <div className="open">
                                <span>+</span>
                            </div>     
                        </div>
                        <div className="answer">
                            <p>{faq.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faq
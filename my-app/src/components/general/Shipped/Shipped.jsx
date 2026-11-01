import "./Shipped.css"
import { IoIosCheckmarkCircle } from "react-icons/io";

function Shipped({shipped}) {
    return (
        <>
            {shipped && (
                <section className="shipped">
                    <IoIosCheckmarkCircle />
                    <p>Данные отправлены</p>
                </section>
            )}  
        </>
        
    )   
}

export default Shipped
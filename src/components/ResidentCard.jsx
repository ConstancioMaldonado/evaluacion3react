import useFetch from "../hooks/useFetch"
import './styles/residentCard.css'

const ResidentCard = ({ url }) => {

    const [resident] = useFetch(url)

    console.log(resident)


  return (
    <article className="resident">
        <header className="resident_header">
            <img className="resident_avatar" src={resident?.image} alt="" />
            <div className="resident_status">
                <div className={`resident_status-circle ${resident?.status}`}></div>
                <span className="resident_status-label">{resident?.status}</span>
            </div>
        </header>

        <section className="resident_body">
            <h3 className="resident_name">{resident?.mane}</h3>
            <hr className="resident_hr"/>
            <ul className="resident_list">
                <li className="resident_item"><span className="resident_label">Specie</span><span className="resident_value">{resident?.species}</span> </li>
                <li className="resident_item"><span className="resident_label">Origin</span><span className="resident_value">{resident?.species}</span> </li>
                <li className="resident_item"><span className="resident_label">Eppisodes Where Appear</span><span className="resident_value">{resident?.episode.length}</span> </li>
            </ul>
        </section>

    </article>
    )
}

export default ResidentCard
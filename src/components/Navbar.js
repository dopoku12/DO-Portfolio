import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAfrica, faHome, faCode } from "@fortawesome/free-solid-svg-icons"
function Navbar() {
    return (
        <nav>
            <ul className="navI">

                <li className="fa-li">
                    <FontAwesomeIcon icon={faHome} />

                </li>

                <li className="fa-li">
                    <FontAwesomeIcon icon={faCode} />

                </li>

                <li className="fa-li">
                    <FontAwesomeIcon icon={faEarthAfrica} />

                </li>

            </ul>
        </nav>
    )

}
export default Navbar
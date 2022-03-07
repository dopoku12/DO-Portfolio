import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun, faEarthAfrica, } from "@fortawesome/free-solid-svg-icons"

function Icon(props) {
    return (

        <ul>

            <li>

                <FontAwesomeIcon icon={faMoon} className='navIcon hide' />
            </li>

            <li>

                <FontAwesomeIcon icon={faSun} className='navIcon' />
            </li>
            <li>
                <FontAwesomeIcon icon={faEarthAfrica} className='navIcon' />
            </li>



        </ul >


    );
}

export default Icon
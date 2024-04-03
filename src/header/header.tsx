import {FC} from "react";
import './header.css'
import MoonIcon from '../img/moon_icon1.png'
import StarIcon from '../img/star_icon1.png'
import MainIconStar from '../img/star_icon2.png'
import MainIconMoon from '../img/moon_icon2.png'


const Header: FC = () => {
    return (
        <div className='header_section'>
            <div className='header_container'>
                <img src={MoonIcon} alt='icon' className='header_icon'/>
                <h1 className='header_text'>Фильм на вечер</h1>
                <img src={StarIcon} alt='icon' className='header_icon'/>
                <img src={MainIconStar} alt='icon' className='header_icon_star'/>
                <img src={MainIconMoon} alt='icon' className='header_icon_moon'/>
            </div>
        </div>
    )
}


export default Header
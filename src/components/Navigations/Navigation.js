import s from './navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <header className={s.header}>
            <nav>
            
                <NavLink to="/"  className={({isActive}) =>`${isActive ? s.active : s.link}`}>
                Home
                </NavLink> 
            
            <NavLink to="/movies" className={({isActive}) =>`${isActive ? s.active : s.link}`}>
                Movies    
            </NavLink>
        </nav>
        </header>
    )
}

export default Navigation;
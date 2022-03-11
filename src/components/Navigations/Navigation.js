import s from './navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <header className={s.header}>
            <nav>
            
                <NavLink to="/"  className={s.link}>
                Home
                </NavLink> 
            
            
            <NavLink to="/movies" className={s.link} >
                Movies    
            </NavLink>
        </nav>
        </header>
    )
}

export default Navigation;
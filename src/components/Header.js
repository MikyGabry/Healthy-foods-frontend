import { Link } from 'react-router-dom'

function Header () {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/food'>Foods Index</Link>
                <Link to="/seed">Seeded Data</Link>
            </nav>
        </>
    )
}

export default Header;
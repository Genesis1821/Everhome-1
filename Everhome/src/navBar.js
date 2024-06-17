

function Navbar(){
    return(
        <>
        <nav>
            <h2>Everhome</h2>
            <ul>
                <li><a className="navEnlace" href="./pages/landingPage.js">Landing Page</a></li>
                <li><a className="navEnlace" href="./pages/propiedades.js">Propiedades</a></li>
                <li><a className="navEnlace" href="./pages/registroPropiedades.js">Registro de propiedades</a></li>
                <li><a className="navEnlace" href="./pages/inicioSesion.js">Inicion de sesion</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
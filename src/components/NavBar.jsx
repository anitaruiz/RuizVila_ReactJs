import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <a href="/">
                        <img src="https://acdn.mitiendanube.com/stores/003/039/113/themes/common/logo-1833024819-1681757774-e93386c52fe173659450c309512c311e1681757774-480-0.png?0" alt="Lupita Store" width={160} />
                    </a>
                </div>
                <div className="col-md-8">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-warning-emphasis" href="/category/remeras">Remeras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning-emphasis" href="/category/abrigos">Abrigos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning-emphasis" href="/category/pantalones">Pantalones</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg  ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">FJ INOX LTDA</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="Login">Iniciar sesion</a>
                        <a class="nav-link" href="About">Conócenos</a>
                        <a class="nav-link" href="Productos">Productos</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

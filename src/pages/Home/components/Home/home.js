import "./home.scss";
import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <div className="row xs-6">
                        <div className="col">
                            <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt="asdasd" />
                        </div>
                        <div className="col">
                            <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt="asdasd" />
                        </div>
                        <div className="col">
                            <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt="asdasd" />
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <div className="row">
                        <div className="col">
                            <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt="asdasd" />
                        </div>
                        <div className="col">
                            <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt="asdasd" />
                        </div>
                        <div className="col">
                            <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt="asdasd" />
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </>
    )
};

export default Carrousel;

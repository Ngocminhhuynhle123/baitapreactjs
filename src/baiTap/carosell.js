import React, { Component } from 'react'

export default class Carosell extends Component {
    render() {
        return (
            <div className='my-2'>
                {/*Carousel Wrapper*/}
                <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-1z" data-slide-to={0} className="active" />
                        <li data-target="#carousel-example-1z" data-slide-to={1} />
                        <li data-target="#carousel-example-1z" data-slide-to={2} />
                    </ol>
                    {/*/.Indicators*/}
                    {/*Slides*/}
                    <div className="carousel-inner" role="listbox">
                        {/*First slide*/}
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp" alt="First slide" />
                        </div>
                        {/*/First slide*/}
                        {/*Second slide*/}
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).webp" alt="Second slide" />
                        </div>
                        {/*/Second slide*/}
                        {/*Third slide*/}
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).webp" alt="Third slide" />
                        </div>
                        {/*/Third slide*/}
                    </div>
                    {/*/.Slides*/}
                    {/*Controls*/}
                    <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                    {/*/.Controls*/}
                </div>
                {/*/.Carousel Wrapper*/}
            </div>
        )
    }
}

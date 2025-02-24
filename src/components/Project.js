import React from 'react';
import './Project.css';
import tic from '../utils/tic.jpg';
import asset from '../utils/asset.jpeg';
import organic from '../utils/organic.jpg'

const Project = () => {
    return (
        <div class=" container-fluid car-container">
            <div class="container-fluid car">
                <h3 className='container-fluid'>Asset Care WebApp

                </h3>
                <img src={asset} alt="Card Image" class=" container-fluid card-img" />


                <button className='container-fluid'> <a href='https://assetcare.netlify.app/' >View Project</a></button>



            </div>
            <div class="container-fluid car2">
                <h3 className='container-fluid'>Organic Beauty Web App</h3>
                <img src={organic} alt="Card Image" class="container-fluid card-img2" />
                <button className='container-fluid'> <a href='https://organic-beauty-vs.netlify.app/' >View Project</a></button>

            </div>
            <div class="container-fluid car3">
                <h3 className='container-fluid'>tic-toe game</h3>
                <img src={tic} alt="Card Image" class="container-fluid card-img3" />
                <button className='container-fluid'> <a href='https://vishal-tic-toe.netlify.app/' >View Project</a></button>
            </div>

        </div>
    )
}

export default Project;

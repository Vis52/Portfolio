import React from 'react';
import './Project.css';
import tic from '../utils/tic.jpg';
import asset from '../utils/asset.jpeg';
import organic from '../utils/organic.jpg'

const Project = () => {
    return (
        <div class=" container-fluid car-container">
            <div class="car">
                <h3>Asset Care WebApp

                </h3>
                <img src={asset} alt="Card Image" class="card-img" />


                <button> <a href='https://assetcare.netlify.app/' >View Project</a></button>



            </div>
            <div class="car2">
                <h3>Organic Beauty Web App</h3>
                <img src={organic} alt="Card Image" class="card-img2" />
                <button> <a href='https://organic-beauty-vs.netlify.app/' >View Project</a></button>

            </div>
            <div class="car3">
                <h3>tic-toe game</h3>
                <img src={tic} alt="Card Image" class="card-img3" />
                <button> <a href='https://vishal-tic-toe.netlify.app/' >View Project</a></button>
            </div>

        </div>
    )
}

export default Project

import React from 'react';
import './Skills.css';
import sql from '../utils/sql.png';
import html from '../utils/html.png';
import css from '../utils/css.png';
import cpp from '../utils/cpp.png';
import js from '../utils/js.jpeg';
import react from '../utils/react.png';
import bootstrap from '../utils/bootstrap.png';
import node from '../utils/node.png';
import git from '../utils/git.png';
import github from '../utils/github.png';


const Skills = () => {
  return (
    <div className='main'>
        <div className='main1'>
            <img src={html} alt=''/>
            <img src={css} alt=''/>
            <img src={js} alt=''/>
            <img src={cpp} alt=''/>
        </div>
        <div className='main2'>
        <img src={react} alt=''/>
         <img src={bootstrap} alt=''/>
          <img src={node} alt=''/>
        </div>
        <div className='main3'>
        <img src={git} alt=''/>
        <img src={github} alt=''/>
        </div>
      
    </div>
  )
}

export default Skills

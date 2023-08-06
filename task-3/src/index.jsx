import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const rootElement = document.querySelector('#root');



const element = (
 <>
 <div className='seconds'>Now is 58</div>
 </>
);

ReactDOM.render(element, rootElement);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import Quescover from './Manascode/Quescover';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Quescover>
           <App />
       </Quescover>



    </React.StrictMode>
    
    
 
);


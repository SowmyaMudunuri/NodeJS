//Ideally this is a pure or stateless component.            
import React from 'react';
import Header from './components/Header';
import MiniHeader from './sub-components/MiniHeader';
import {LoginComponent} from './components/Login'
import {RegisterComponent} from './components/Register'
const App= ()=>{
    const companyName='PegaSystems';
    return <div>
    <Header title={companyName}/>

    <RegisterComponent/>

    </div>;
};

export default App;
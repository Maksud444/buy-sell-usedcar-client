import { AddressElement } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../Shared/Spinner/Spinner';
import Advertisement from './Advertisement/Advertisement';
// import Category from './Category/Category';
import Categorys from './Category/Categorys';
import Hero from './Hero';
import Slider from './Slider';

const Home = () => {
    const { loading } = useContext(AuthContext);
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <Slider></Slider>
            <Categorys></Categorys>
            <Hero></Hero>
            <Advertisement></Advertisement>
        </div>
    );
};

export default Home;
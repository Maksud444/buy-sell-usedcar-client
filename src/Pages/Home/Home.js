import React from 'react';
// import Category from './Category/Category';
import Categorys from './Category/Categorys';
import Hero from './Hero';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categorys></Categorys>
            <Hero></Hero>
        </div>
    );
};

export default Home;
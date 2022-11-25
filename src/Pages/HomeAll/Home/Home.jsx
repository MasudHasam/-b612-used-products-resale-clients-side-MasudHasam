import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Categories/Category/Category';
import HotFavorite from '../HotFavorite/HotFavorite';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <HotFavorite></HotFavorite>
        </div>
    );
};

export default Home;
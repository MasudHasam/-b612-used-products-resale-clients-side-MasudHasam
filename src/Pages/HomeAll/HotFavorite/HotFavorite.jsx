import React from 'react';

const HotFavorite = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold italic text-orange-500 text-center'>All Tranding Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-4'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='rounded-2xl w-[350px] h-[210px]' src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='rounded-2xl w-[350px] h-[210px]' src="https://media.rainpos.com/9068/1000x750_img_3822jpg.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='rounded-2xl w-[350px] h-[210px]' src="https://www.midwestspeakerrepair.com/wp-content/uploads/2018/03/dscf5134-1024x576.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='rounded-2xl w-[350px] h-[210px]' src="https://review.gbtcdn.com/upload/gearbest/review/20200505/DD948EE3AC62CBFCB7C90D8EC426C417.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='rounded-2xl w-[350px] h-[210px]' src="https://cybershack.com.au/wp-content/uploads/2022/08/Google-NM-header-scaled.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='rounded-2xl w-[350px] h-[210px]' src="https://salebaba.com/images/31240/image-4.webp" alt="Shoes" /></figure>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='rounded-2xl w-[350px] h-[210px]' src="https://www.sweetwater.com/insync/media/2019/07/best-singing-mic-hero.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='rounded-2xl w-[350px] h-[210px]' src="https://www.webxgear.com.au/wp-content/uploads/2016/07/IMG_1320.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default HotFavorite;
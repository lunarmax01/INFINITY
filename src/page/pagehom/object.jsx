import React from 'react';
import 'animate.css';

function Object() {
    return (
        <>
            <div className='w-[100%] h-[100vh] overflow-hidden'>
                <div className=' animate-pulse'>
                    <div id='object1' className='w-[510px] h-[500px] relative top-[180px] right-24 animate__animated animate__fadeInTopLeft'></div>
                </div>
                <div className=' animate-pulse'>
                    <div id='object2' className='w-[600px] h-[400px] relative bottom-[390px] left-[1020px] animate__animated animate__fadeInTopRight'></div>
                </div>
                <div className=''>
                    <div id='roboto' className='w-[170px] h-[500px] relative bottom-[460px] left-[1450px] animate__animated animate__fadeInRight '></div>
                </div>
            </div> 
        </>
    );
}

export default Object;
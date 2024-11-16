import React from 'react';
import object1 from '../../material/img/object1.png';
import object2 from '../../material/img/object2.png';
import Robotoobject from '../../material/img/roboto-object.png';
import 'animate.css';

function Object() {
    return (
        <>
            <div className='w-[100%] h-[100vh]  overflow-hidden'>
                <div className=' animate-pulse'>
                    <img className='w-[400px] relative top-[250px] right-24 animate__animated animate__fadeInTopLeft' src={object1} alt="Object 1" />
                </div>
                <div className=' animate-pulse'>
                    <img className='w-[500px] relative bottom-[250px] left-[1120px] animate__animated animate__fadeInTopRight' src={object2} alt="Object 1" />
                </div>
                <div className=''>
                    <img className='w-[150px] relative bottom-[150px] left-[1450px] animate__animated animate__fadeInRight'  src={Robotoobject} alt="" />
                </div>
            </div>
        </>
    );
}

export default Object;
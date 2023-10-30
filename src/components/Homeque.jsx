import React from 'react';
import { Link } from 'react-router-dom';
import Data from "../../Data/Detailed.json";

const Homeque = () => {
  const data = Data.destinations;

  const showdetail = (index) => {
    console.log(index);
  };

  return (
    <section className='grid grid-cols-3 gap-4'>
      {data.map((ele, i) => (
        <div key={i} className='w-[30rem] h-[35rem] m-[5rem] relative flex flex-col justify-center items-center'>
          <div className='w-[30rem] h-[30rem] overflow-hidden rounded-[30px]'>
            <img src={data[i].image} className='rounded-[30px] w-[25rem] h-[30rem] bg-cover' alt="Heritage Image" />
          </div>
          <div className='w-[25rem] h-[30rem] bg-[black] mt-[-30rem] z-[2] ml-[-80px] opacity-[30%] rounded-[30px] h-[20rem] flex flex-col justify-center items-center'>
            <h1 className='text-[4rem] mt-[0px] text-center leading-[60px] z-[2] text-[white] font-bold'>{data[i].name}</h1>
            {/* <p className='text-[white] z-[2] w-[18rem]'>{data[i].description}</p> */}
          </div>
          <Link to={`/detail/?id=${i}`} key={i}>
            <div className='ml-[-60px] w-[20rem] flex justify-center items-center'>
                
                <button onClick={() => showdetail(i)} class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Explore</button>
            </div>
          </Link>
        </div>

      ))}
    </section>
  );
};

export default Homeque;

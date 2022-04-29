import React from 'react';

const Delivery = () => {
    return (
        <div className='container mx-auto px-20'>
            <div className="grid grid-cols-3 gap-4 my-20 text-center ">
                <div className='hover:border hover:border-green-500 border p-10 rounden'>
                    <h1 className='text-xl '>World Wide Transport</h1>
                    <p className='text-sm  my-4 '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                      <button type="button" class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-green-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Success</button>
                </div>
                <div className='hover:border hover:border-green-500 border p-10 rounden'>
                    <h1 className='text-xl '>World Wide Transport</h1>
                    <p className='text-sm  my-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                      <button type="button" class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-green-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Success</button>
                </div>
                <div className='hover:border hover:border-green-500 border p-10 rounden'>
                    <h1 className='text-xl '>World Wide Transport</h1>
                    <p className='text-sm my-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                      <button type="button" class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-green-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center ">Success</button>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
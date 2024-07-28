
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Subscription = () => {
    const [email, setEmail] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        Swal.fire("Thank You For Subscribing");
    };

    return (
        <div className='max-md:ml-[10%]'>
            <form onSubmit={handleClick}>
                <fieldset>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-black w-[80%] mt-14 p-4 max-md:mt-12'
                    />
                    <button type='submit' className='w-[80%] bg-rose-700 text-white text-lg rounded-lg hover:bg-rose-600 font-[600] py-4 my-4'>
                        Subscribe
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Subscription
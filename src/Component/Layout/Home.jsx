import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
    // use of react form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);


    return (

        <div className='columns-2'>
            <div className=' bg-slate-300 min-h-screen' >
                <p className="pt-10 text-2xl">Human Resource Managemen Portal</p>
            </div>
            <div className='bg-slate-300 min-h-screen'>
                <p className='pt-20 text-xl'>Login</p>

                {/* react hook form for login and signup */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("Mail")} placeholder='mail' type='text' className='input input-bordered input-lg w-full max-w-xs my-5 bg-slate-100' /><br></br>

                    <input  {...register("password", { required: true })} placeholder='password' type='password' className='input w-full max-w-xs input-lg bg-slate-100' /><br></br>

                    {errors.password && <span>This field is required</span>}

                    <input type="submit" className='btn mt-5' />
                </form>
            </div>
        </div>

    );
};

export default Home;
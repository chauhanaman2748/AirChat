import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';


const SignUp = () => {

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form >
					<div>
						<label className='label p-2'>
            <span className='text-base label-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200'>Full Name</span>
						</label>
						<input
              type='text'
              placeholder='John Doe'
              className='w-full input input-bordered bg-gray-700 text-gray-200 h-10 placeholder-gray-300'
            />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200'>Username</span>
						</label>
            <input
              type='text'
              placeholder='johndoe'
              className='w-full input input-bordered bg-gray-700 text-gray-200 h-10 placeholder-gray-300'
            />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered bg-gray-700 text-gray-200 h-10 placeholder-gray-300'
						/>
            
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered bg-gray-700 text-gray-200 h-10 placeholder-gray-300'
						/>
					</div>

          <GenderCheckbox />

					<Link to="/Login" className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200'>
            Already have an account?
          </Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700 bg-gray-700 text-gray-200 h-10 placeholder-gray-300'>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
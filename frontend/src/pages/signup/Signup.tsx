import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import { useState } from 'react';
import {useSignup} from '../../hooks';


const SignUp = () => {

	const [inputs, setInputs] = useState({
		fullName: '',
		userName: '',
		password: '',
		confirmPassword: '',
		gender: ''
	})

	const {loading, signup} = useSignup()

	const handleGenderChange = (gender: string) => {
		setInputs({...inputs, gender})
	} 

	const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await signup(inputs);
	} 

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSignUp}>
					<div>
						<label className='label p-2'>
            				<span className='text-base label-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered bg-gray-700 text-gray-200 h-10 placeholder-gray-300'
							value={inputs.fullName}
							onChange={(e) => setInputs({...inputs, fullName: e.target.value}) }
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
						value={inputs.userName}
						onChange={(e) => setInputs({...inputs, userName: e.target.value}) }
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
							value={inputs.password}
							onChange={(e) => setInputs({...inputs, password: e.target.value}) }
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
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value}) }
						/>
					</div>

          			<GenderCheckbox onCheckboxChange = {handleGenderChange} selectedGender={inputs.gender} />

					<Link to="/Login" className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700 bg-gray-700 text-gray-200 h-10 placeholder-gray-300' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
import { useState } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../../hooks"

const Login = () => {
	const [inputs, setInputs] = useState({
		userName: '',
		password: '',
	})

	const {loading, login} = useLogin()

	const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await login(inputs);
	}


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
			Login
			<span className='text-blue-500'> AirChat</span>
		</h1>

		<form onSubmit={handleLoginSubmit}>
			<div>
				<label className='label p-2'>
					<span className='text-base label-text bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200'>Username</span>
				</label>
				<input
					type='text'
					placeholder='Enter username'
					className='w-full input input-bordered bg-gray-700 text-gray-200 h-10 placeholder-gray-300'
					value={inputs.userName}
					onChange={(e) => setInputs(({...inputs, userName: e.target.value}))}
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
					onChange={(e) => setInputs(({...inputs, password: e.target.value}))}
				/>
			</div>
			<Link to='/signup' className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200'>
				{"Don't"} have an account?
			</Link>

			<div>
				<button className='btn btn-block btn-sm mt-2 border border-slate-700 bg-gray-700 text-gray-200 h-10 placeholder-gray-300' disabled={loading}>
				{loading ? <span className='loading loading-spinner'></span> : "Login"}
				</button>
			</div>
		</form>
      </div>
    </div>
  )
}

export default Login
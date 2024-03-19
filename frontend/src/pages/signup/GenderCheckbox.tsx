interface GenderCheckboxProps {
  onCheckboxChange: (gender: string) => void;
  selectedGender: string;
}

const GenderCheckbox: React.FC<GenderCheckboxProps> = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text'>Male</span>
					<input 
						type='checkbox' 
						className='checkbox border-slate-900'
						checked = {selectedGender === 'male'}
						onChange={selectedGender === 'male' ? () => onCheckboxChange("") : () => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `}>
					<span className='label-text'>Female</span>
					<input 
						type='checkbox' 
						className='checkbox border-slate-900' 
						checked = {selectedGender === 'female'}
						onChange={selectedGender === 'female' ? () => onCheckboxChange("") : () => onCheckboxChange("female")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "other" ? "selected" : ""} `}>
					<span className='label-text'>Other</span>
					<input 
						type='checkbox' 
						className='checkbox border-slate-900' 
						checked = {selectedGender === 'other'}
						onChange={selectedGender === 'other' ? () => onCheckboxChange("") : () => onCheckboxChange("other")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;

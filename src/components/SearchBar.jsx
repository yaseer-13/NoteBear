import { FaCircleXmark } from 'react-icons/fa6';

const SearchBar = ({ searchText, handleSearchInputChange, handleClearSearch }) => {
	return (
		<div className='relative'>
			<input
				type='text'
				placeholder='Search notes'
				className={`border border-primary rounded py-2 px-4 my-4 w-full pr-10 outline-none`}
				value={searchText}
				onChange={handleSearchInputChange}
			/>
			{searchText && (
				<button
					className={`absolute inset-y-0 right-0 px-3 py-2 text-text`}
					onClick={handleClearSearch}
				>
					<FaCircleXmark />
				</button>
			)}
		</div>
	);
};

export default SearchBar;

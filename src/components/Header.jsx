import { FaPlus } from 'react-icons/fa';

const Header = ({ openModal }) => {
	return (
		<header className='flex items-center justify-between gap-4'>
			<h1 className='text-2xl font-bold'>NoteBear</h1>
			<button
				className={`bg-primary text-white font-bold py-2 px-4 rounded`}
				onClick={openModal}
				title='Add Note'
			>
				<FaPlus />
			</button>
		</header>
	);
};

export default Header;

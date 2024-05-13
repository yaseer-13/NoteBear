const Modal = ({ title, content, onChange, onCancel, onSave, buttonTitle }) => {
	return (
		<div className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50'>
			<div className='bg-white p-8 rounded  min-w-[450px]  max-w-[600px]'>
				<h2 className='mb-4 text-lg font-bold'>{title}</h2>
				<textarea
					type='text'
					placeholder='Write your note here'
					className={`border-2 border-primary rounded py-2 px-4 mb-4 w-full outline-none`}
					value={content}
					onChange={onChange}
					autoFocus
					rows={4}
				/>
				<div className='flex justify-end'>
					<button className={`bg-primary text-white font-bold py-2 px-4 rounded`} onClick={onSave}>
						{buttonTitle}
					</button>
					<button
						className={`bg-delete hover:bg-deleteHover text-white font-bold py-2 px-4 rounded ml-4`}
						onClick={onCancel}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;

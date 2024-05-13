import { FaEdit } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { toSentenceCase } from '../function';

const Note = ({ note, onEditNote, onDeleteNote }) => {
	return (
		<div
			className={`border border-primary min-h-36 p-4 rounded flex flex-col justify-between hover:shadow-md transition-shadow duration-300`}
		>
			<h3 className={`text-md text-text mt-2  font-bold  break-words`}>
				{toSentenceCase(note.content)}
			</h3>
			<div className='flex items-center justify-between '>
				<span className={`text-xs text-gray-500 mt-2  font-semibold`}>{note.createdAt}</span>
				<div className='flex justify-end gap-2 mt-2'>
					<button
						className={`text-text hover:text-hover`}
						onClick={() => onEditNote(note)}
						title='Edit Note'
					>
						<FaEdit />
					</button>
					<button
						className={`text-delete hover:text-deleteHover`}
						onClick={() => onDeleteNote(note.id)}
						title='Delete Note'
					>
						<FaTrashCan />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Note;

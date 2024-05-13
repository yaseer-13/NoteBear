import Note from './Note';

const NotesList = ({ filteredNotes, handleEditNote, handleDeleteNote }) => {
	const totalNotes = filteredNotes.length;

	return (
		<>
			<section className='grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
				{filteredNotes.map((note) => (
					<Note
						key={note.id}
						note={note}
						onEditNote={handleEditNote}
						onDeleteNote={handleDeleteNote}
					/>
				))}
			</section>
			{totalNotes === 0 && <p className='font-bold text-center'>No notes found :(</p>}
			{totalNotes > 0 && <p className='font-bold text-center'>Total notes: {totalNotes}</p>}
		</>
	);
};

export default NotesList;

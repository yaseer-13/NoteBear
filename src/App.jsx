import { Toaster } from 'react-hot-toast';
import { Header, Modal, NotesList, SearchBar } from './components';
import useNotes from './hooks/useNotes';

const App = () => {
	const {
		handleCancel,
		showModal,
		searchText,
		filteredNotes,
		handleSaveNote,
		handleUpdateNote,
		handleEditNote,
		handleDeleteNote,
		handleInputChange,
		handleSearchInputChange,
		handleClearSearch,
		editingNote,
		inputText,
		openModal,
	} = useNotes();

	return (
		<div className='container p-4 mx-auto'>
			<Header openModal={openModal} />
			<SearchBar
				searchText={searchText}
				handleSearchInputChange={handleSearchInputChange}
				handleClearSearch={handleClearSearch}
			/>
			<NotesList
				filteredNotes={filteredNotes}
				handleEditNote={handleEditNote}
				handleDeleteNote={handleDeleteNote}
			/>
			{showModal && (
				<Modal
					title={editingNote ? 'Edit Note' : 'Add Note'}
					content={inputText}
					editingNote={editingNote}
					onChange={handleInputChange}
					onCancel={handleCancel}
					buttonTitle={editingNote ? 'Update' : 'Save'}
					onSave={editingNote ? handleUpdateNote : handleSaveNote}
				/>
			)}

			<Toaster />
		</div>
	);
};

export default App;

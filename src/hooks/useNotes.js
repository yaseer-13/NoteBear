import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const initialNotes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];

const useNotes = () => {
	const [notes, setNotes] = useState(initialNotes);
	const [inputText, setInputText] = useState('');
	const [searchText, setSearchText] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [editingNote, setEditingNote] = useState(null);

	useEffect(() => {
		try {
			localStorage.setItem('notes', JSON.stringify(notes));
		} catch (error) {
			console.error('Error while updating local storage:', error);
		}
	}, [notes]);

	const handleInputChange = (event) => {
		try {
			const { value } = event.target;
			setInputText(value);
		} catch (error) {
			console.error('Error while handling input change:', error);
		}
	};

	const handleSearchInputChange = (event) => {
		try {
			const { value } = event.target;
			setSearchText(value);
		} catch (error) {
			console.error('Error while handling search input change:', error);
		}
	};
	const handleSaveNote = () => {
		if (inputText.trim() !== '') {
			try {
				const newNote = {
					id: editingNote ? editingNote.id : nanoid(),
					content: inputText,
					createdAt: editingNote
						? editingNote.createdAt
						: new Date().toLocaleString('en-US', {
								day: 'numeric',
								month: 'short',
								year: 'numeric',
								hour: 'numeric',
								minute: 'numeric',
								second: 'numeric',
								hour12: true,
						  }),
				};

				setNotes([...notes, newNote]);
				setInputText('');
				setShowModal(false);
				toast.success('Note added successfully');
			} catch (error) {
				console.error('Error while saving note:', error);
				toast.error('An error occurred while saving the note');
			}
		} else {
			toast.error('Note cannot be empty');
		}
	};

	const handleUpdateNote = () => {
		if (inputText.trim() !== '') {
			try {
				const updatedNotes = notes.map((note) =>
					note.id === editingNote.id ? { ...note, content: inputText } : note
				);
				setNotes(updatedNotes);
				setInputText('');
				setEditingNote(null);
				setShowModal(false);
				toast.success('Note updated successfully');
			} catch (error) {
				console.error('Error while updating note:', error);
				toast.error('An error occurred while updating the note');
			}
		} else {
			toast.error('Note cannot be empty');
		}
	};
	const handleDeleteNote = (id) => {
		try {
			const index = notes.findIndex((note) => note.id === id);

			if (index !== -1) {
				const updatedNotes = [...notes];
				updatedNotes.splice(index, 1);
				setNotes(updatedNotes);
				toast.success('Note deleted successfully');
			} else {
				toast.error('Note not found');
			}
		} catch (error) {
			console.error('Error while deleting note:', error);
			toast.error('An error occurred while deleting the note');
		}
	};

	const handleEditNote = (note) => {
		try {
			setEditingNote(note);
			setInputText(note.content);
			setShowModal(true);
		} catch (error) {
			console.error('Error while editing note:', error);
		}
	};

	const handleCancel = () => {
		try {
			setInputText('');
			setEditingNote(null);
			setShowModal(false);
		} catch (error) {
			console.error('Error while canceling:', error);
		}
	};

	const filteredNotes = notes.filter((note) =>
		note.content.toLowerCase().includes(searchText.toLowerCase())
	);
	const openModal = () => {
		try {
			setInputText('');
			setEditingNote(null);
			setShowModal(true);
		} catch (error) {
			console.error('Error while opening modal:', error);
		}
	};

	const handleClearSearch = () => {
		try {
			setSearchText('');
		} catch (error) {
			console.error('Error while clearing search text:', error);
		}
	};

	return {
		handleClearSearch,
		openModal,
		handleCancel,
		notes,
		searchText,
		showModal,
		filteredNotes,
		handleSaveNote,
		handleUpdateNote,
		handleEditNote,
		handleDeleteNote,
		handleInputChange,
		handleSearchInputChange,
		editingNote,
		inputText,
	};
};

export default useNotes;

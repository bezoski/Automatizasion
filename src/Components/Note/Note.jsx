import React, { useState } from 'react';
import styles from './style';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

function Notepad() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="notepad">
      <div className="notepad-header">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="notepad-content">
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="notepad-footer">
        <button onClick={() => saveNote()}>Save</button>
      </div>
    </div>
  );

  function saveNote() {
    // Tutaj można dodać kod do zapisania notatki, na przykład do bazy danych lub pliku.
    // Możesz użyć tytułu (title) i treści (content) notatki.
    console.log('Zapisano notatkę:', title, content);
  }
}

export default Notepad;
// export default Notepad;
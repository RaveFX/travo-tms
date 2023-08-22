import React, { useState, useEffect } from 'react';

function Notepad() {
  const [note, setNote] = useState('');
  
  useEffect(() => {
    const storedNote = localStorage.getItem('note');
    if (storedNote) {
      setNote(storedNote);
    }
  }, []);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
    localStorage.setItem('note', event.target.value);
  };

  return (
    <div className="flex flex-col m-5 gap-2 p-5 w-[420px] h-fit bg-white rounded-lg shadow-lg z-[1000]">
      <div className="p-1 m-0 h-[400px] flex flex-col relative">
        <textarea
          className="h-full bg-white border p-2 rounded-lg shadow-md resize-none border-[#72C075] focus:border-[#72C075] focus:ring-1 focus:ring-[#72C075]"
          value={note}
          onChange={handleNoteChange}
          placeholder="Start typing your notes..."
        ></textarea>
      </div>
    </div>
  );
}

export default Notepad;

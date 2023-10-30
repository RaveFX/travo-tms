import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Notepad() {
  const { id } = useParams();
  const user_id = sessionStorage.getItem('user_id');
  const [note, setNote] = useState('');
  useEffect(() => {
    loadNote();
  },[]); 

const loadNote=async()=>{
    const result=await axios.get(`http://localhost:8080/api/v1/trip/tripDetails/${id}`)
    setNote(result.data);
 
}

  
  // useEffect(() => {
  //   const storedNote = localStorage.getItem('note');
  //   if (storedNote) {
  //     setNote(storedNote);
  //   }
  // }, []);

  const handleNoteChange = async(event) => {
    const data = {
      trip_id: id,
      note: event.target.value
    };
    await axios.put(`http://localhost:8080/api/v1/trip/update-note/${id}`, data);
    
    const result=await axios.get(`http://localhost:8080/api/v1/trip/tripDetails/${id}`)
    setNote(result.data);
    // setNote(event.target.value);
    // localStorage.setItem('note', event.target.value);
  };



  return (
    <div className="flex flex-col m-5 gap-2 p-5 w-[420px] h-fit bg-white rounded-lg shadow-lg z-[1000]">
      <div className="p-1 m-0 h-[400px] flex flex-col relative">
        <textarea
          className="h-full bg-white border p-2 rounded-lg shadow-md resize-none border-[#72C075] focus:border-[#72C075] focus:ring-1 focus:ring-[#72C075]"
          value={note.note}
          onChange={handleNoteChange}
          placeholder="Start typing your notes..."
        ></textarea>
      </div>
    </div>
  );
}

export default Notepad;

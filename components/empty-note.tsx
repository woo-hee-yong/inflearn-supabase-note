'use client'
import {useState} from 'react';

export default function EmptyNote(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return <div className = "w-3/4 p-2 flex flex-col items-center justify-center font-bold text-xl gap-2 absolute top-0 bottom-0 right-0">
        <img src="/NewNote.jpeg" className = "w-fit h-full justify-center items-center" alt="Supanote Logo"/>
    </div>;
}
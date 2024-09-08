'use client'
import { supabase } from '@/utils/supabase';
import {useState, useEffect} from 'react';

export default function NoteViewer({
    note,
    setActiveNoteId,
    fetchNotes
}){
    const [title, setTitle] = useState(note?.title);
    const [content, setContent] = useState(note?.content);
    const [isEditing, setIsEdting] = useState(false);


    const onEdit = async () => {
        const {data, error} = await supabase
        .from('note')
        .update({
            title,
            content
        })
        .eq('id', note.id);

        if(error){
            alert(error.message);
        }

        setIsEdting(false);
        fetchNotes();
    };

    const onDelete = async () => {
        // const {data, error} = await supabase
        // .from('note')
        // .delete({})
        // .eq('id', note.id);

        // if(error){
        //     alert(error.message);
        // }
        const {data, error} = await supabase
        .from('note')
        .update({
            del_yn : 'Y'
        })
        .eq('id', note.id);

        if(error){
            alert(error.message);
        }

        setIsEdting(false);
        setActiveNoteId(null);
        fetchNotes();
    };

    useEffect(()=>{
        setTitle(note?.title);
        setContent(note?.content);
        setIsEdting(false);
    }, [note]);

    return <div className = "w-3/4 p-2 flex flex-col gap-2 absolute top-0 bottom-0 right-0">
        {
            isEditing ? (
                <>
                    <input type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="노트의 제목을 입력하세요."
                        className="border rounded-md border-gray-300 text-xl p-2"/>
                    <textarea 
                        value={content}
                        className="border rounded-md border-gray-300 text-lg p-2 grow"
                        onChange={(e) => setContent(e.target.value)}/>
                </>
            ):
            (
                <>
                    <h1 className="text-xl p-2">
                        {title}
                    </h1>
                    <textarea readOnly
                        value={content}
                        className="border rounded-md border-gray-300 text-lg p-2 grow"
                        onChange={(e) => setContent(e.target.value)}/>
                </>
            )
        }
     
        <div className="w-full flex justify-end gap-2">
            {isEditing ?(
                <>
                    <button 
                    onClick = {()=> onEdit()}
                    className="py-1 px-3 rounded-full border-2 border-green-600 hover:bg-green-200 transition-all duration-300 ease-in-out">
                    저장
                    </button>
                    <button 
                    onClick = {()=> onDelete()}
                    className="py-1 px-3 rounded-full border-2 border-red-600 hover:bg-green-200 transition-all duration-300 ease-in-out">
                    삭제
                    </button>
                </>
            ) : (
                <button 
                    onClick={ () => setIsEdting(true)}
                    className="py-1 px-3 rounded-full border-2 border-green-600 hover:bg-green-200 transition-all duration-300 ease-in-out">
                        수정하기
                </button>            
            )}
          
        </div>
        
    </div>;
}
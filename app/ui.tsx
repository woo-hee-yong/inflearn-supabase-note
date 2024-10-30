'use client'

import  Header from "@/components/header";
import  Sidebar from "@/components/sidebar";
import  NewNote from "@/components/new-note";
import  NoteViewer from "@/components/note-viewer";
import  EmptyNote from "@/components/empty-note";
import  {useState, useEffect, useRef} from 'react';
import { supabase } from "@/utils/supabase";
import { Database } from "@/types_db";


export default function UI({}){
    const [activeNoteId, setActiveNoteId] = useState(null);
    const [activeNewNoteBtn, setActiveNewNoteBtn ] =  useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [notes, setNotes] = useState<Database['public']['Tables']['note']['Row'][]>([]);
    const [search, setSearch] = useState("");
    const ref = useRef(false);
    
    const fetchNotes = async () => {
      const {data, error} = await supabase
        .from('note')
        .select("*")
        .match({del_yn : 'N'})
        .ilike("title", `%${search}%`);

      if(error){
        alert(error.message);
        return false;
      }
      setNotes(data);
    }

    useEffect(() => {
   
      if (ref.current) return;
      ref.current = true;
      fetchNotes();
    }, [search]);

    return (
        <main className="w-full h-screen flex flex-col">
          <Header setActiveNoteId={setActiveNoteId} setIsCreating={setIsCreating} activeNewNoteBtn={activeNewNoteBtn} search={search} setSearch={setSearch}/>
          <div className="grow relative ">
            <Sidebar activeNoteId={activeNoteId} setActiveNoteId={setActiveNoteId} setIsCreating={setIsCreating} notes={notes} />
            {
              isCreating ? (  <NewNote fetchNotes={fetchNotes} setActiveNoteId={setActiveNoteId} setIsCreating={setIsCreating}/>
              
              ) : activeNoteId ? (  <NoteViewer setActiveNoteId = {setActiveNoteId} fetchNotes={fetchNotes} note={notes.find((note)=> note.id === activeNoteId)}/> 
              
              ) : ( <EmptyNote/>
            )}
          </div>
        </main>
      );
}
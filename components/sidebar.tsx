'use client'

export default function Sidebar({
    notes
    , activeNoteId
    , setActiveNoteId
    , setIsCreating
 
}){

    return <aside className="absolute top-0 left-0 bottom-0 w-1/4 overflow-y-scroll p-2 border-r border-gray-300">
        <ul className="mt-2 flex flex-col gap-2">
            {notes.map((note)=> (
                <li key={note.id}>
                    <button    
                        className={`${activeNoteId === note.id ? "font-bold" : ""}`}
                        onClick={()=> {
                            setIsCreating(false);
                            setActiveNoteId(note.id)
                        }}>
                        ◐ {note.title}
                    </button>
                </li>
            ))}
        </ul>
        
    </aside>
}
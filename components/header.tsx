'use client';

export default function Header({
    setActiveNoteId,
    setIsCreating,
    activeNewNoteBtn,
    search, 
    setSearch
}){
    //<img src="/supanote-logo.png" alt="Supanote Logo" className="h-7"/>
    return <header  >
            <div className="w-full bg-green-600 py-3 px-4 bg-stone-600">
                <a href="./" className="font-bold text-white text-3xl">⚾ Hee Dragon World</a>
            </div>
            <div className="m-2">
                {activeNewNoteBtn ? (
                    <div className="w-full justify-between flex">
                        <input 
                            type="text" 
                            value={search}
                            onChange = {(e) => setSearch(e.target.value)}
                            placeholder = "노트를 검색해보세요."
                            className="p-2 text-lg font-bold border border-gray-600 rounded-lg w-full"
                        />
                        <button 
                            onClick={()=> {
                                setActiveNoteId(null)
                                setIsCreating(true)
                            }}
                            className="p-2 ml-2 text-lg font-bold border border-gray-600 rounded-lg">
                            ➕
                        </button>
                    </div>
                ):(
                    <></>
                )} 
            </div>
                
        </header>
    ;
}
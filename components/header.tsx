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
            {activeNewNoteBtn ? (
                <div className="pt-2">
                    <button 
                        onClick={()=> {
                            setActiveNoteId(null)
                            setIsCreating(true)
                        }}
                        className="p-2 text-lg font-bold border border-gray-600 rounded-lg w-full">
                        ➕ 새로운 노트
                    </button>
                </div>
            ):(
              <></>
            )} 
              <input 
                    type="text" 
                    value={search}
                    onChange = {(e) => setSearch(e.target.value)}
                    placeholder = "노트를 검색해보세요."
                    className="w-full p-2 border rounded-md border-gray-600 mt-2"
                />
        </header>
    ;
}
'use client';

export default function Header({
    setActiveNoteId,
    setIsCreating,
    activeNewNoteBtn,
    search, 
    setSearch
}){
    return  <header  >
                <div className="w-full bg-green-600 py-3 px-4 bg-stone-600 flex justify-between">
                    <a href="./" className="font-bold text-white text-3xl">⚾ Hee Dragon World</a>
                    <a href="/login" className="text-green-200 hover:text-white border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Sign in</a>
                </div>
                <div className="w-full py-2 px-2">
                    <a href="/food" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">오늘 뭐먹지?</a>
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
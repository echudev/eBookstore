export function onReadlistChange(callback: (readList: string[]) => void) { 

function getReadlist() {
const readList = JSON.parse(localStorage.getItem("readList") || "[]")
callback(readList)
}

window.addEventListener("storage", getReadlist)
getReadlist()

return () => window.removeEventListener("storage", getReadlist)
}

// implement in your commponent using useEffect to suscribe and unsubscribe

// useEffect(() => const unsubscribe = onReadlistChange((readList) => setReadList(readList))
// return () => unsubscribe(), [])

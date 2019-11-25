const dbOpenrequest = indexedDB.open("todoDB", 1)
let db
dbOpenrequest.onsuccess = () => {
  db = dbOpenrequest.result
  console.log(db)
}
dbOpenrequest.onupgradeneeded = () => {
  db = dbOpenrequest.result
  if (!db.objectStoreNames.contains("todo")) {
    db.createObjectStore("todo", { keyPath: "id", autoIncrement: true })
  }
}
export const addTODO = taskDetails => {
  return new Promise((resolve, reject) => {
    const Transactions = db.transaction("todo", "readwrite")
    const TODOObjectStore = Transactions.objectStore("todo")
    const TODOObject = {
      completed: false,
      details: taskDetails
    }
    const TransactionRequest = TODOObjectStore.add(TODOObject)
    TransactionRequest.onsuccess = () => {
      console.debug("Value Added Successfully", TransactionRequest.result)
      resolve(TransactionRequest.result)
    }
    TransactionRequest.onerror = () => {
      reject(TransactionRequest.error)
    }
  })
}

export const getAllTODO = () => {
  return new Promise((resolve, reject) => {
    const Transactions = db.transaction("todo")
    const TODOStore = Transactions.objectStore("todo")
    const TransactionRequest = TODOStore.getAll()
    TransactionRequest.onsuccess = () => {
      resolve(TransactionRequest.result)
    }
    TransactionRequest.onerror = () => {
      reject(TransactionRequest.error)
    }
  })
}

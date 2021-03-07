// import loadData from '../data/load-data'
import { balanceCollection } from '../firebase'

function FirebaseDemo() {
  const getBalance = async () => {
    try {
      const snapshot = await balanceCollection.get()
      const docs = snapshot.docs

      for (const doc of docs) {
        console.log(doc.id)
        console.log(doc.data())
      }
      return docs
    } catch (err) {
      console.log(err)
    }
  }

  const addBalance = async () => {
    try {
      const doc = balanceCollection.add({
        month: 'May',
        balance: 1750,
      })
      console.log(doc.path)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div class="h-80">
      <h1 class="mt-4 text-3xl text-white">🔥 Firebase</h1>
      <div class="flex gap-6 justify-center mt-4">
        <button
          onClick={addBalance}
          class="p-2 rounded-md border-2 border-blue-400 text-blue-400 w-48"
        >
          Add May's Balance
        </button>
        <button
          onClick={getBalance}
          class="p-2 rounded-md border-2 border-blue-400 text-blue-400 w-48"
        >
          Get my balance
        </button>
      </div>
    </div>
  )
}

export default FirebaseDemo

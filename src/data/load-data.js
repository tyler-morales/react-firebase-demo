import db from '../firebase'
import data from './data.json'

async function loadData() {
  data.map(addBalance)
}

async function addBalance({ index, month, amount }) {
  try {
    const data = { index, month, amount }
    // look up movie matching the month and amount
    const snapshot = await db
    .collection('balance')
    .where('index', '==', index)
    .where('month', '==', month)
    .where('amount', '==', amount)
    .get()
    
    console.log('🎉 Data Loaded!!!')
    // create a doc reference that points to where this movie is located in the db - either a enw doc if it is not there, or the existing doc
    let docRef
    if (snapshot.empty) {
      docRef = db.collection('balance').doc()
    } else {
      docRef = snapshot.docs[0].ref
    }

    // update the doc with the given data
    await docRef.set(data)
  } catch (err) {
    console.log(err)
  }
}

export default loadData

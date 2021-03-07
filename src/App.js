// import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PageFooter from './common/page-footer'
import PageHeader from './common/page-header'
import FirebaseDemo from './pages/firebase-demo'
// import firebase from './firebase'

function App() {
  return (
    <div class="min-h-screen bg-gray-900 text-center">
      <BrowserRouter>
        <PageHeader />

        <Switch>
          <Route path="/firebase" exact>
            <FirebaseDemo />
          </Route>
        </Switch>

        <PageFooter />
      </BrowserRouter>
    </div>
  )
}

export default App

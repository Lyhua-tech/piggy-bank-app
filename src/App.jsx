import {React} from 'react'
import SignUp from './components/Auth/SignUp'
import Route from './components/Route'

const App = () => {
  return (
    <div>
      

      <Route path='/signup' >
        <SignUp />
      </Route>
    </div>
  )
}

export default App
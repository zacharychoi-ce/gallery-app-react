import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import CreatePost from './components/CreatePost'
import PostDetails from './components/PostDetails'
import CreateMsg from './components/Messages/CreateMsg'
import DeleteMsg from './components/Messages/DeleteMsg'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/createpost' component={CreatePost} />
          <Route path='/post/:id' component={PostDetails} />
          <Route path='/createmsg' component={CreateMsg} />
          <Route path='/deletemsg' component={DeleteMsg} />
        </main>
      </div>
    </>
  )
}

export default App

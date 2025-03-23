import React from 'react'
import Header from './components/Header/Header'
import ForumList from './components/ForumList/ForumList'
import { ForumProvider } from './context/ForumContext'

function App() {
  return (
    <ForumProvider>
      <div className="app">
        <Header />
        <main>
          <ForumList />
        </main>
      </div>
    </ForumProvider>
  )
}

export default App

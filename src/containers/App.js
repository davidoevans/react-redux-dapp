import React from 'react'
import NavBar from '../components/nav/NavBar'

const navdata = [{"title": "Home", "href": "/"}, {"title": "YAEE", "href": "/yaee"}]

class App extends React.Component {

    render() {
      return (
        <div>
          <NavBar navData={navdata}/>
          <hr/>
          {this.props.children}
        </div>
      )
    }
}

export default App

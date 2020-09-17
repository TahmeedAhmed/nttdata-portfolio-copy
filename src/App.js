import React from 'react';
import 'fontsource-roboto';
import Navbar from './Components/Navbar/Navbar';
import Introduction from './Components/Introduction/Introduction';
import About from './Components/About/About';
import Inspiration from './Components/Inspiration/Inspiration';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
    state = {
        user : {}
    }
    componentDidMount (){
        fetch('https://6d57304e-b450-4f57-b6a9-2c13488fd34f.mock.pstmn.io/profile?id=1')
        .then(response => response.json())
        .then(user => this.setState({user: user}))
    }
    render(){
        return (
            <React.Fragment>
                <Navbar id='navbar'/>
                <Introduction id='introduction' user={this.state.user}/>
                <About id='about'/>
                <Inspiration id='inspiration'/>
                <Skills id='skills' />
                <Projects id='projects' />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;
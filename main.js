import React from 'react'
import ReactDOM from 'react-dom'

class Example extends React.Component {
    render(){
	return(
	   <div> Hello World  </div>
	)
    }
}
ReactDOM.render(<Example /> , document.getElementById('app'))

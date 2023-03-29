import React, { Component } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  	function ComponentWithRouterProp(props) {
    	let location = useLocation();
    	let navigate = useNavigate();
    	let params = useParams();
    	return (
      		<Component
        		{...props}
        		location={location}
        		params={params}
        		navigate={navigate}
      		/>
    	);
  	}
  	return ComponentWithRouterProp;
}

class AddProjectForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pname: "",
            pdesc: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    myFunction() {
        return this.state;
    }
    
    async handleChange(event) {
        this.setState(
            {
                [event.target.id]: event.target.value,
            }, this.myFunction
        );
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        await fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        });
        this.props.navigate('/');
        window.location.reload(false);
    }
    render() {
        return (
            <form className='default-view' onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>Project Title:</th>
                            <td>
                                <input type="text" id='pname' onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Project Description:</th>
                            <td>
                                <textarea name="project-desc" id="pdesc" cols="60" rows="5" onChange={this.handleChange}></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="submit" />
            </form>
        )
    }
}


export default withRouter(AddProjectForm);


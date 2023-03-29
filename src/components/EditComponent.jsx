// import React from 'react'

// export default function EditComponent(props) {
//   const data = props.data;
//   const name = data.pname;
//   const desc = data.pdesc;
//   return (
//     <form className='default-view' >
//       <table>
//         <tbody>
//           <tr>
//             <th>Project Title:</th>
//             <td>
//               <input type="text" id='pname' value={name}/>
//             </td>
//           </tr>
//           <tr>
//             <th>Project Description:</th>
//             <td>
//               <textarea name="project-desc" id="pdesc" cols="60" rows="5" value={desc}></textarea>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <input type="submit" value="submit" />
//     </form>
//   )
// }


import React, { Component } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';

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

class EditComponent extends Component {
  emptyItem = {
    pname: '',
    pdesc: ''
  }
  constructor(props) {
    super(props);
    this.state = {
      project: this.emptyItem
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log(this.props);
  }


  fetchData = () => {
    // console.log(this.props.data);
    // this.setState({project:this.props.data});

    let { id } = this.props.params;
    let endpoint = 'http://localhost:8080/user/' + id;

    fetch(endpoint)
      .then(res => res.json())
      .then(data => this.setState({ project: data }));
    //binding values to the state->data
    const queryParameters = new URLSearchParams(window.location.search);
    const type = queryParameters.get("action");
    this.setState({
      action: type
    });
    // console.log(this.state);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let project = { ...this.state.project };
    project[name] = value;
    this.setState({ project });
    // console.log(project);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { project } = this.state;
    
    let { id } = this.props.params;
    let endpoint = 'http://localhost:8080/user/' + id;
    
    fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project),
    });
    this.props.navigate('/user/'+id+'?action=view');
    window.location.reload(false);
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    // console.log(this.state);
    const { project } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className='default-view' >
        <table>
          <tbody>
            <tr>
              <th>Project Title:</th>
              <td>
                <input type="text" id='pname' name='pname' value={project.pname} onChange={this.handleChange} />
              </td>
            </tr>
            <tr>
              <th>Project Description:</th>
              <td>
                <textarea name="pdesc" id="pdesc" cols="60" rows="5" value={project.pdesc} onChange={this.handleChange}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="submit" />
      </form>
    )
  }
}
export default withRouter(EditComponent);
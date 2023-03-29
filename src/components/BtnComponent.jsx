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


// export default function BtnComponent(props) {
//   return (
//     <a href={"/user/"+props.objId+"?action="+props.text} className='btn-component'>
//         {props.text}
//     </a>
//   )
// }

class BtnComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    // console.log(event);
    this.props.navigate("/user/" + this.props.objId + "?action=" + event.target.outerText);
    window.location.reload();
  }
  render() {
    return (
      <div onClick={this.handleClick} className='btn-component'>
        {this.props.text}
      </div>
    )
  }
}

export default withRouter(BtnComponent);
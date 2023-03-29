import React, { Component } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BtnComponent from './BtnComponent';


// export default function ProjectAsideCard(props) {
//     const obj = props.data; //pass the json object to the props
//     return (
//         <a href={"/user/" + obj.pid+"?action=View"}>
//             <div className='aside-project-card'>
//                 <h3 className='project-card-title'>
//                     {obj.pname}
//                 </h3>
//                 <p className='para-overflow'>
//                     {obj.pdesc}
//                 </p>
//                 <div className="aside-btns">
//                     <BtnComponent text="edit" objId={obj.pid} />
//                     <BtnComponent text="delete" objId={obj.pid} />
//                 </div>
//             </div>
//         </a>
//     )
// }

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

class ProjectAsideCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleRemove = this.handleRemove.bind(this);
    // }
    // handleRemove() {
    //     let { id } = this.props.params;
    //     let endpoint = 'http://localhost:8080/user/' + id;
    //     fetch(endpoint, {
    //         method: 'DELETE',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     this.props.navigate('/');
    //     window.location.reload(false);
    // }

    render() {
        const obj = this.props.data; //pass the json object to the props
        return (
            <Link to={"/user/" + obj.pid + "?action=view"}>
                <div className='aside-project-card'>
                    <h3 className='project-card-title'>
                        {obj.pname}
                    </h3>
                    <p className='para-overflow'>
                        {obj.pdesc}
                    </p>
                    <div className="aside-btns">
                        <BtnComponent text="edit" objId={obj.pid} />
                        <BtnComponent text="delete" objId={obj.pid} />
                    </div>
                </div>
            </Link>
        )
    }
}
export default withRouter(ProjectAsideCard);

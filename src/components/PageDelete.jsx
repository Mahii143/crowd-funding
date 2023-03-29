import React, { Component } from 'react';
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

class PageDelete extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.navigate("/user/" + this.props.params.id + "?action=view");
        window.location.reload(false);
    }
    handleRemove() {
        let { id } = this.props.params;
        let endpoint = 'http://localhost:8080/user/' + id;
        fetch(endpoint, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        this.props.navigate('/');
        window.location.reload(false);
    }
    render() {
        return (
            <div className='project-full-view' id='dlt-view-page'>
                <h1>Are you sure you want to delete this project?</h1>
                <div className="dlt-btn-container">
                    <button onClick={this.handleRemove} className='yes-dlt dlt-btn'>Yes</button>
                    <button onClick={this.goBack} className='no-dlt dlt-btn'>No</button>
                </div>
            </div>
        )
    }
}

export default withRouter(PageDelete);
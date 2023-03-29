import React, { Component } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import EditComponent from './EditComponent';
import ViewComponent from './ViewComponent';
import PageDelete from './PageDelete';

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

class ProjectView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            action: ""
        };
        this.fetchData = this.fetchData.bind(this);
        // this.remove = this.remove.bind(this);
    }

    fetchData = () => {
        let { id } = this.props.params;
        let endpoint = 'http://localhost:8080/user/' + id;
        fetch(endpoint)
            .then(res => res.json())
            .then(data => this.setState({ data })); //binding values to the state->data
        const queryParameters = new URLSearchParams(window.location.search);
        const type = queryParameters.get("action");
        // console.log(type);
        this.setState({
            action: type
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            this.fetchData();
        }
        // console.log(prevProps);
    }

    

    render() {
        const { data } = this.state;
        const action = this.state.action;
        if (action === "view") {
            return (
                <ViewComponent data={data} />
            );
        } else if (action === "edit") {
            return (
                <EditComponent data={data} />
            );
        } 
        else if (action === "delete") {
            return (
                <PageDelete/>
            );
        } 
    }
}
export default withRouter(ProjectView);
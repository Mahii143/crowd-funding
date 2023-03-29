import React, { useEffect, useState } from 'react'
import ProjectAsideCard from './ProjectAsideCard';
import AddProjectButton from './AddProjectButton';

const MainAside = () => {
    let endpoint = 'http://localhost:8080/user';
    const [data, setData] = useState([]);

    useEffect(
        () => {
            fetch(endpoint)
                .then(res => res.json())
                .then(res => setData(res))
        }, [endpoint]
    );
    const projectAside = data.map(
        (obj, id) => {
            return <ProjectAsideCard data={obj} key={id} />
        }
    );
    return (
        <div className='main-aside'>
            <div className="project-list-view-container">
                <h3>
                    <i className="fa-solid fa-rocket"></i>
                    Projects
                </h3>
                {projectAside}
            </div>
            <AddProjectButton text="Add Project" />
        </div>
    );
}
export default MainAside;
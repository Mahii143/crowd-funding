import React from 'react';
import { Outlet } from "react-router-dom";
import MainAside from './MainAside';
// import ProjectView from './ProjectView';
// import AddProjectForm from './AddProjectForm';
// import Default from './Default';
// import ErrorPage from './ErrorPage';


const Main = () => {
    return (
        <div className="app-main">
                <div className='main-section'>
                    <Outlet />
                    {/* <Routes>
                        <Route path='/' element={<Default />} />
                        <Route path='/user/:id' loader={({ params }) => { console.log(params.id); }} element={<ProjectView />} onClick={() => window.location.reload()} />
                        <Route path='/user/new' element={<AddProjectForm />} />
                        <Route path='*' element={<ErrorPage></ErrorPage>} />
                    </Routes> */}
                </div>
                <MainAside />
        </div>
    )
}
export default Main;
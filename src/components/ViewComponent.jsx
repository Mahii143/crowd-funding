import React from 'react'

export default function ViewComponent(props) {
    const data = props.data;
    return (
        <div className='project-full-view'>
            <h1 className="project-view-title">
                Project {data.pid - 99}: {data.pname}
            </h1>
            <p className="project-view-description">
                <span className='project-view-label'>
                    Project Description:
                </span>
                {data.pdesc}
            </p>
            <span className='project-view-author'>
                <span className='project-view-label'>
                    Author name:
                </span>
                Mohamed Mahir A S
            </span>
            <span className='project-view-proposed-date'>
                <span className='project-view-label'>
                    Proposed Date:
                </span>
                08-03-23
            </span>
            <span className='project-view-estimated-mcap'>
                <span className='project-view-label'>
                    Estd. Market cap:
                </span>
                10000000$
            </span>
            <p className='project-view-patent'>
                <span className='project-view-label'>
                    Patent Details:
                </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, voluptatum velit! Itaque, at iste. Ullam possimus debitis, neque perspiciatis repellat asperiores ad, repudiandae veniam dolor optio fugit at voluptates laborum similique dignissimos tenetur qui corporis placeat distinctio laudantium sapiente consequatur laboriosam dolores. Dolor dolorum natus, consequatur veniam ea sed quisquam.
            </p>
            <div className="project-view-images">
                <span className='project-view-label'>
                    Attachments:
                </span>
                <img src="" alt="img1" />
            </div>
        </div>
    )
}

import { useLoaderData } from "react-router-dom"
import {Link} from 'react-router-dom'


function ShowPost(prop){
    const job=useLoaderData()
    
    return(
        <div className='job'>
            {console.log(job)}
            <h5>Title:</h5>
            <h4>{job.jobTitle}</h4>
            <h5>Company:</h5>
            <h4>{job.companyName}</h4>
            <h5>Salary:</h5>
            <h4>${job.salary}</h4>
            <h5>Comments:</h5>
            <h4>{job.comments}</h4>
            <div >
                <button className="btn btn-primary">Add to Favorites</button>
                <button className="btn btn-success">Apply Here</button>
                <Link to={`/${job._id}/edit?data=${JSON.stringify(job)}`}>
                <button className="btn btn-dark">Update</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowPost
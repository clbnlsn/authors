import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';

const Main = props => {
    // const initialAuthor = {
    //     name:""
    // }
    // const [author,setAuthor] = useState(initialAuthor);
    const [author,setAuthor] = useState([]);
    
    useEffect(() => {
        Axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthor(res.data.results))
            .catch(err => console.log(err));
    },[])

    return(
        <table className="table bg-dark text-info table-hover table-warning">
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Ack-shaunh</th>
                </tr>
            </thead>
            <tbody>
                {
                    author.map((a,i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{a.name}</th>
                                <td>
                                    <Link to={`/edit/${a._id}`} className="text-primary">Edit</Link>
                                    
                                    {/* <Link to={`/destroy/${a._id}`} onClick={destroyProduct} className="text-warning">Destroy</Link> */}
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default Main;
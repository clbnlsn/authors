import React,{useState} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const New = props => {
    const initialAuthor = {name:""}
    const initialErrors = {name:""}
    const [author,setAuthor] = useState(initialAuthor);
    const [errors,setErrors] = useState(initialErrors);

    const handleInputChange = (e) => {
        setAuthor({
            ...author,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialErrors);
        e.preventDefault();
        Axios.post("http://localhost:8000/api/create/author",author)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                }
                else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <AuthorForm 
            inputs={author}
            errors={errors}
            submitValue="Submit New Author"
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
        />
    );
}


export default New;
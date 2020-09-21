import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const Edit = props => {
    const initialEdit = {name:""}
    const initialErrors = {name:""}
    const [edit,setEdit] = useState(initialEdit);
    const [errors,setErrors] = useState(initialErrors);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/author/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err));
    },[props])

    const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialErrors);
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/author/${props.id}`,edit)
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


    const destroyProduct = () => {
        Axios.delete(`http://localhost:8000/api/destroy/author/${props.id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <AuthorForm 
                inputs={edit}
                errors={errors}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                submitValue="Submit Edits"
            />
            <button className="btn btn-sm btn-outline-warning btn-danger text-warning m-5" onClick={destroyProduct}>Delete</button>
        </div>
    );
}

export default Edit;
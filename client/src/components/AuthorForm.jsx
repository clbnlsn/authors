import React from 'react';

const AuthorForm = props => {
    const {inputs,errors,handleInputChange,handleSubmit,submitValue} = props
    return (
        <form className="form-inline rounded col-8 mx-auto p-8 m-8" onSubmit={handleSubmit}>
            <div className="input-group col-8 mx-auto m-10 p-10">
                <label className="sr-only m-10 p-10" htmlFor="name">Name:</label>
                <input type="text" name="name" value={inputs.title} className="form-control mx-auto m-10 p-10" onChange={handleInputChange}/>
            </div>
                <span className="text-danger">{ errors.name.message ? errors.name.message : "" }</span>
            <div className="col-8 mx-auto m-10 p-10">
                <input type="submit" value={submitValue} className="btn btn-lg rounded btn-warning btn-outline-info"/>
            </div>

        </form>
    );
}

export default AuthorForm;
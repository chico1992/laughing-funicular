import React from 'react';
import {Form , Field} from 'react-final-form';

const onSubmit = values => {
    window.alert("Bonjour " + values.firstname);
}

const MyForm = () => (
    <Form
        onSubmit = {onSubmit}
        render= {({handleSubmit})=>(
            <form onSubmit={handleSubmit} >
                <div>
                    <label>First Name</label>
                    <Field 
                        name="firstname"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
                <button
                    type="submit"
                >Submit</button>
            </form>
        )}
    />
)

export default MyForm;
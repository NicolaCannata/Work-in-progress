import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component{

    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

renderInput = ({input, label, meta}) => {

    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
        /* Passando a <input/> tutte le props di formProps */
    <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="Off"/> 
        {this.renderError(meta)}
    </div>)
}

onSubmit(formValues){
    console.log(formValues)
}

    render() {
        /* handeSubmit props, metodo passata da reduxForm  */
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error"> 
                <Field name="title" component={this.renderInput} label="Inserisci Titolo Stream"/>
                <Field name="description" component={this.renderInput} label="Inserisci Descrizione Stream"/>
                <button className="ui button primary">Avanti</button>
            </form>
        )
};
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
       errors.title = "Devi inserire un titolo!"
    }

    if(!formValues.description){
        errors.description = "Devi inserire una descrizione!"
    }

return errors;

}

export default reduxForm({
    form: "streamCreate",
    validate
})(StreamCreate)
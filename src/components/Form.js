import React from "react";

const Form = (props) =>
{
    return (
        <form onSubmit={ props.getWeather }>
            <input type='text' required name='city' placeholder='city...' />
            <input type='text' required name='country' placeholder='country...' />
            <button>Get Weather</button>
        </form >
    );
};

export default Form;
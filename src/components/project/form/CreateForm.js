import React from "react";
import { useForm } from "react-hook-form";

export default function CreateForm() {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Name</label>

            {/* use aria-invalid to indicate field contain error */}
            <input
                type="text"
                id="title"
                name="title"
                aria-invalid={errors.name ? "true" : "false"}
                ref={register({ required: true, maxLength: 30 })}
            />

            {/* use role="alert" to announce the error message */}
            {errors.title && errors.title.type === "required" && (
                <span role="alert">This is required</span>
            )}
            {errors.title && errors.title.type === "maxLength" && (
                <span role="alert">Max length exceeded</span>
            )}

            <input type="submit" />
        </form>
    );
}
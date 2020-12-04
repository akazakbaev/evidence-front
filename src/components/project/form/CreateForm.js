import React from "react";
import { useForm } from "react-hook-form";

export default function CreateForm() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="basic-form-layouts">
            <div className="row match-height">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Project Info</h4>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="title">Name</label>

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
                    </div>
                </div>
            </div>
        </div>
    );
}
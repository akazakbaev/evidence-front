import React from 'react';
import { useForm } from "react-hook-form";
import CreateForm from "../form/CreateForm";

export default  class Create extends React.Component {
    render (){
        return (
            <div className="content-wrapper">
                    <CreateForm/>
            </div>
        )
    }
}
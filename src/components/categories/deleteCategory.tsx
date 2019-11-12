import React, {FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';

import Category from "./categoryInterface";
import jsonFile from "../../data/category_data.json";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function DeleteCategory() {
    const [processing, setProcessing] = useState(false);

    const [category, setCategory] = useState<Category>(jsonFile[0]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        submitCategoryToServer();
    };

    const submitCategoryToServer = () => {
        setProcessing(true);
        console.log('Deleting Category');
        console.log(category);
    };

    return (
        <div className="delete_category_container">
            <div className="delete_category_inner">
                <div className="back">
                    {!processing ?
                        <Link to={'/categories'}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </Link>
                        :
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </Link>}
                    <h1>Delete Category</h1>
                </div>
                <h2 className="text-center">
                    Are you sure you want to delete this category?
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Category</label>
                        <input id="category"
                               name="category"
                               type="text"
                               required={true}
                               value={category.category}
                               disabled={true}/>
                    </div>
                    <div className="input-group">
                        <label>Group</label>
                        <input id="group"
                               name="group"
                               type="text"
                               required={true}
                               value={category.group}
                               disabled={true}/>
                    </div>
                    <div className="input-group">
                        <label>Description</label>
                        <input id="description"
                               name="description"
                               type="text"
                               required={true}
                               value={category.description}
                               disabled={true}/>
                    </div>
                    <div className="buttons">
                        {!processing ?
                            <Link className={"cancel"} to={"/categories"}>Cancel</Link>
                            :
                            <a className={"cancel"}>Cancel</a>}
                        {!processing ?
                            <button>Delete Category</button>
                            :
                            <button type={"button"}>Loading...</button>}
                    </div>
                </form>
            </div>
        </div>
    );
}

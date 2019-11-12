import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';

import Category from "./categoryInterface";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

interface CreateCategoryProps {
    toggleAvatar: any;
    selectAvatar: any;
    selectedAvatar: number;
}

export default function CreateCategory(props: CreateCategoryProps) {

    const [processing, setProcessing] = useState(false);

    const [category, setCategory] = useState<Category>({
        id: "",
        category: "",
        group: "",
        description: ""
    });

    const selectAvatar = () => {
        props.toggleAvatar();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        submitCategoryToServer();
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        event.persist();
        setCategory({
            ...category,
            [event.target.name]: event.target.value
        });
    };

    const submitCategoryToServer = () => {
        setProcessing(true);
        console.log('Adding Category:');
        console.log(category);
    };

    return (
        <div className="create_category_container">
            <div className="create_category_inner">
                <div className="back">
                    {!processing ?
                        <Link to={'/categories'}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </Link>
                        :
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        </Link>}
                    <h1>Create Category</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group-image">
                        <label>Category Image</label>
                        <div className="image-input" onClick={selectAvatar}>
                            <img src="" alt=""/>
                            <span>Edit</span>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Category</label>
                        <input id="category"
                               name="category"
                               type="text"
                               required={true}
                               value={category.category}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Group</label>
                        <input id="group"
                               name="group"
                               type="text"
                               required={true}
                               value={category.group}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label>Description</label>
                        <input id="description"
                               name="description"
                               type="text"
                               required={true}
                               value={category.description}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="buttons">
                        {!processing ?
                            <Link className={"cancel"} to={"/categories"}>Cancel</Link>
                            :
                            <a className={"cancel"}>Cancel</a>}
                        {!processing ?
                            <button>Create Category</button>
                            :
                            <button type={"button"}>Loading...</button>}
                    </div>
                </form>
            </div>
        </div>
    );
}

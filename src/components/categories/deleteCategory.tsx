import React, {FormEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useParams, useHistory} from "react-router";
import axios from 'axios';
import {Category} from "models/category";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const initialState = {
    category_id: -1,
    name: "",
    group: "",
    description: "",
    deleted: 0,
    image: ""
};

export default function DeleteCategory() {
    const [processing, setProcessing] = useState(false);
    const [category, setCategory] = useState<Category>(initialState);
    const endpoint = `http://localhost:3000/categories`;
    const {categoryId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        axios.get(endpoint + `?categoryId=${categoryId}`).then((res) => {
            if (res.data.results.length > 0) {
                const category: Category = res.data.results[0];
                setCategory(category);
            }
        }).catch((err) => {
            alert(err);
        });
    };

    const deleteCategory = () => {
        setProcessing(true);
        axios.delete(endpoint + `?categoryId=${categoryId}`).then((res) => {
            navigateBack();
        }).catch((err) => {
            alert(err);
        }).finally(() => {
            setProcessing(false);
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        deleteCategory();
    };

    const navigateBack = () => {
        history.goBack();
    };

    return (
        <div className="delete_category_container">
            <div className="delete_category_inner">
                <div className="back">
                    {!processing ?
                        <Link to={'#'}>
                            <FontAwesomeIcon onClick={navigateBack} icon={faArrowLeft}/>
                        </Link>
                        :
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>}
                    <h1>Delete Category</h1>
                </div>
                <h2 className="text-center">
                    Are you sure you want to delete this category?
                </h2>
                {category.category_id != -1 ? <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Category</label>
                        <input id="name"
                               name="name"
                               type="text"
                               required={true}
                               value={category.name}
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
                </form> : ''}
            </div>
        </div>
    );
}

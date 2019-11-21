import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useHistory, useParams} from 'react-router';
import {useDispatch} from 'react-redux';
import {openAvatar} from 'store/actions';
import {Category, initialState} from 'models/category';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function EditCategory() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [processing, setProcessing] = useState(false);
    const [category, setCategory] = useState<Category>(initialState);
    const {categoryId} = useParams();
    const endpoint = `http://localhost:3000/categories`;

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

    const putCategory = () => {
        setProcessing(true);
        axios.put(endpoint, category).then((res) => {
            setProcessing(false);
            navigateBack();
        }).catch((error) => {
            alert(error);
            setProcessing(false);
        })
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        putCategory();
    };

    const navigateBack = () => {
        history.goBack();
    };

    return (
        <div className="edit_category_container">
            <div className="edit_category_inner">
                <div className="back">
                    {!processing ?
                        <Link to={'/categories'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>
                        :
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>}
                    <h1>Edit Category</h1>
                </div>
                {category.category_id != -1 ? <form onSubmit={handleSubmit}>
                    <div className="input-group-image">
                        <label>Category Image</label>
                        <div className="image-input" onClick={() => dispatch(openAvatar(true))}>
                            <img src="" alt=""/>
                            <span>Edit</span>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Category</label>
                        <input id="name"
                               name="name"
                               type="text"
                               required={true}
                               value={category.name}
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
                    <div className="input-group">
                        <label>Deleted</label>
                        <select name="deleted"
                                id="deleted"
                                required={true}
                                value={category.deleted}
                                onChange={handleInputChange}>
                            <option value={1}>True</option>
                            <option value={0}>False</option>
                        </select>
                    </div>
                    <div className="buttons">
                        {!processing ?
                            <Link className={"cancel"} to={"/categories"}>Cancel</Link>
                            :
                            <a className={"cancel"}>Cancel</a>}
                        {!processing ?
                            <button>Update Category</button>
                            :
                            <button type={"button"}>Loading...</button>}
                    </div>
                </form> : ''}
            </div>
        </div>
    );
}

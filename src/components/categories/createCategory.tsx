import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {Category, initialState} from 'models/category';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {openAvatar} from '../../store/actions';

export default function CreateCategory() {
    const dispatch = useDispatch();
    const [processing, setProcessing] = useState(false);
    const [category, setCategory] = useState<Category>(initialState);
    const endpoint = `http://localhost:3000/categories`;
    const history = useHistory();

    const postCategory = () => {
        setProcessing(true);
        axios.post(endpoint, category).then((res) => {
            setProcessing(false);
            history.goBack();
        }).catch((error) => {
            alert(error);
            setProcessing(false);
        });
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
        postCategory();
    };

    return (
        <div className="create_category_container">
            <div className="create_category_inner">
                <div className="back">
                    {!processing ?
                        <Link to={'/categories'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>
                        :
                        <Link to={'#'}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </Link>}
                    <h1>Create Category</h1>
                </div>
                <form onSubmit={handleSubmit}>
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
                    <div className="buttons">
                        {!processing ?
                            <Link className={'cancel'} to={'/categories'}>Cancel</Link>
                            :
                            <a className={'cancel'}>Cancel</a>}
                        {!processing ?
                            <button>Create Category</button>
                            :
                            <button type={'button'}>Loading...</button>}
                    </div>
                </form>
            </div>
        </div>
    );
}

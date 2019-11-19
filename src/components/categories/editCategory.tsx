import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from "react-router";
import axios from 'axios';
import {Category} from "models/category";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

interface EditCategoryProps {
    toggleAvatar: any;
    selectAvatar: any;
    selectedAvatar: number;
}

export default function EditCategory(props: EditCategoryProps) {
    const [processing, setProcessing] = useState(false);

    const [category, setCategory] = useState<Category>({
        category_id: -1,
        name: "",
        group: "",
        description: "",
        deleted: false,
        image: ""
    });

    const {categoryId} = useParams();
    const endpoint = `http://localhost:3000/categories`;

    const getCategory = () => {
        axios.get(endpoint + `?categoryId=${categoryId}`).then((res) => {
            const category: Category = res.data[0];
            setCategory(category);
        }).catch((err) => {
            alert(err);
        });
    };

    useEffect(() => {
        getCategory();
    }, []);

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
        axios.put(endpoint, category).then((res) => {
            console.log(category);
            console.log(res);
            alert("Updated category");
            setProcessing(false);
        }).catch((error) => {
            alert(error);
            setProcessing(false);
        })
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
                        <div className="image-input" onClick={selectAvatar}>
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

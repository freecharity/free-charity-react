import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import jsonFile from 'data/category_data.json';
import {Category} from 'models/category';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function ListCategories() {
    const [categories, setCategories] = useState<Category[]>(jsonFile);

    const endpoint = `http://localhost:3000/categories`;

    const getCategories = async () => {
        await axios(endpoint).then((result) => {
            const categories: Category[] = result.data;
            setCategories(categories);
        }).catch((error) => {
            alert(error);
        });
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="list_categories_container">
            <div className="list_categories_inner">
                <h1>List Categories</h1>
                <div className="menu">
                    <div className="search">
                        <input type="text" placeholder="Search categories"/>
                        <button>Search</button>
                    </div>
                    <div className="create_button">
                        <Link to={'/categories/create'}>Create Category</Link>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Description</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((c: Category) => {
                        return (
                            <tr key={c.category_id}>
                                <td>{c.name}</td>
                                <td>{c.group}</td>
                                <td>{c.description}</td>
                                <td>
                                    <Link to={`/categories/edit/${c.category_id}`}>Edit</Link>
                                    <Link to={`/categories/delete/${c.category_id}`}>Delete</Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <div className="pagination">
                    <div className="buttons">
                        <button><FontAwesomeIcon icon={faArrowLeft}/></button>
                        <button className="selected">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button><FontAwesomeIcon icon={faArrowRight}/></button>
                    </div>
                    <div className="results">
                        Showing 3 of 3 results
                    </div>
                </div>
            </div>
        </div>
    )
}
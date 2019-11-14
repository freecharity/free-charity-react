import React, {useState} from "react";
import {Link} from 'react-router-dom';

import jsonFile from 'data/category_data.json';
import Category from './categoryInterface';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function ListCategories() {
    const [categories, setCategories] = useState<Category[]>(jsonFile);

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
                        <th>User</th>
                        <th>IP Address</th>
                        <th>Correct</th>
                        <th>Question</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((c) => {
                        return (
                            <tr key={c.id}>
                                <td>{c.category}</td>
                                <td>{c.group}</td>
                                <td>{c.description}</td>
                                <td>
                                    <Link to={'/categories/edit'}>Edit</Link>
                                    <Link to={'/categories/delete'}>Delete</Link>
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
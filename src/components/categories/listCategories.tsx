import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Category} from 'models/category';
import Pagination from '../pagination/pagination';

export default function ListCategories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const endpoint = `http://localhost:3000/categories?page=${page}`;

    useEffect(() => {
        getCategories();
    }, [page]);

    const getCategories = () => {
        axios(endpoint).then((res) => {
            console.log(res);
            const categories: Category[] = res.data.results;
            setCategories(categories);
            setTotal(res.data.total);
        }).catch((error) => {
            alert(error);
        });
    };

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
                <Pagination results={categories} page={page} setPage={setPage} total={total}/>
            </div>
        </div>
    );
}

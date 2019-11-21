import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import Group from './groupInterface';
import {Category} from 'models/category';
import {setCategory} from '../../store/actions';

export default function SelectCategory() {
    const dispatch = useDispatch();
    const [groups, setGroups] = useState<Group[]>([]);
    const endpoint = `http://localhost:3000/categories?page=1`;
    const history = useHistory();

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        await axios(endpoint).then((result) => {
            const categories: Category[] = result.data.results;
            getGroups(categories);
        }).catch((error) => {
            alert(error);
        });
    };

    // breaks data into array of groups which contain an array of categories
    // TODO: Add this portion to the server
    const getGroups = (categories: Category[]) => {
        let groups: Array<Group> = [];
        categories.forEach((c: Category) => {
            let group = groups.find(g => g.group === c.group);
            if (group != undefined) {
                group.categories.push(c);
            } else {
                let g: Group = {
                    group: c.group,
                    categories: [c]
                };
                groups.push(g);
            }
        });
        setGroups(groups);
    };

    const selectCategory = (name: string) => {
        dispatch(setCategory(name));
        history.push('/game');
    };

    return (
        <div className="select-category_container">
            <div className="select-category_inner">
                <h1 className='text-center'>Categories</h1>
                {groups.map((g, i) => {
                    return <div className="group" key={i}>
                        <h3 className='text-center'>{g.group}</h3>
                        <div className="categories">
                            {g.categories.map((c, j) => {
                                return <div className="category"
                                            key={i + j}
                                            onClick={() => selectCategory(c.name)}>
                                    <div className="image">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="name">
                                        {c.name}
                                    </div>
                                </div>;
                            })}
                        </div>
                    </div>;
                })}
                <Link to='/game'>
                    Back to game
                </Link>
            </div>
        </div>
    );
}

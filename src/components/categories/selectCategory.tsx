import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Group from './groupInterface';
import {Category} from 'models/category';
import {setCategory} from '../../store/actions';
import {getCategories} from '../../api/categories';
import {getCategory} from '../../util/avatars';

export default function SelectCategory() {
    const dispatch = useDispatch();
    const [groups, setGroups] = useState<Group[]>([]);
    const history = useHistory();

    useEffect(() => {
        getCategories(1).then((categories: any) => {
            getGroups(categories.results);
        });
    }, []);

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
            <div className="select-category_inner animated zoomIn">
                {groups.length != 0 ?
                    <div>
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
                                                <img src={getCategory(c.image)} alt=""/>
                                            </div>
                                            <div className="name">
                                                {c.name}
                                            </div>
                                        </div>;
                                    })}
                                </div>
                            </div>;
                        })}
                        <Link to='/home'>
                            Back to Home
                        </Link>
                    </div> : 'Loading categories...'}
            </div>
        </div>
    );
}

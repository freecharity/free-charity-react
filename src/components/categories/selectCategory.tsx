import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom';

import jsonFile from 'data/category_data.json';
import Group from "./groupInterface";

interface SelectCategoryProps {
    selectCategory: any;
}

export default function SelectCategory(props: SelectCategoryProps) {

    const history = useHistory();

    // breaks data into array of groups which contain an array of categories
    // TODO: Add this portion to the server
    const getGroups = () => {
        let groups: Array<Group> = [];
        jsonFile.forEach(c => {
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
        return groups;
    };

    const [groups] = useState(getGroups());

    const selectCategory = (category: string) => {
        props.selectCategory(category);
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
                                            onClick={() => selectCategory(c.category)}>
                                    <div className="image">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="name">
                                        {c.category}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                })}
                <Link to='/game'>
                    Back to game
                </Link>
            </div>
        </div>
    )
}
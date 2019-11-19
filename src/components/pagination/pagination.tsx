import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
    results: Array<any>;
    page: number;
    setPage: any;
    total: number;
}

export default function Pagination(props: PaginationProps) {

    const prevPage = () => {
        //TODO implement prevPage
    };

    const nextPage = () => {
        //TODO implement nextPage
    };

    return (
        <div className="pagination">
            <div className="buttons">
                <button onClick={prevPage}><FontAwesomeIcon icon={faArrowLeft}/></button>
                {props.page - 2 > 0 ?
                    <button onClick={() => props.setPage(props.page - 2)}>{props.page - 2}</button> : ''}
                {props.page - 1 > 0 ?
                    <button onClick={() => props.setPage(props.page - 1)}>{props.page - 1}</button> : ''}
                <button className="selected">{props.page}</button>
                {props.total > (props.page * 10) ?
                    <button onClick={() => props.setPage(props.page + 1)}>{props.page + 1}</button> :
                    ''}
                {props.total > ((props.page + 1) * 10) ?
                    <button onClick={() => props.setPage(props.page + 2)}>{props.page + 2}</button> :
                    ''}
                <button onClick={nextPage}><FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
            <div className="results">
                Showing {((props.page - 1) * 10) + props.results.length} of {props.total} results
            </div>
        </div>
    )
}
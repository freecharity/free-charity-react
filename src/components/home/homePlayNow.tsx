import React from 'react';
import {useHistory} from 'react-router-dom';

export default function PlayNow() {
    const history = useHistory();

    return (
        <div className="play-now_container">
            <div className="play-now_inner">
                <h1>Ready to answer some questions?</h1>
                <button onClick={() => history.push('/game')}>Play Now</button>
            </div>
        </div>
    )
}
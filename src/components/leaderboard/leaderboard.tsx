import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getLeaderboard} from '../../api/leaderboard';
import {Leaderboard} from '../../models/leaderboard';
import {getAvatar} from 'util/avatars';

export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState<Leaderboard | undefined>(undefined);

    useEffect(() => {
        getLeaderboard(10).then((leaderboard) => {
            setLeaderboard(leaderboard);
        });
    }, []);

    return (
        <div className="leaderboard_container">
            <div className="leaderboard_inner animated zoomIn">
                {leaderboard ?
                    <div>
                        <h1 className='text-center'>Leaderboard</h1>
                        <h3 className='text-center'>Top Rice Earners</h3>
                        <table className="players">
                            {leaderboard.members.map((m, i) => {
                                return <tr className="player">
                                    <td>
                                        <div className="rank">
                                            {i + 1}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <img src={getAvatar(m.avatar)} alt=""/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="details">
                                            <div className="username">
                                                {m.username}
                                            </div>
                                            <div className="score">
                                                {m.score}
                                            </div>
                                        </div>
                                    </td>
                                </tr>;
                            })}
                        </table>
                        <Link to='/game'>
                            Back to game
                        </Link>
                    </div>
                    : 'Loading leaderboard...'}
            </div>
        </div>
    );
}

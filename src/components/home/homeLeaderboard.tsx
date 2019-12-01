import React from 'react';
import {Link} from 'react-router-dom';
import HomeLeaderboardMember from './homeLeaderboardMember';
import {Leaderboard, LeaderboardMember} from '../../models/leaderboard';

interface HomeLeaderboardProps {
    leaderboard: Leaderboard | undefined;
}

export default function HomeLeaderboard(props: HomeLeaderboardProps) {
    const player1: LeaderboardMember | undefined = props.leaderboard && props.leaderboard.members[0] ?
        props.leaderboard.members[0] : undefined;
    const player2: LeaderboardMember | undefined = props.leaderboard && props.leaderboard.members[0] ?
        props.leaderboard.members[1] : undefined;
    const player3: LeaderboardMember | undefined = props.leaderboard && props.leaderboard.members[0] ?
        props.leaderboard.members[2] : undefined;

    return (
        <div className="home-leaderboard_container">
            <div className="home-leaderboard_inner">
                <h1>Leaderboard</h1>
                <div className="players">
                    <div className="player-2">
                        <HomeLeaderboardMember place={2} member={player2}/>
                    </div>
                    <div className="player-1">
                        <HomeLeaderboardMember place={1} member={player1}/>
                    </div>
                    <div className="player-2">
                        <HomeLeaderboardMember place={3} member={player3}/>
                    </div>
                </div>
                <Link to={'/leaderboard'}>View Leaderboard</Link>
            </div>
        </div>
    )
}

import React from 'react';
import {LeaderboardMember} from '../../models/leaderboard';
import {avatars, getAvatar} from '../../util/avatars';

interface HomeLeaderboardMemberProps {
    place: number;
    member: LeaderboardMember | undefined;
}

export default function HomeLeaderboardMember(props: HomeLeaderboardMemberProps) {
    return (<div>
        <div className="avatar">
            <img src={props.member ? getAvatar(props.member.avatar) : avatars[0]} alt=""/>
        </div>
        <div className="place">#{props.place}</div>
        <div className="username">{props.member ? props.member.username : 'n/a'}</div>
        <div className="score">{props.member ? props.member.score : 'n/a'}</div>
    </div>);
}

import React from 'react';
import {Donation} from '../../models/donation';

interface HomeDonationsDonors {
    place: number;
    donation: Donation | undefined;
}

export default function HomeDonationDonors(props: HomeDonationsDonors) {
    return (
        <div>
            <div className="avatar">
                <img src="" alt=""/>
            </div>
            <div className="place">{props.place}</div>
            <div className="username">{props.donation ? props.donation.username : 'n/a'}</div>
            <div className="score">{props.donation ? `$${props.donation.totalDonated}` : 'n/a'}</div>
        </div>
    );
}

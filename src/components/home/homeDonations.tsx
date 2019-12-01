import React from 'react';
import {Link} from 'react-router-dom';
import {Donation} from '../../models/donation';
import HomeDonationDonors from './homeDonationsDonors';

interface HomeDonatorsProps {
    donations: Donation[] | undefined;
}

export default function HomeDonations(props: HomeDonatorsProps) {
    const donation1: Donation | undefined = props.donations && props.donations[0] ?
        props.donations[0] : undefined;
    const donation2: Donation | undefined = props.donations && props.donations[0] ?
        props.donations[1] : undefined;
    const donation3: Donation | undefined = props.donations && props.donations[0] ?
        props.donations[2] : undefined;
    return (
        <div className="home-donators_container">
            <div className="home-donators_inner">
                <h1>Top Donors</h1>
                <div className="players">
                    <div className="player-2">
                        <HomeDonationDonors place={2} donation={donation2}/>
                    </div>
                    <div className="player-1">
                        <HomeDonationDonors place={1} donation={donation1}/>
                    </div>
                    <div className="player-2">
                        <HomeDonationDonors place={3} donation={donation3}/>
                    </div>
                </div>
                <Link to={'/donate'}>Donate Today</Link>
            </div>
        </div>
    );
}

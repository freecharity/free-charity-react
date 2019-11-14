import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

interface DonationResult {
    successful: boolean;
    toggleDonation: any;
}

export default function DonationSuccessful(props: DonationResult) {

    const closeWindow = () => {
        props.toggleDonation(false, false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return <div className="donation-result_container" onClick={closeWindow}>
        <div className="donation-result_inner" onClick={stopPropagation}>
            <h1 className='text-center'>
                {props.successful ?
                    "Thank You!"
                    :
                    "Oh no!"
                }
            </h1>
            {props.successful ?
                <div className="icon successful">
                    <FontAwesomeIcon icon={faCheckCircle}/>
                </div>
                :
                <div className="icon unsuccessful">
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </div>
            }
            <p>
                {props.successful ?
                    "Your donation has been received and is greatly appreciated!"
                    :
                    "There was an issue when processing your payment"
                }
            </p>
            {props.successful ?

                <button onClick={closeWindow}>Close</button>
                :

                <button onClick={closeWindow}>Try again</button>}
        </div>
    </div>
}
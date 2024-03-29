import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {hideResult} from "../../store/actions/donateActions";

export default function DonationResult() {
    const {closed, success} = useSelector(state => state.donateReducer);
    const dispatch = useDispatch();

    const closeWindow = () => {
        dispatch(hideResult());
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    if (!closed) {
        return <div className="donation-result_container" onClick={closeWindow}>
            <div className="donation-result_inner" onClick={stopPropagation}>
                <h1 className='text-center'>
                    {success ?
                        'Thank You!'
                        :
                        'Oh no!'
                    }
                </h1>
                {success ?
                    <div className="icon successful">
                        <FontAwesomeIcon icon={faCheckCircle}/>
                    </div>
                    :
                    <div className="icon unsuccessful">
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </div>
                }
                <p>
                    {success ?
                        'Your donation has been received and is greatly appreciated!'
                        :
                        'There was an issue when processing your payment'
                    }
                </p>
                {success ?

                    <button onClick={closeWindow}>Close</button>
                    :

                    <button onClick={closeWindow}>Try again</button>}
            </div>
        </div>;
    } else {
        return <div/>;
    }
}

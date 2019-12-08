import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Elements} from 'react-stripe-elements';
import Amount from './models/amount';

import Payment from "./models/payment";
import Donation from './models/donation';
import DonateAmounts from "./donateAmounts";
import DonatePayment from "./donatePayment";

import {showResult} from "../../store/actions/donateActions";
import {postPayment} from "../../api/donation";

import jsonFile from 'data/donation_data.json';

export default function DonateForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const amounts = jsonFile;
    const [selectedAmount, setSelectedAmount] = useState(amounts[0]);
    const [donation, setDonation] = useState<Donation>({
        name: "",
        amount: 1
    });

    const selectAmount = (amount: Amount) => {
        donation.amount = amount.amountNumber;
        setSelectedAmount(amount);
    };

    const submitDonation = async (stripePayment: any) => {
        if (stripePayment.token) {
            const payment: Payment = {
                id: stripePayment.token.id,
                name: stripePayment.token.card.name,
                amount: selectedAmount.amountNumber
            };
            postPayment(payment).then((result) => {
                dispatch(showResult(true));
                history.push('/home');
            }).catch(() => {
                dispatch(showResult(false));
            });
        } else {
            dispatch(showResult(false));
        }
    };

    return (
        <div className="donate-form_container">
            <div className="donate-form_inner">
                <h1 className='text-center'>Donate</h1>
                <h3 className='text-center'>Select an amount</h3>
                <DonateAmounts amounts={amounts}
                               selectAmount={selectAmount}
                               selectedAmount={selectedAmount}/>
                <Elements>
                    <DonatePayment donation={donation}
                                   setDonation={setDonation}
                                   selectedAmount={selectedAmount}
                                   submitDonation={submitDonation}
                    />
                </Elements>
            </div>
        </div>
    )
}
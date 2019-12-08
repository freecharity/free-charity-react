import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {toggleDonate} from '../../store/actions';
import {Elements} from 'react-stripe-elements';
import DonateAmounts from "./donateAmounts";

import DonatePayment from "./donatePayment";
import Donation from './models/donation';
import Payment from "./models/payment";
import Amount from './models/amount';

import jsonFile from 'data/donation_data.json';

export default function DonateForm() {
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
        if (stripePayment.paymentMethod) {
            const payment: Payment = {
                id: stripePayment.paymentMethod.id,
                name: stripePayment.paymentMethod.billing_details.name,
                amount: selectedAmount.amountNumber
            };
            console.log('Submitting payment: ', payment);
        } else {
            dispatch(toggleDonate(false, true));
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
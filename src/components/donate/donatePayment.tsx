import React, {ChangeEvent, FormEvent, useState} from 'react';
import {CardElement, injectStripe} from "react-stripe-elements";
import {Link} from 'react-router-dom';
import Donation from './models/donation';

interface DonatePaymentProps {
    donation: Donation;
    setDonation: any;
    selectedAmount: any;
    submitDonation: any;
    elements?: any;
    stripe?: any;
}

const DonatePayment = (props: DonatePaymentProps) => {
    const [processing, setProcessing] = useState(false);
    const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
        setProcessing(true);
        if (event) {
            event.preventDefault();
        }

        let cardElement = undefined;
        if (props.elements) {
            cardElement = props.elements.getElement('card');
        }

        let payment = undefined;
        if (props.stripe) {
            // noinspection TypeScriptValidateJSTypes
            await props.stripe
                .createPaymentMethod({
                    type: 'card',
                    card: cardElement,
                    billing_details: {name: props.donation.name},
                })
                .then((result) => {
                    payment = result;
                });
        }

        if (payment) {
            await props.submitDonation(payment);
        }
        setProcessing(false);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        props.setDonation({
            ...props.donation,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="donate-payment_container">
            <div className="donate-payment_inner">
                <form onSubmit={handleSubmitForm}>
                    <div className="input-group d1">
                        <label>Display Name</label>
                        <input id="name"
                               name="name"
                               type="text"
                               required={true}
                               value={props.donation.name}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group d2">
                        <label>Amount</label>
                        <input id="amount"
                               name="amount"
                               type="text"
                               required={true}
                               value={props.donation.amount}
                               onChange={handleInputChange}
                               disabled={props.selectedAmount.amountText != '$$$'}/>
                    </div>
                    <div className="input-group d3">
                        <label>Credit Card</label>
                        <CardElement className="stripe-element"/>
                    </div>
                    <div className="buttons d4">
                        {!processing ?
                            <Link className={"cancel"} to={"/game"}>Back to game</Link>
                            :
                            <a className={"cancel"}>Back to game</a>}
                        {!processing ?
                            <button>Donate</button>
                            :
                            <button type={"button"}>Loading...</button>}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default injectStripe(DonatePayment);
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {CardElement, injectStripe} from "react-stripe-elements";
import {Link} from 'react-router-dom';
import Donation from './models/donation';
import {validateNumber, validateUsername} from "../../util/validation";
import Amount from "./models/amount";

interface DonatePaymentProps {
    donation: Donation;
    setDonation: any;
    selectedAmount: Amount;
    submitDonation: any;
    elements?: any;
    stripe?: any;
}

const DonatePayment = (props: DonatePaymentProps) => {
    const [processing, setProcessing] = useState(false);

    const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }

        if (validateUsername(props.donation.name) && validateNumber(props.selectedAmount.amountNumber)) {
            setProcessing(true);

            let cardElement = undefined;
            if (props.elements) {
                cardElement = props.elements.getElement('card');
            }

            let token = undefined;
            if (props.stripe) {
                // noinspection TypeScriptValidateJSTypes
                await props.stripe.createToken({
                    type: 'card',
                    name: props.donation.name
                }).then((result) => {
                    token = result;
                })
            }

            if (token) {
                await props.submitDonation(token);
            }
            setProcessing(false);
        }
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
                               type="number"
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
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Donation from './donationInterface';
import Amount from './amountInterface';
import jsonFile from 'data/donation_data.json';
import {toggleDonate} from '../../store/actions';

export default function Donate() {
    const dispatch = useDispatch();

    const amounts = jsonFile;
    const [selectedAmount, setSelectedAmount] = useState(amounts[0]);
    const [processing, setProcessing] = useState(false);

    const [donation, setDonation] = useState<Donation>({
        cardholderName: "",
        creditCardNumber: "",
        creditCardSecurityCode: "",
        amount: 1,
        displayName: ""
    });

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        if (event) {
            event.preventDefault();
        }
        submitDonationToServer();
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setDonation({
            ...donation,
            [event.target.name]: event.target.value
        });
    };

    const selectAmount = (amount: Amount) => {
        donation.amount = amount.amountNumber;
        setSelectedAmount(amount);
    };

    const submitDonationToServer = () => {
        // TODO Add submit implementation
        console.log('Submitting donation: ');
        console.log(donation);
        dispatch(toggleDonate(false, true));
    };

    return (
        <div className="donate_container">
            <div className="donate_inner">
                <h1 className='text-center'>Donate</h1>
                <h3 className='text-center'>Select an amount</h3>
                <div className="amounts">
                    {amounts.map((a, i) => {
                        return <div key={a.amountText + i}
                                    className={`amount ${selectedAmount === a ? 'selected' : ''}`}
                                    onClick={() => selectAmount(a)}>
                            {a.amountText}
                        </div>
                    })}
                </div>
                <form onSubmit={handleSubmitForm}>
                    <div className="input-group d1">
                        <label>Name (as it appears on card)</label>
                        <input id="cardholderName"
                               name="cardholderName"
                               type="text"
                               required={true}
                               value={donation.cardholderName}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group d2">
                        <label>Amount</label>
                        <input id="amount"
                               name="amount"
                               type="text"
                               required={true}
                               value={donation.amount}
                               onChange={handleInputChange}
                               disabled={selectedAmount.amountText != '$$$'}/>
                    </div>
                    <div className="input-group d3">
                        <label>Credit Card Number</label>
                        <input id="creditCardNumber"
                               name="creditCardNumber"
                               type="text"
                               required={true}
                               value={donation.creditCardNumber}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group d4">
                        <label>Credit Card Security Code</label>
                        <input id="creditCardSecurityCode"
                               name="creditCardSecurityCode"
                               type="text"
                               required={true}
                               value={donation.creditCardSecurityCode}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="input-group d5">
                        <label>Display Name (The name that will be displayed on this website)</label>
                        <input id="displayName"
                               name="displayName"
                               type="text"
                               required={true}
                               value={donation.displayName}
                               onChange={handleInputChange}/>
                    </div>
                    <div className="buttons d6">
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
}

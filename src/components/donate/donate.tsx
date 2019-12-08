import React, {useEffect, useState} from 'react';
import DonateForm from "./donateForm";
import {StripeProvider} from "react-stripe-elements";

export default function Donate() {
    const [stripe, setStripe] = useState<any>(null);
    useEffect(() => {
        if (window.Stripe) {
            setStripe(window.Stripe('pk_test_hYNAuzi06AU5ycEAcTsT6wsA00cRRw3HPS'));
        }
    }, [window.Stripe]);

    return (
        <div className="donate_container">
            <div className="donate_inner animated zoomIn">
                <StripeProvider stripe={stripe}>
                    <DonateForm/>
                </StripeProvider>
            </div>
        </div>
    )
}

import React from 'react';

interface DonateAmountsProps {
    amounts: any[];
    selectAmount: any;
    selectedAmount: any;
}

export default function DonateAmounts(props: DonateAmountsProps) {
    return (
        <div className="donate-amounts_container">
            <div className="donate-amounts_inner">
                <div className="amounts">
                    {props.amounts.map((a, i) => {
                        return <div key={a.amountText + i}
                                    className={`amount ${props.selectedAmount === a ? 'selected' : ''}`}
                                    onClick={() => props.selectAmount(a)}>
                            {a.amountText}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
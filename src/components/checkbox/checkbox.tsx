import React, {useState} from 'react';

interface CheckboxProps {
    item: any;
    onChecked: any;
}

export default function Checkbox(props: CheckboxProps) {
    const [checked, setChecked] = useState(false);

    const onChecked = () => {
        props.onChecked(props.item, !checked);
        setChecked(!checked);
    };

    return (
        <div className={`checkbox ${checked ? 'checked' : ''}`} onClick={onChecked}>

        </div>
    )
}
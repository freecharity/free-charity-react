import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {avatars} from '../../util/avatars';
import {closeSelectAvatar, selectAvatar} from '../../store/actions/selectAvatarActions';

export default function SelectAvatar() {
    const open = useSelector(state => state.selectAvatar.open);
    const dispatch = useDispatch();

    const closeScreen = () => {
        dispatch(closeSelectAvatar());
    };

    const preventDefault = (e) => {
        e.stopPropagation();
    };

    const clickAvatar = (avatar: string) => {
        dispatch(selectAvatar(avatar));
        closeScreen();
    };

    if (open) {
        return (
            <div className="select_avatar_container" onClick={() => closeScreen()}>
                <div className="select_avatar_inner" onClick={preventDefault}>
                    <h2 className="text-center">Select an image</h2>
                    <div className="avatars">
                        {avatars.map((a, i) => {
                            return <div key={i} className="avatar" onClick={() => clickAvatar(`avatar_${i + 1}`)}>
                                <img src={a} alt=""/>
                            </div>
                        })}
                    </div>
                    <div className="buttons">
                        <button onClick={closeScreen}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div/>;
    }
}

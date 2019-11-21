import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {openAvatar} from '../../store/actions';

export default function SelectAvatar() {
    const closed = useSelector(state => state.avatar.closed);
    const dispatch = useDispatch();
    const avatars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const closeScreen = () => {
        dispatch(openAvatar(false));
    };

    const preventDefault = (e) => {
        e.stopPropagation();
    };

    const selectAvatar = () => {
        // TODO: implement select avatar
        closeScreen();
    };

    if (!closed) {
        return (
            <div className="select_avatar_container" onClick={() => closeScreen()}>
                <div className="select_avatar_inner" onClick={preventDefault}>
                    <h2 className="text-center">Select an image</h2>
                    <div className="avatars">
                        {avatars.map((a, i) => {
                            return <div key={i} className="avatar" onClick={selectAvatar}>
                                <img src="" alt=""/>
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

import React from 'react';

interface AvatarProps {
    toggleAvatar: any;
    selectAvatar: any;
}

export default function SelectAvatar(props: AvatarProps) {

    const avatars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const closeScreen = () => {
        props.toggleAvatar();
    };

    const preventDefault = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="select_avatar_container" onClick={() => closeScreen()}>
            <div className="select_avatar_inner" onClick={preventDefault}>
                <h2 className="text-center">Select an image</h2>
                <div className="avatars">
                    {avatars.map((a, i) => {
                        return <div key={i} className="avatar" onClick={() => props.selectAvatar(i)}>
                            <img src="" alt=""/>
                        </div>
                    })}
                </div>
                <div className="buttons">
                    <button onClick={closeScreen}>Cancel</button>
                    <button>Select</button>
                </div>
            </div>
        </div>
    )
}
import React from 'react';

const DigButton = ({dig}) => {
    return (
        <div className="digButton d-flex j-center" onClick={dig}>
            <div className="mr-2">
                DIG GOLD
            </div>
            <i className="fa-solid fa-person-digging"></i>
        </div>
    );
};

export default DigButton;

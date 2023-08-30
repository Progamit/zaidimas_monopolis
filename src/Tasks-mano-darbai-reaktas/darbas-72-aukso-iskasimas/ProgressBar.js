
import React from 'react';

const ProgressBar = ({energy}) => {
    return (
        <div className="progress">
            <div style={{width: energy + '%'}}></div>
        </div>
    );
};

export default ProgressBar;
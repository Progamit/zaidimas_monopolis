import React from 'react';

const Toolbar = ({buy, lvl}) => {
    return (
        <div className="d-flex toolbar gap10">
            <div className="upgrade" onClick={()=> buy(1)}>
                <div>0.3 to gold chance</div>
                <b>Price: {lvl * 50}$</b>
            </div>
            <div className="upgrade" onClick={()=> buy(2)}>
                <div>Restore 20% energy</div>
                <b>Price: 50$</b>
            </div>
            <div className="upgrade" onClick={()=> buy(3)}>
                <div>Invetory slot</div>
                <b>Price: 100$</b>
            </div>
        </div>
    );
};

export default Toolbar;


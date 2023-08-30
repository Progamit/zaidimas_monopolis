import React from 'react';

const Inventory = ({inventory, sell, slots}) => {
    return (
        <div className="d-flex flex-column invCont">
            slots: {slots}
            <div className="d-flex wrap gap10 grow1 cont-start inventory">
                {
                    inventory.map((x, i) =>
                        <div key={i}>
                            <img src="https://static.vecteezy.com/system/resources/previews/019/527/049/original/an-8-bit-retro-styled-pixel-art-illustration-of-gold-free-png.png" alt=""/>
                            <b>Gold: {x}</b>
                        </div>
                    )
                }

            </div>
            <div className="sellButton" onClick={sell}>
                SELL GOLD
            </div>
        </div>

    );
};

export default Inventory;

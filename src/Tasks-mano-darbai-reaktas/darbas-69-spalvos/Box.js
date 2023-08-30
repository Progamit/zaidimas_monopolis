import React from 'react';

const Box = ({data}) => {
    return (
        <div className="d-flex">
            <div className="progress d-flex flex-column flex-end">
                <div style={{height: data.length * 10 + "%"}}></div>
            </div>
            <div className="box d-flex wrap a-start">
                {data.map((x, i) => <div style={{backgroundColor: x}} key={i}></div>)}
            </div>
        </div>
    );
};

export default Box;
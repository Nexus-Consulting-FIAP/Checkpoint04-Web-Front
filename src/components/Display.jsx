import { useState } from 'react';

function Display({conta, resultado}) {
    return (
        <>
            <div>
                <p className="text-gray-600 text-center">{resultado}</p>
                
                <p className="text-8xl">{conta}</p>
            </div>
        </>
    )
}
export default Display
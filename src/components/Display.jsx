import { useState } from 'react';

function Display() {
    const [valor, setValor] = useState(0)
    return (
        <>
            <div>
                <p className="text-8xl">{valor}</p>
            </div>
        </>
    )
}
export default Display
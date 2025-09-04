import { useState } from 'react';

function Display() {
    const [valor, setValor]             = useState(0)
    const [oldValor, setOldValor]       = useState(0)
    const [oldOperacao, setOldOperacao] = useState('+')
    return (
        <>
            <div>
                <div className="h-4"/>
                <p className="text-gray-600 text-center">{oldOperacao} {oldValor}</p>
                
                <p className="text-8xl">{valor}</p>
            </div>
        </>
    )
}
export default Display
function NumericButton({ valor }) {
    return (

        <>
            <div className=" cursor-pointer bg-amber-900 rounded-4xl text-center w-10 p-3 drop-shadow-sm"> 
                <h1 className="text-white">{valor}</h1>
            </div>
        </>

    )
}
export default NumericButton
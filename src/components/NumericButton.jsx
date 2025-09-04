function NumericButton({ valor, cor_botao, cor_texto }) {
    cor_botao += " drop-shadow-lg cursor-pointer rounded-full w-15 h-12 md:w-23 md:h-17 p-3 place-items-center hover:bg-purple-600"
    return (
        <>
            <div className={cor_botao}>
                <h1 className={cor_texto}>{valor}</h1>
            </div>
        </>
    )
}
export default NumericButton
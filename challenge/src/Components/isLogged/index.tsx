export function IsLogged() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-center mb-4 text-neon-600 font-medium text-xl">Você já está logado no sistema!</h3>
            <img src="/void.svg" height={300} width={300} />
            <button className="text-center mt-4 bg-neon-500 hover:bg-neon-600 text-white font-medium transition duration-200 py-2 px-4 rounded">
                <a href="/">Ir para a página inicial</a>
            </button>
        </div>
    )
}
export function IsLogged() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-center mb-6 text-2xl font-semibold">Bem-vindo!</h3>
            <div className="bg-white p-4 shadow-2xl">
                <h3 className="text-center mb-6 text-xl">Você já está logado!</h3>
            </div>
        </div>
    )
}
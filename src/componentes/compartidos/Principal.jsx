function Principal({children}) {
    return (
        <>
            <sidenav>
                <a href="http://">Lista</a>
                <a href="http://">Crear</a>
            </sidenav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Principal
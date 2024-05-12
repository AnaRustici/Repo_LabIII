import Header from "../navBar/Header"

const MainLayout = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
        </>
    )
}

export default MainLayout
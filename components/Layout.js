import NavBar from "../components/elements/NavBar"
import Footer from "../components/elements/Footer"

export const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

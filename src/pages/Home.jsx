import Header from "../components/Header/Header";
import NavBar from "../components/Nav/Navbar";
import Card from "../components/Card/Card";

export default function HomePage() {
    return (
        <>
            <Header />
            <div id="body">
                <NavBar />
                <Card />
            </div>
        </>
    )
}
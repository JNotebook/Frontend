import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="home">
                <Navbar />
                <h1>Welcome to Jupyter Notebook</h1>
                <p>Manage your notebooks, code, and projects with ease.</p>
                <div className="home-buttons">
                    <button onClick={() => navigate("/signup")}>Sign Up</button>
                    <button onClick={() => navigate("/login")}>Sign In</button>
                </div>
            </div>
        </>
    );
};

export default Home;

import { useNavigate } from "react-router-dom";
import Title from "../Components/shared/Title";
import { useContext, useEffect } from "react";
import { User } from "../Context/user";
import FormOrChecker from "@/Components/SignUpPage/FormOrChecker";

const SignUpPage = () => {

    const navigate = useNavigate();
    const { state: { userInfo }} = useContext(User);


    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo]);



    return (
        <div className="relative flex items-center bg-cover min-h-screen bg-[url('../assets/netflix-bg.jpg')]  flex-col">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <Title title="Sign Up" />
            <div className="mx-auto ml-0 z-10">
                <img src="\assets\Netflix-Logo.wine.svg" alt="Netflix Logo" className="w-22 md:w-60" />
            </div>
            <FormOrChecker></FormOrChecker>
        </div>
    );
}

export default SignUpPage;
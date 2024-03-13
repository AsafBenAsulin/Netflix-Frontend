import Title from "@/Components/shared/Title";
import Logo from "../../assets/Netflix-Logo-large.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const ResetPasswordPage = () => {
    const { token } = useParams();
    const [isToken, setIsToken] = useState(false)

    useEffect(() => {
        if (token && token.length > 0)
            setIsToken(true)
    }, [])



    return (
        <div className="flex items-center bg-cover min-h-screen md:bg-[url('../assets/netflix-bg.jpg')]  flex-col">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <Title title="Reset password" />
            <div className="mx-auto ml-0 z-10">
                <img src={Logo} alt="Netflix Logo" className="h-20 md:h-20 w-22 md:w-60" />
            </div>
            {!isToken ?
                <div>false</div>
                :
                <div>true</div>

            }
        </div>
    )
}

export default ResetPasswordPage
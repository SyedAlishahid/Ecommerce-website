import { useState } from "react";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
export default function Footer() {

    const [inpval, setInpval] = useState("")
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    function inpHandler(e) {
        setInpval(e.target.value)
    }

    function SubscribeBtnHandler() {
        if (inpval.trim() === "") {
            setTimeout(() => setError(true), 0);
            setSuccess(false);
            setTimeout(() => setError(""), 1000);
        }
        else {
            console.log(inpval);
            setInpval("")
            setError(false);
            setSuccess(true);
        }
    }

    return (
        <>
            <div className=" mt-10 ml-5">
                <div className="grid grid-cols-1 bg-slate-200 mr-5 p-3 rounded-lg ">
                    <form action="#">
                        <h1 className="font-semibold text-2xl">Subscribe to get 15% off</h1>
                        <input type="text" value={inpval} placeholder="Enter Your Email" onChange={inpHandler} className="mt-4 h-9 mr-3 p-4 rounded-lg" />
                        <Button variant="contained" onClick={SubscribeBtnHandler} sx={{
                            marginBottom: "3px",
                        }}>Contained</Button> 
                        {
                            error && <p className="text-red-500">Enter Correct info</p>
                        }
                    </form>
                </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-10">
                <div>
                    <h1 className="text-2xl font-semibold mt-10">Forever,</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum, dolor sit  amet consectetur adipisicing.</p>

                    <div className="mt-4 cursor-pointer">
                        <FacebookIcon sx={{
                            color: "blue",
                            marginLeft: "10px",
                            fontSize: "2rem",
                        }} />
                        <InstagramIcon sx={{
                            color: "#E75480",
                            marginLeft: "10px",
                            fontSize: "2rem",
                        }} />
                        <YouTubeIcon sx={{
                            color: "red",
                            marginLeft: "10px",
                            fontSize: "2rem",
                        }} />
                        <XIcon sx={{
                            color: "black",
                            marginLeft: "10px",
                            fontSize: "2rem",
                        }} />
                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="font-semibold text-2xl mb-10" >ON OUR SITE</h1>
                    <p className="mt-2 cursor-pointer text-lg font-lg">About</p>
                    <p className="mt-2 cursor-pointer text-lg font-lg">Feature</p>
                    <p className="mt-2 cursor-pointer text-lg font-lg">Support</p>
                </div> 
                <div className="mt-10">
                    <h1 className="font-semibold text-2xl mb-10" >RESOURCE</h1>
                    <p className="mt-2 cursor-pointer text-lg font-lg">Career</p>
                    <p className="mt-2 cursor-pointer text-lg font-lg">Blog</p>
                    <p className="mt-2 cursor-pointer text-lg font-lg">Legal</p>
                </div> 
                <div className="mt-10">
                    <h1 className="font-semibold text-2xl mb-10" >CONTACT</h1>
                    <p className="mt-2 cursor-pointer text-lg font-lg">@gmail.com</p>
                    <p className="mt-2 cursor-pointer text-lg font-lg">0327-****91</p>
                    <p className="mt-2 cursor-pointer text-lg font-lg">Karachi, Pakistan</p>
                </div>
                <p className="mt-8 text-sm font-semibold text-center relative bottom-0 lg:left-[30rem] ">&copy; Alishahid.outlook ALL Right Reserved.</p>
            </div>
            </div>
        </>
    )
}
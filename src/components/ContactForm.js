"use client"

import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("")
    const [result, setResult] = useState("");

    const handleSubmit = async () => {
        // console.log(name, email, phoneNumber, message);

        const response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            body: JSON.stringify({ name, email, phoneNumber, message }),
        })

        const data = await response.json();
        setResult(data);
        vaciarForm();
    }

    const vaciarForm = () =>{
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
    }





    return (
        <div className="contact-form gap-5 flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-500 text-dark">
            <h1 className="text-4xl font-bold dark:text-secondary mb-5">Contact Form</h1>
            <form class="max-w-lg mx-auto">
                <div class="relative z-0 w-full mb-4 group">
                    <input type="text" className="block mb-10 p-3 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-secondary focus:outline-none focus:ring-0  peer" placeholder=" " required value={name} onInput={(e) => { setName(e.target.value) }} />
                    <label htmlFor="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div class="relative z-0 w-full mb-1 group">
                    <input type="email" className="block mb-10 p-3 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-secondary focus:outline-none focus:ring-0 peer" placeholder=" " required value={email} onInput={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                </div>
                <div class="grid md:grid-rows-1 ">
                    <div class="relative z-0 w-full mb-4 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="block mb-10 p-3 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-secondary focus:outline-none focus:ring-0 peer" placeholder=" " required value={phoneNumber} onInput={(e) => { setPhoneNumber(e.target.value) }} />
                        <label htmlFor="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div className="relative z-0 w-full group">
                        <textarea
                            className="block mb-10 p-5 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            value={message}
                            onInput={(e) => setMessage(e.target.value)}
                            rows="4"
                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            message
                        </label>
                    </div>
                </div>
                <button type="button" class="text-dark focus:ring-2 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-secondary" onClick={handleSubmit}>Send</button>
            </form>

            <div className="">
                {result ? <div className="w-full p-5 my-20 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <span className="font-medium">Thanks! </span> {result}
                </div> : ""}
            </div>
        </div>
    )
}

export default ContactForm;
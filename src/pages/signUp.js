import { useState } from 'react';
import Background from '../assets/background_flowers2.jpg';

export default function SignUp(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    async function signUpUser() {
        try {
            const body = {
                email,
                password,
                name
            };
            // create the user
            const response = await fetch('/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await response.json(); // confusing line
            if (!response.ok) {
                throw new Error(data.message); 
            }
            // log them in
            const loginResponse = await fetch('/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            if(!loginResponse.ok) {
                throw new Error;
            }
            // get their INFO
            props.getUser();
        } catch (err) {
            console.log(err);
            props.updateUser(undefined); // Where is this from?
            console.log({ err });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUpUser();
    }

    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryBubble signupLogin">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>

                    <div className="col">
                        <label htmlFor="username">Choose User Name</label>
                        <input
                            name="username"
                            type="text"
                            id="username"
                            required
                            onChange={(e) => { setName(e.target.value); }}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="email">Enter Your Email Address</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            onChange={(e) => { setEmail(e.target.value); }}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="password">Create a Password</label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            required
                            onChange={(e) => { setPassword(e.target.value); }}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Sign Up"
                    />
                </form>
            </div>
        </div>
    )
}
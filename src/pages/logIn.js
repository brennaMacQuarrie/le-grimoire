import { useState } from 'react';
import Background from '../assets/background_flowers2.jpg';

export default function LogIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch('http://localhost:3000/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error;
            }
            props.getUser();
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryBubble signupLogin">
                <h2>LogIn</h2>
                <form>
                    
                    <div className="col">
                        <label htmlFor="email">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            // value={this.state.formData.email}
                            // onChange={this.handleFormChange}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="password">User Password</label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            required
                            // value={this.state.formData.password}
                            // onChange={this.handleFormChange}
                        />
                    </div>
                    
                    <input
                        type="submit"
                        value="Submit"
                        // disabled={!this.state.valid}
                    />
                </form>
            </div>
        </div>
    )
}
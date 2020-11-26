import Background from '../assets/background_flowers2.jpg';

export default function SignUp() {
    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryBubble signupLogin">
                <h2>Sign Up</h2>
                <form>

                    <div className="col">
                        <label htmlFor="username">User Name</label>
                        <input
                            name="username"
                            type="text"
                            id="username"
                            required
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="email">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="password">Create a Password</label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    )
}
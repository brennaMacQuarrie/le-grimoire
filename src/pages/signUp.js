import Background from '../assets/background_flowers2.jpg';

export default function SignUp() {
    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryBubble signupLogin">
                <h2>Sign Up</h2>
                <form>

                    <div>
                        <input
                            name="username"
                            type="text"
                            placeholder="username"
                            required
                        />
                    </div>

                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            required
                        />
                    </div>

                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
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
import Background from '../assets/background_flowers2.jpg';

export default function SignUp() {
    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryBubble">
                <h2>Sign Up</h2>
                <form>

                    <div>
                        <input
                            name="username"
                            type="text"
                            placeholder="Enter a username"
                            required
                        />
                    </div>

                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter an email address"
                            required
                        />
                    </div>

                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter a password"
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
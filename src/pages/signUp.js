
export default function SignUp() {
    return (
        <div className="entry">
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
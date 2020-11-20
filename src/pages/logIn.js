import Background from '../assets/background_flowers2.jpg';

export default function LogIn() {
    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryBubble">
                <h2>LogIn</h2>
                <form>
                    
                    <div>
                        <input
                            name="username"
                            type="text"
                            placeholder="Enter a username"
                            required
                            // value={this.state.formData.username}
                            // onChange={this.handleFormChange}
                        />
                    </div>
                    
                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter an email address"
                            required
                            // value={this.state.formData.email}
                            // onChange={this.handleFormChange}
                        />
                    </div>

                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter a password"
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
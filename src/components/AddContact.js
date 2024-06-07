import React from "react";

class AddContact extends React.Component {

    state = {
        name: "",
        email: "",
    };

    add = (e) => {

        // Prevents page from being refreshed when form is submitted.
       e.preventDefault();

        // Check if all fields are filled, return alert if otherwise
        if (this.state.name === "" || this.state.email === "") {
            alert("All fields are required!");

            // return this function
            return;
        }

        console.log(this.state);

        this.props.addContactHandler(this.state);

        // clear the fields after submitting contact
        this.setState({name: "", email: ""});

    };

    render() {
        return (
            <div className="ui main">
                <h2 className="ui row">Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="John Doe"
                               value={this.state.name}
                               onChange={(e) => this.setState({name : e.target.value})}/>
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="John.Doe@yahoo.com"
                        value={this.state.email}
                               onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <button type="submit" className="ui button blue">Add</button>

                </form>

            </div>
        );
    }

}

export default AddContact;


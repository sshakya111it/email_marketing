import React, { Component } from 'react'
import './Custom.css';


export default class AddProduct extends Component {
    
    render() {
        return (
            <div className="container addproduct">
                <form action='' className="white">
                    <h5 className="grey-text text-darken-3">Add Customer</h5>
                    <div className="input-field">
                        <label for="First Name">First Name</label>
                        <input type="text"/> 
                    </div>
                    <div className="input-field">
                        <label for="Last Name">Last Name</label>
                        <input type="text"/> 
                    </div>
                    <div className="input-field">
                        <label for="Email">Email</label>
                        <input type="text"/> 
                    </div>
                    <div className="input-field">
                        <label for="Number">Number</label>
                        <input type="text"/> 
                    </div>
                    <div className="input-field">
                        <label for="Address">Address</label>
                        <input type="text"/> 
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </form>
                </div>

       );
    }
}

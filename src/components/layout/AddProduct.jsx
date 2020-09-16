import React, { Component } from 'react'
import './Custom.css';


export default class AddProduct extends Component {
    
    render() {
        return (
            <div className="container addproduct">

                <form action='' className="white">
                    <h5 className="grey-text text-darken-3">Add Product</h5>
                    <div className="input-field">
                        <label for="Product Name">Product Name</label>
                        <input type="text"/> 
                    </div>
                    <div className="input-field">
                        <label for="Product Price">Product Price</label>
                        <input type="text"/> 
                    </div>
                    <div className="input-field">
                        <label for="Product Details">Product Details</label>
                        <input type="text"/> 
                    </div>
                    <div className="input-field">
                        <label for="Product Category">Product Category</label>
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

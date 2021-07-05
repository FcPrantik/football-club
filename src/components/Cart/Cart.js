import React from 'react';
import Player from '../Players/Player';

const Cart = (props) => {
    const cart = props.cart;
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalary = totalSalary + player.salary;
    }
    // const totalSalary = cart.reduce( (sum, player) => sum + player.salary, 0)
    return (
        <div>
            <h4>This is Cart:{cart.length}</h4>
            <h6>Total Salary: {totalSalary}</h6>
        </div>
    );
};

export default Cart;
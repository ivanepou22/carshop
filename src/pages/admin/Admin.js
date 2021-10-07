import React, { useEffect, useState } from 'react'
import './Admin.css';
import Table from './Table';
import Header from './Header'
// import axios from 'axios';
// https://martserver.herokuapp.com/api/v1/product - all products
// https://martserver.herokuapp.com/api/v1/product/11 - a specific

function Admin() {

    const [orders, setOrders] = useState('');
    const url = 'https://martserver.herokuapp.com/api/v1/product'
    const [loading, setloading] = useState(true);

    useEffect(  () => {
        fetch(`${url}`)
      .then((response) => response.json())
      .then((json) => setOrders(json))
      .catch((e)=>console.log(e))
      .finally(()=>setloading(false))
    }, [])

    const coloumhead = [
        {
            name: 'Order Id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Product',
            selector: row => row.product,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
            sortable: true,
        },
        {
            name: 'User Id',
            selector: row => row.user.id,
            sortable: true,
        },
        {
            name: 'User Name',
            selector: row => row.user.name,
            sortable: true,
        },
        {
            name: 'User Email',
            selector: row => row.user.email,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
            sortable: true,
        },
    ]

    return (
        <div className="admin-container">
            <Header />
            <section className="main-container">
                {
                    loading ? <p>Fetching data...</p>: <Table columns={coloumhead} data={orders} />
                }
            </section>
        </div>
    )
}

export default Admin

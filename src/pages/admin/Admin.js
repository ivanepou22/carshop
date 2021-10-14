import React, { useEffect, useState } from 'react'
import './Admin.css';
import Table from './Table';
import Header from './Header'
import axios from 'axios';
// https://martserver.herokuapp.com/api/v1/product - all products
// https://martserver.herokuapp.com/api/v1/product/11 - a specific

function Admin() {

    const [orders, setOrders] = useState('');
    const url = 'https://martserver.herokuapp.com/api/v1/product'
    const [loading, setloading] = useState(true);

    useEffect(  () => {

    axios.get(url).then((response) => {
        setOrders(response.data);
      }).catch((error) => console.log(error))
      .finally(() => setloading(false) );

    }, [])

    const columns = [
        {
            title: 'Order Id',
            field: 'id'
        },
        {
            title: 'Product',
            field: 'product',
        },
        {
            title: 'Quantity',
            field: 'quantity',
        },
        {
            title: 'User Id',
            field: 'user.id',
        },
        {
            title: 'User Name',
            field: 'user.name',
        },
        {
            title: 'User Email',
            field: 'user.email',
        },
        {
            title: 'Amount',
            field: 'amount',
            type: 'currency',
        },
    ]


    return (
        <div className="admin-container">
            <Header />
            <section className="main-container">
                {
                    loading ? <p>Fetching data...</p>: <Table columns={columns} data={orders} />
                }
            </section>
        </div>
    )
}

export default Admin

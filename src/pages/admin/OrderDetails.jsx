import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import './OrderDetails.css';
import { useParams } from "react-router-dom";
import Header from './Header';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [loading, setloading] = useState(true);
  const url = `https://martserver.herokuapp.com/api/v1/product/${id}`;

  useEffect(  () => {

    axios.get(url).then((response) => {
        setOrder(response.data);
      }).catch((error) => console.log(error))
      .finally(() => setloading(false) );

    }, [url])

    console.log(order)
    return (
        <div className="order-container">
            <Header />
            <section className="order-details">
                <h3>Order Details</h3>
                {
                    !loading ? (
                    <table className="mdc-data-table__table" aria-label="Dessert calories">
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>User Name</th>
                                <th>User Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="data-row">
                                <td className="data-column">{order.user.id}</td>
                                <td>{order.user.name}</td>
                                <td>{order.user.email}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="total-row">Total</td>
                                <td></td>
                                <td>
                                    {
                                        order.amount.toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            maximumFractionDigits: 2,
                                          })
                                    }
                                </td>
                            </tr>
                        </tfoot>
                    </table>) : (<p>Related information not found</p>)
                }

            </section>
        </div>
    )
}

export default OrderDetails

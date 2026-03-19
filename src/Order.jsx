// Orders.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://us-central1-ecommerce-nadim.cloudfunctions.net/api/orders', {
          headers: {
            'auth-api': proceprocess.env.authAPI,
          },
        });
        const sortedOrders = response.data.sort((a, b) => b.order_number - a.order_number);

        setOrders(sortedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleOrder = (orderNumber) => {
    setExpandedOrder((prevOrder) => (prevOrder === orderNumber ? null : orderNumber));
  };

  return (
    <div>
      <h1>Orders</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.order_number}>
              <button onClick={() => toggleOrder(order.order_number)}>
                {expandedOrder === order.order_number ? 'Collapse' : 'Expand'}
              </button>

              <strong>Order Number:</strong> {order.order_number}<br />
              <strong>Total Price:</strong> {order.total_price}<br />
              <strong>Phone Number:</strong> {order.phone_number}<br />

              {expandedOrder === order.order_number && (
                <>
                  <h3>Products</h3>
                  <ul>
                    {order.products.map(product => (
                      <li key={product.product_id}>
                        <strong>Product Name:</strong> {product.product_name}<br />
                        <strong>Quantity:</strong> {product.quantity}<br />
                        <strong>Product Price:</strong> {product.product_price}<br />
                        {/* Add more product details as needed */}
                        <hr />
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;

import React from 'react';
import { Badge } from 'primereact/badge';
import './Table.css';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48965798', amount: '$365.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78952115', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20867532', amount: '$95.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: '95716520', amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const Table = () => {
  return (
    <div className="card bg-dark text-white mb-3 table-card">
      <div className="table-responsive">
        <h3 className="text-white">Recent Orders</h3>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <img src={`https://i.pravatar.cc/40?img=${index + 1}`} alt={order.customer} className="avatar" />
                  {order.customer}
                </td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td>
                  <Badge value={order.status} severity={
                    order.status === 'Delivered' ? 'success' :
                    order.status === 'Pending' ? 'warning' :
                    'danger'
                  } className={
                    order.status === 'Delivered' ? 'delivered' :
                    order.status === 'Pending' ? 'pending' :
                    'cancelled'
                  } />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

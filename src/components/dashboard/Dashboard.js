import React from 'react';
import Card from '../card/Card';
import Chart from '../chart/Chart';
import Feedback from '../feedback/Feedback';
import orderIcon from '../../assets/order.jpg';
import Profit from '../profiltCard/Profit';
import CategoryCard from '../category/CategoryCard';
import Table from '../table/Table';



const Dashboard = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9" style={{ width: '66%' }}>
          <div className="row">
            <div className="col-md-3 ">
              <Card title="Total Orders" value="75" imageUrl={orderIcon} percentage="3%" arrowIcon="pi-sort-up-fill" />
            </div>
            <div className="col-md-3 ">
              <Card title="Total Delivered" value="70" imageUrl={orderIcon} percentage="3%" arrowIcon="pi-sort-down-fill" />
            </div>
            <div className="col-md-3 ">
              <Card title="Total Cancelled" value="05" imageUrl={orderIcon} percentage="3%" arrowIcon="pi-sort-up-fill" />
            </div>
            <div className="col-md-3 ">
              <Card title="Total Revenue" value="$12k" imageUrl={orderIcon} percentage="3%" arrowIcon="pi-sort-down-fill" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <Chart />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <Table />
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <Profit title="Net Profit" value="$6759.25" percentage="3%" arrowIcon="pi-sort-up-fill" />
          <CategoryCard />
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

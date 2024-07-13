import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';

const columns = [
  {
    name: 'Rank',
    selector: row => row.rank,
  },
  {
    name: 'Name',
    selector: row => row.name,
    width: '15%',
    sortable: true,
    searchable: true,
  },
  {
    name: 'Calmar Ratio',
    selector: row => row.CalmarRatio,
    width: '15%',
    sortable: true,
    searchable: true,
    cell: row => (
      <div>
        <span style={{ color: 'green' }}>
          &#9650;
        </span>
        {row.CalmarRatio}
      </div>
    ),
  },
  {
    name: 'Overall Profit',
    selector: row => row.OverallProfit,
    width: '15%',
    sortable: true,
    searchable: true,
  },
  {
    name: 'Avg. Daily Profit',
    selector: row => row.AvgDailyProfit,
    width: '15%',
    sortable: true,
    searchable: true,
  },
  {
    name: 'Win %(Day)',
    selector: row => row.WinDay,
    sortable: true,
  },
  {
    name: 'Price (Rs)',
    selector: row => row.Price,
  },
  {
    name: 'Action',
    selector: row => row.Action,
    cell: row => (
      row.Action === 'View' ? 
      <a href="/View.js" className="text-blue-500">View</a> :
      <a href="/Buy.js" className="text-blue-500">Buy</a>
    ),
  }
];

const initialData = [
  {
    id: 1,
    rank: '1',
    name: 'Selling with re entr',
    CalmarRatio: '3.96',
    OverallProfit: '	381845',
    AvgDailyProfit: '	319.54',
    WinDay: '0.65',
    Price: '-',
    Action:'View'
  },{
    id: 2,
    rank: '2',
    name: 'strategy_name',
    CalmarRatio: '3.62',
    OverallProfit: '	268872.5',
    AvgDailyProfit: '216.31',
    WinDay: '0.64',
    Price: '500',
    Action:'Buy'
  },{
    id: 3,
    rank: '3',
    name: 'Based on premium and',
    CalmarRatio: '3.42',
    OverallProfit: '216511015112',
    AvgDailyProfit: '3225',
    WinDay: 0.65,
    Price: '-',
  },{
    id: 4,
    rank: '4',
    name: 'strategy_name',
    CalmarRatio: '3.22',
    OverallProfit: '216511015112',
    AvgDailyProfit: '3225',
    WinDay: 0.65,
    Price: '-',
  },{
    id: 5,
    rank: '5',
    name: 'strategy_name',
    CalmarRatio: '3.22',
    OverallProfit: '216511015112',
    AvgDailyProfit: '3225',
    WinDay: '0.65',
    Price: '-',
  },{
    id: 6,
    rank: '6',
    name: 'Based on premium wit',
    CalmarRatio: '3.01',
    OverallProfit: '216511015112',
    AvgDailyProfit: '3225',
    WinDay: '0.49',
    Price: '-',
  },{
    id: 7,
    rank: '7',
    name: 'strategy_name',
    CalmarRatio: '2.76',
    OverallProfit: '216511',
    AvgDailyProfit: '3225',
    WinDay: '6',
    Price: '-',
  },{
    id: 8,
    rank: '8',
    name: 'Wait and trade_Save',
    CalmarRatio: '2.62',
    OverallProfit: '178252.5',
    AvgDailyProfit: '161.9',
    WinDay: '0.63',
    Price: '-',
  },{
    id: 9,
    rank: '9',
    name: 'iron condor',
    CalmarRatio: '2.44',
    OverallProfit: '176420',
    AvgDailyProfit: '137.51',
    WinDay: '0.65',
    Price: '-',
  },{
    id: 10,
    rank: '10',
    name: 'strategy_name',
    CalmarRatio: '2.04',
    OverallProfit: '244555',
    AvgDailyProfit: '198.66',
    WinDay: 198.66,
    Price: '-',
  },
  {
    id: 11,
    rank: '11',
    name: 'strategy_name',
    CalmarRatio: '2.04',
    OverallProfit: '244555',
    AvgDailyProfit: '198.66',
    WinDay: 198.66,
    Price: '-',
  },
];

const MyTable = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (e) => {
    const value = e.target.value || '';
    setSearchText(value);
    const filtered = initialData.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div className="mt-3 p-6 bg-white border border-gray-200 
     rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className='flex justify-between items-center mb-4'>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
          className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <CSVLink
          data={filteredData}
          filename={"table_data.csv"}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          target="_blank"
        >
          Export to CSV
        </CSVLink>
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        customStyles={{
          rows: {
            style: {
              minHeight: '40px', // override the row height
            },
          },
          headCells: {
            style: {
              paddingLeft: '8px', // override the cell padding for head cells
              paddingRight: '8px',
            },
          },
          cells: {
            style: {
              paddingLeft: '8px', // override the cell padding for data cells
              paddingRight: '8px',
            },
          },
        }}
      />
    </div>
  );
};

export default MyTable;

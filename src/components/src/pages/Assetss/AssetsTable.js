import { Table, Form } from 'react-bootstrap'

const headers = [
  'Name', 'Price', 'Total Supply', 'IBC Out', 'In-Chain Supply'
]
const data = [
  { name: 'umee', channelName: 'Umee Staking Coin', price: '$0.02', totalSupply: 10642511177.37, ibcOut: 25078220.03, inChainSupply: 10617432957.34 },
  { name: 'osmo', channelName: 'channel-0', price: '$0.02', totalSupply: 10642511177.37, ibcOut: 25078220.03, inChainSupply: 10617432957.34 },
  { name: 'ion', channelName: 'channel-0', price: '$0.02', totalSupply: 10642511177.37, ibcOut: 25078220.03, inChainSupply: 10617432957.34 },
  { name: 'atom', channelName: 'channel-1', price: '$0.02', totalSupply: 10642511177.37, ibcOut: 25078220.03, inChainSupply: 10617432957.34 },
  { name: 'unknown', channelName: 'channel-1', price: '$0.02', totalSupply: 10642511177.37, ibcOut: 25078220.03, inChainSupply: 10617432957.34 },
]
const AssetsTable = () => {
  return (
    <div className='k-assets-table'>
      <div className='k-assets-table-title d-flex'>
        <h4 className='cosmos-text cosmos-text-secondary'>
          related assets12
        </h4>
        <div className='d-flex'>
          <p className='cosmos-text cosmos-text-secondary'>assets type</p>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header, key) => (<th key={key}>{header}</th>))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr>
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default AssetsTable;

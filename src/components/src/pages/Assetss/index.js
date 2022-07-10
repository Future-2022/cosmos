import './style.css'
import Banner from './Banner'
import AssetsTable from './AssetsTable'

import logoIcon from './assets/assets-logo.png'

const Assets = () => {
  return (
    <div className='k-assets'>
      <div className='k-assets-title d-flex g-12 p-15'>
        <img src={logoIcon} alt='' />
        <h4 className='cosmos-text text-uppercase'>assets</h4>
      </div>
      <Banner />
      <AssetsTable />
    </div>
  )
}

export default Assets

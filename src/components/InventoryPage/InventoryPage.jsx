import './InventoryPage.css';
import InventoryIcon from './InventoryIcon';
import ListIcon from './ListIcon';
import CheckIcon from './CheckIcon';
import PaperIcon from './PaperIcon';
import WrongIcon from './WrongIcon';
import Item from './Item2';

const InventoryPage = ({}) => {
    return (
      <>
          <div className='title'>
            <InventoryIcon />
            <p>
                Inventory
            </p>
          </div>
          <div className='tabs'>
            <div className='tab'>
              <ListIcon />
              Inventory
            </div>
            <div className='tab'>
              <CheckIcon />
              Executed
            </div>
            <div className='tab'>
              <PaperIcon />
              Draft
            </div>
            <div className='tab'>
              <WrongIcon />
              Cancelled
            </div>
          </div>
          <div className='inventory'>
            <div className='header'>
              <div className='show-entries'>
                Show <input type='number' className='input-number' /> entries
              </div>
              <div className='search-container'>
                Search:
                <input type='text' className='search-box' />
              </div>
            </div>
            <div className='inventory-table'>
              <div className='column-names'>
                <p>Items</p>
                <p>Quantity</p>
                <p>Date</p>
                <p>Price</p>
                <p>Status</p>
              </div>
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
      </>
    );
  };
  
  export default InventoryPage;
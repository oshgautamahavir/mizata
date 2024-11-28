import PropTypes from 'prop-types'

import './css/Item.css'

function getFormattedDate(dateString) {
  const date = new Date(dateString)

  return date.toLocaleDateString(
    'en-us', { year:"numeric", month:"long", day:"numeric"})
}

const Item = ({ item, onClick }) => {
  return (
    <div className="item" onClick={onClick}>
      <p> { item.name } </p>
      <p> { item.quantity } </p>
      <p> { getFormattedDate(item.createdAt) } </p>
      <p> { item.price } </p>
      <p> { item.status === 0 ? 'In use' : 'In stock' } </p>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
}

export default Item;

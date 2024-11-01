import PropTypes from 'prop-types'

import './Item.css'

function getFormattedDate(dateString) {
  const date = new Date(dateString)

  return date.toLocaleDateString(
    'en-us', { year:"numeric", month:"long", day:"numeric"})
}

const Item = ({ item }) => {
  return (
    <div className="item">
      <p> { item.name } </p>
      <p> { item.quantity } </p>
      <p> { getFormattedDate(item.createdAt) } </p>
      <p> { item.price } </p>
      <p> { item.status === 0 ? 'In use' : 'Returned' } </p>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
}

export default Item;

import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function ListingItem({ item }) {
  if (item.state === 'removed') return null;

  function getPriceString() {
    let price = `${item.price}`;
    if (item.currency_code === 'USD') price = '$' + price;
    else if(item.currency_code === 'EUR') price = '€' + price;
    else price += ` ${item.currency_code}`;
    return price;
  }

  const qtyClasses = classNames(
    'item-quantity',
    {
      'level-low': item.quantity <= 10,
      'level-medium': item.quantity > 10 && item.quantity <= 20,
      'level-high': item.quantity > 20
    }
  );

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title.length > 49 ? item.title.substring(0, 49) + '...' : item.title}</p>
        <p className="item-price">{getPriceString()}</p>
        <p className={qtyClasses}>{item.quantity} left</p>
      </div>
    </div>
  )
}

ListingItem.propTypes = {
  item: PropTypes.shape({
    state: PropTypes.string,
    url: PropTypes.string,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string
    }),
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
  })
}

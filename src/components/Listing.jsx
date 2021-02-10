import ListingItem from "./ListingItem";
import PropTypes from 'prop-types';

export default function Listing({ items }) {
  return (
    <div>
      <div className="item-list">
        {items.map(item => <ListingItem key={item.listing_id} item={item} />)}
      </div>
    </div>
  )
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    listing_id: PropTypes.number.isRequired
  }))
}

import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import DetailItem from 'component/DetailItem';

import {DetailItemPageWrapper} from 'page/ProductDetailPage/style';

export default function ProductDetailPage() {
  const {
    state: {itemImgURL, itemName, itemPrice, id, disable},
  } = useLocation();

  return (
    <DetailItemPageWrapper>
      <DetailItem
        itemImgURL={itemImgURL}
        itemName={itemName}
        itemPrice={itemPrice}
        id={id}
        disabled={disable}
      />
    </DetailItemPageWrapper>
  );
}

ProductDetailPage.propTypes = {
  itemImgURL: PropTypes.string,
  itemName: PropTypes.string,
  itemPrice: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'component/common/Button';
import CheckBox from 'component/common/CheckBox';

import {ReactComponent as DeleteIcon} from 'assets/deleteIcon.svg';
import * as S from 'component/CartItem/style';

export default function CartItem({
  itemImgURL,
  itemName,
  itemPrice,
  count,
  id,
  handleDeleteIconClick = () => void 0,
}) {
  return (
    <S.CartItemLayout>
      <CheckBox id={id} />
      <img src={itemImgURL} alt="장바구니 상품 이미지" width="144px" height="144px" />
      <S.ItemNameParagraph>{itemName}</S.ItemNameParagraph>
      <S.EditQuantityBox>
        <Button onClick={handleDeleteIconClick}>
          <DeleteIcon />
        </Button>
        <div>{count} 개</div>
        <S.PriceSpan>{itemPrice.toLocaleString()}원</S.PriceSpan>
      </S.EditQuantityBox>
    </S.CartItemLayout>
  );
}

CartItem.propTypes = {
  itemImgURL: PropTypes.string,
  itemName: PropTypes.string,
  itemPrice: PropTypes.number,
  count: PropTypes.number,
  id: PropTypes.number,
  handleDeleteIconClick: PropTypes.func,
};

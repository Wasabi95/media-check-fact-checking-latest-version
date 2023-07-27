import { formatPrice } from '../utils/utils';

const Price = ({ amount }) => {
  const isAmountNegative = amount < 0;
  const amountOnUI = isAmountNegative ? -1 * amount : amount;

  return (
    <span>
      {isAmountNegative && '-'} ₹ {formatPrice(amountOnUI)}
    </span>
  );
};

export default Price;

export const calcTotal = (orderGoods) =>
  orderGoods.reduce(
    ([totalCount, totalPrice], item) => {
      const calcCount = totalCount + item.count;
      const calcPrice = totalPrice + item.count * item.price;
      return [calcCount, calcPrice];
    },
    [0, 0]
  );

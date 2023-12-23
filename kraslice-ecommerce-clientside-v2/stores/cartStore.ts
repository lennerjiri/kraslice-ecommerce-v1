import { IEggData } from '~~/interfaces/vajicka';
import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useCartStore = defineStore('cart', () => {
  interface ICart extends IEggData {
    quantity: number;
  }

  let cart = ref<ICart[]>([]);

  const addToCart = (product: IEggData) => {
    if (
      cart.value.some((item) => item._id === product._id && item.quantity < 10)
    ) {
      cart.value = cart.value.map((item) => {
        if (item._id === product._id && item.quantity < 10) {
          item.quantity += 1;
        }
        return item;
      });
      return;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (product: ICart) => {
    let flag = false;
    cart.value = cart.value.filter((item) => {
      if (
        item._id === product._id &&
        item.quantity === product.quantity &&
        !flag
      ) {
        flag = true;
        return false;
      } else {
        return true;
      }
    });
  };

  const changeQuantity = (product: ICart, quantity: number) => {
    cart.value = cart.value.map((item) => {
      if (item._id === product._id && item.quantity === product.quantity) {
        item.quantity = quantity;
      }
      return item;
    });
    console.log(quantity);
    console.log(cart.value);
  };

  return {
    cart,
    removeFromCart,
    addToCart,
    changeQuantity,
  };
});

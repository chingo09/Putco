const API = import.meta.env.VITE_API_URL || 'http://localhost:5300/api';

export const API_ENDPOINTS = {
  auth: {
    register: `${API}/auth/register`,
    login: `${API}/auth/login`,
    logout: `${API}/auth/logout`,
    checkAuth: `${API}/auth/check-auth`,
  },
  admin: {
    products: {
      upload: `${API}/admin/products/upload-image`,
      add: `${API}/admin/products/add`,
      edit: `${API}/admin/products/edit`,
      delete: `${API}/admin/products/delete`,
      get: `${API}/admin/products/get`,
    },
    orders: {
      get: `${API}/admin/orders/get`,
      details: `${API}/admin/orders/details`,
      update: `${API}/admin/orders/update`,
    },
    customLocations: {
      add: `${API}/admin/custom-locations/add`,
      get: `${API}/admin/custom-locations/get`,
      delete: (id) => `${API}/admin/custom-locations/delete/${id}`,
    },
  },
  shop: {
    products: {
      base: `${API}/shop/products`,
      details: (id) => `${API}/shop/products/${id}`,
    },
    cart: {
      add: `${API}/shop/cart/add`,
      get: `${API}/shop/cart/get`,
      delete: `${API}/shop/cart/delete`,
      update: `${API}/shop/cart/update`,
    },
    address: {
      add: `${API}/shop/address/add`,
      get: `${API}/shop/address/get`,
      delete: `${API}/shop/address/delete`,
      update: `${API}/shop/address/update`,
    },
    order: {
      create: `${API}/shop/order/create`,
      list: `${API}/shop/order/list`,
      details: `${API}/shop/order/details`,
      capture: `${API}/shop/order/capture`,
    },
    review: {
      add: `${API}/shop/review/add`,
      get: `${API}/shop/review`,
    },
    search: (keyword) => `${API}/shop/products/search?keyword=${keyword}`,
    locations: {
      nearby: `${API}/shop/locations/nearby`,
      details: (id) => `${API}/shop/locations/details/${id}`,
      search: `${API}/shop/locations/search`,
      favorites: `${API}/shop/locations/favorites`,
    },
    reviews: {
      add: `${API}/shop/reviews`,
      get: (placeId) => `${API}/shop/reviews/${placeId}`,
      delete: (reviewId) => `${API}/shop/reviews/${reviewId}`,
      update: (reviewId) => `${API}/shop/reviews/${reviewId}`,
    },
  },
  common: {
    feature: {
      add: `${API}/common/feature/add`,
      get: `${API}/common/feature/get`,
    },
  },
};

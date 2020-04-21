require('dotenv').config();

const axios = require("axios");
const request = require('request')

const API_URL = process.env.API_URL
const Customer = 'api/customer/'
const Product = 'api/product/'
const Order = 'api/order/'
const OrderItem = 'api/orderitem'


exports.addUser = (full_name, name, phone, id, email) => {
  return axios.post(API_URL + Customer, {
    data: {
      attributes: {
        id: id,
        full_name: full_name,
        phone_number: phone,
        username: name,
        email: email
      }
    }
  })
}

exports.findUser = (id) => {
  return axios.get(API_URL + Customer + id);
}

exports.getOrder = (id) => {
  return axios.get(API_URL + Customer + id + '/order');
}

exports.getOrderById = (id) => {
  return axios.get(API_URL + Order + id);
}

exports.getProducts = () => {
  return axios.get(API_URL + Product);
}

exports.getProductById = (id) => {
  return axios.get(API_URL + Product + id);
}

exports.createOrder = (data) => {
  return axios.post(API_URL + Order, data);
}

exports.addOrderItem = (id, data) => {
  return axios.post(API_URL + Order + id, data);
}

exports.updateOrderItem = (id, data) => {
  return axios.put(API_URL + OrderItem + id, data);
}

exports.updateOrder = (id, data) => {
  return axios.put(API_URL + Order + id, data);
}
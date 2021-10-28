const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: '愛愛愛愛愛',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

import { Product, Category, Order, User } from './'

User.hasMany(Order);
Order.belongsTo(User);

Category.belongsToMany(Product, { through: 'ProductCategory', onDelete: 'CASCADE', timestamps: false });
Product.belongsToMany(Category, { through: 'ProductCategory', onDelete: 'CASCADE', timestamps: false });
insert into Users(id, username, address, password, phone, email, is_deleted) values(1, 'Edgar', 'Mexico City', '$2y$12$ToaeHboyrDE73.ATIoKH7e5Vuc0D9xA7XZfLHvxqudSzfFX2gjZJ2', '1234567890', 'edgarggamartgo@gmail.com', false);
insert into Users(id, username, address, password, phone, email, is_deleted) values(2, 'Andrea', 'Mexico City', '$2y$12$eSl0JeaFwHBM9fBVFQ6fd.Qxt0sq1jwuFYf4EFSKKGmgZSPMzlK0G', '0987654321', 'andrea@gmail.com', false);

insert into Categories(id, name, is_deleted) values(1, 'TV', false);
insert into Categories(id, name, is_deleted) values(2, 'Mobile', false);

insert into Products(id, name, price, summary, is_deleted) values(1, 'Portable Monitor', '$542.99', 'This is a great monitor', false);
insert into Products(id, name, price, summary, is_deleted) values(2, 'Samsung Galaxy', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(3, 'Samsung Galaxy2', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(4, 'Samsung Galaxy3', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(5, 'Samsung Galaxy4', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(6, 'Samsung Galaxy5', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(7, 'Samsung Galaxy6', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(8, 'Samsung Galaxy7', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(9, 'Samsung Galaxy8', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(10, 'Samsung Galaxy9', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(11, 'Samsung Galaxy10', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(12, 'Samsung Galaxy11', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(13, 'Samsung Galaxy12', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(14, 'Samsung Galaxy13', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(15, 'Samsung Galaxy14', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(16, 'Samsung Galaxy15', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(17, 'Samsung Galaxy16', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(18, 'Samsung Galaxy17', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(19, 'Samsung Galaxy18', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(20, 'Samsung Galaxy19', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(21, 'Samsung Galaxy20', '$5455.99', 'This is a great phone', false);
insert into Products(id, name, price, summary, is_deleted) values(22, 'Samsung Galaxy21', '$5455.99', 'This is a great phone', false);


insert into productcategory(CategoryId, productId) values(1, 1);
insert into productcategory(CategoryId, productId) values(1, 2);
insert into productcategory(CategoryId, productId) values(2, 1);
insert into productcategory(CategoryId, productId) values(2, 2);
insert into productcategory(CategoryId, productId) values(2, 3);
insert into productcategory(CategoryId, productId) values(2, 4);
insert into productcategory(CategoryId, productId) values(2, 5);
insert into productcategory(CategoryId, productId) values(2, 6);
insert into productcategory(CategoryId, productId) values(2, 7);
insert into productcategory(CategoryId, productId) values(2, 8);
insert into productcategory(CategoryId, productId) values(2, 9);
insert into productcategory(CategoryId, productId) values(2, 10);
insert into productcategory(CategoryId, productId) values(2, 11);
insert into productcategory(CategoryId, productId) values(2, 12);
insert into productcategory(CategoryId, productId) values(2, 13);
insert into productcategory(CategoryId, productId) values(2, 14);
insert into productcategory(CategoryId, productId) values(2, 15);
insert into productcategory(CategoryId, productId) values(2, 16);
insert into productcategory(CategoryId, productId) values(2, 17);
insert into productcategory(CategoryId, productId) values(2, 18);
insert into productcategory(CategoryId, productId) values(2, 19);
insert into productcategory(CategoryId, productId) values(2, 20);
insert into productcategory(CategoryId, productId) values(2, 21);
insert into productcategory(CategoryId, productId) values(2, 22);

insert into Orders(id, order_info, is_deleted) values(1, "{\"orders\":[{\"productId\":\"1\",\"quantity\":\"2\",\"unitPrice\":\"$101.50\",\"totalPrice\":\"$203\"}]}", false);


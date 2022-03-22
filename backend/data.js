/* In data.js we are going to define a data and the data 
is object in object we are going to define productarray using [] */
import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Gokulraj',
            email: 'gokulraj@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Shabari',
            email: 'shabari@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Nike',
            category: 'Shirts',
            image: '/image/p1.jpg',
            price: 300,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product',
        },
        {
            name: 'Adidas',
            category: 'Shirts',
            image: '/image/p2.jpg',
            price: 400,
            countInStock: 10,
            brand: 'Nike',
            rating: 4,
            numReviews: 5,
            description: 'High quality product',
        },
        {
            name: 'Puma',
            category: 'Shirts',
            image: '/image/p3.jpg',
            price: 500,
            countInStock: 20,
            brand: 'Nike',
            rating: 5,
            numReviews: 3,
            description: 'High quality product',
        },
        {
            name: 'Celvine Kline',
            category: 'Shirts',
            image: '/image/p1.jpg',
            price: 600,
            countInStock: 20,
            brand: 'Nike',
            rating: 3,
            numReviews: 7,
            description: 'High quality product',
        },
        {
            name: 'Otto',
            category: 'Shirts',
            image: '/image/p2.jpg',
            price: 700,
            countInStock: 5,
            brand: 'Nike',
            rating: 2,
            numReviews: 12,
            description: 'High quality product',
        },
        {
            name: 'Alen',
            category: 'Shirts',
            image: '/image/p3.jpg',
            price: 800,
            countInStock: 15,
            brand: 'Nike',
            rating: 1,
            numReviews: 8,
            description: 'High quality product',
        },
    ],
};

export default data;

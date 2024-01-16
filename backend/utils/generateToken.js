import jwt from 'jsonwebtoken';

const generateToken = () => [
    Math.random().toString(36).substring(2, 15), // random
]

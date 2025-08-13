import express from 'express';
import userService from '../services/userService.js';
import { genrateToken, authenticate, requireAdmin } from '../authentication/jwt-authentication.js';

const router = express.Router();


// route for signup
router.post('/register', async (req, res) => {
    const { name, email, password, role, phone, city, country } = req.body;

    try {

        const existingUser = await userService.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already in use' });
        }

        const user = await userService.createUser({ name, email, password, role, phone, city, country });

        res.status(201).json({ success: true, message: `Signup for ${user.email}` });
    } catch (error) {
        console.error('Error during registration', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


// route for Login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'email & password are required'
            });
        }
        const userData = await userService.findByEmail(email);
        if (!userData) return res.status(404).json({ success: false, message: 'User not found' });

        const isMatch = await userService.verifyPassword(password, userData.password);
        if (!isMatch) return res.status(401).json({ success: false, message: 'invalid credential' });

        const tokenPayload = { id: userData.id, name: userData.name, email: userData.email, role: userData.role };
        const token = genrateToken(tokenPayload);
        console.log("token", token);

        res.status(200).json({ success: true, message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// filter by country
router.get('/filter', authenticate, async (req, res) => {
    try {
        const { country } = req.query;
        console.log("Country:", country);

        if (!country) {
            return res.status(400).json({ success: false, message: 'Country is required' });
        }

        const users = await userService.filterUsersByCountry(country);
        if (!users.length) {
            return res.status(404).json({ success: false, message: 'No users found for this country' });
        }

        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error('Error filtering users', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Search Users -> admin only
router.get('/search', authenticate, requireAdmin, async (req, res) => {
    try {
        const { query } = req.query; 
        if (!query) {
            return res.status(400).json({ success: false, message: 'Search query is required' });
        }

        const users = await userService.searchUsers(query);
        console.log(users);

        if (users.length === 0) {
            return res.status(404).json({ success: false, message: 'No users found' });
        }

        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error('error during searching users', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


// List all user info -> admin only
router.get('/all', authenticate, requireAdmin, async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error('error during fetching users', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


// user profile details
router.get('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    try {

        const userData = await userService.findById(id);
        if (!userData) return res.status(404).json({ success: false, message: 'User not found' });
        console.log("user" , userData)
      
        res.status(200).json({ success: true, user: userData });
    } catch (error) {
        console.error('Error fetching user details:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

export default router;

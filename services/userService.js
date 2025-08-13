import { AppDataSource } from '../db/data-source.js';
import { User } from '../db/entities/User.js';

class UserService {
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }
    async createUser({ name, email, password, role, phone, city, country }) {
        console.log("Email received in request:", email);

        const existingUser = await this.userRepository.findOne({ where: { email } });
        if (existingUser) throw new Error('Email already in use.');

        const newUser = this.userRepository.create({name,email,password, role,phone,city,country});

        const savedUser = await this.userRepository.save(newUser);

        return {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            role: savedUser.role,
            phone: savedUser.phone,
            city: savedUser.city,
            country: savedUser.country
        };
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        return user;
    }

    async findById(id) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async verifyPassword(password, storedPassword) {
        console.log("p", password, storedPassword);

        return password === storedPassword;
    }

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async filterUsersByCountry(country) {
        return await this.userRepository.find({
            where: { country }
        });
    }

    async searchUsers(query) {
        return await this.userRepository.find({
            where: [
                { name: query },
                { email: query }
            ]
        });
    }
    
    
}

export default new UserService();

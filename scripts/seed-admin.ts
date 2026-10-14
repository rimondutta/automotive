import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dns from 'dns';
import { loadEnvConfig } from '@next/env';

// Force node to use Google DNS for SRV queries to bypass local router issues
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Load environment variables from .env / .env.local
const projectDir = process.cwd();
loadEnvConfig(projectDir);

import User from '../models/User';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auto-repair';

async function seedAdmin() {
  try {
    console.log(`🔌 Connecting to MongoDB: ${MONGODB_URI}`);
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@autorepair.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

    console.log(`\n🔑 Seeding admin user:`);
    console.log(`- Email: ${adminEmail}`);
    console.log(`- Role: superadmin`);

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Look for existing user by email or superadmin role
    const existingUser = await User.findOne({
      $or: [{ email: adminEmail }, { role: 'superadmin' }]
    });

    if (existingUser) {
      existingUser.name = existingUser.name || 'Admin';
      existingUser.email = adminEmail;
      existingUser.password = hashedPassword;
      existingUser.role = 'superadmin';
      await existingUser.save();
      console.log(`✅ Existing admin account updated successfully for: ${adminEmail}`);
    } else {
      await User.create({
        name: 'Admin',
        email: adminEmail,
        password: hashedPassword,
        role: 'superadmin',
      });
      console.log(`New superadmin user created successfully for: ${adminEmail}`);
    }

    console.log('\n✨ Admin credentials seeded successfully!');
  } catch (error) {
    console.error('Failed to seed admin:', error);
  } finally {
    await mongoose.disconnect();
    console.log(' Disconnected from MongoDB');
    process.exit(0);
  }
}

seedAdmin();

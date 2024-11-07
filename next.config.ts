import { NextConfig } from 'next';

const url = 'mongodb+srv://naamailuz100:LGxngmDUJrDwllMH@cluster0.midvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const nextConfig: NextConfig = {
    env: {
        PUBLIC_DB_CONNECTION: url,
    },
    
};

export default nextConfig;

// js/config.js

// Hapus import.meta.env... ganti dengan string langsung
export const SupabaseConfig = {
    // URL dari Project Settings -> API di Supabase
    URL: "https://xyz.supabase.co", 
    
    // Key dari Project Settings -> API -> anon / public key (BUKAN service_role)
    KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey..." 
};

export const PiConfig = {
    version: "2.0",
    sandbox: true // Pastikan true jika Tesnet
};

export const Tables = {
    PROFILES: "profiles",
    PRODUCTS: "products",
    // ... tabel lainnya
};

// js/config.js

// 1. Mengambil data dari window (yang diisi oleh Vercel di index.html)
const SUPABASE_URL = window.env?.SUPABASE_URL || "";
const SUPABASE_KEY = window.env?.SUPABASE_KEY || "";

// 2. Validasi sederhana
if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("ERROR: Environment Variables Vercel tidak terbaca!");
    console.log("Cek: 1. Apakah sudah set di Vercel Settings? 2. Apakah sudah Redeploy?");
}

export const SupabaseConfig = {
    URL: SUPABASE_URL,
    KEY: SUPABASE_KEY
};

export const PiConfig = {
    version: "2.0",
    sandbox: true 
};

export const Tables = {
    PROFILES: "profiles",
    PRODUCTS: "products",
    FEATURED_PRODUCTS: "featured_products",
    ORDER: "order",
    ORDER_ITEM: "order_item",
    PAYMENT: "payment",
    SHIPPING: "shipping",
    REVIEWS: "reviews",
    WALLET_ADDRESS: "wallet_addres"
};

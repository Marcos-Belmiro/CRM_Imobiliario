export interface Property {
    id: string;
    title: string;
    address: string;
    price: number;
    type: 'sale' | 'rent';
    bedrooms: number;
    bathrooms: number;
    area: number; // m²
    imageUrl?: string;
    status: 'available' | 'pending' | 'sold' | 'rented';
    createdAt: Date;
}

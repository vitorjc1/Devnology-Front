export interface Product {
    external_id: number;
    name: string;
    description: string;
    category: string;
    hasDiscount: boolean;
    discount: string;
    price: number;
    images: string[];
    material: string;
    department: string;
    adjective: string;
    supplier: string;
    supplier_id: string;
}
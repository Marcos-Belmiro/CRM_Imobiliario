import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import type { Property } from '../types/property';

interface PropertyCardProps {
    property: Property;
    onClick?: () => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
    const statusColors = {
        available: 'bg-green-100 text-green-700',
        pending: 'bg-yellow-100 text-yellow-700',
        sold: 'bg-blue-100 text-blue-700',
        rented: 'bg-purple-100 text-purple-700',
    };

    const statusLabels = {
        available: 'Available',
        pending: 'Pending',
        sold: 'Sold',
        rented: 'Rented',
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div
            onClick={onClick}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
        >
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                {property.imageUrl ? (
                    <img
                        src={property.imageUrl}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <Square className="w-16 h-16 text-blue-400" />
                    </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                    <span className={clsx('px-3 py-1 rounded-full text-xs font-semibold', statusColors[property.status])}>
                        {statusLabels[property.status]}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                        {property.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="line-clamp-1">{property.address}</span>
                    </div>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        <span>{property.area}m²</span>
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500 mb-1">
                            {property.type === 'sale' ? 'Sale Price' : 'Monthly Rent'}
                        </p>
                        <p className="text-xl font-bold text-blue-600">
                            {formatPrice(property.price)}
                        </p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;

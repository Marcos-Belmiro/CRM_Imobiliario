import { clsx } from 'clsx';
import type { LucideIcon } from 'lucide-react';

interface KPICardProps {
    title: string;
    value: string | number;
    change?: string;
    trend?: 'up' | 'down' | 'neutral';
    icon: LucideIcon;
    color?: 'blue' | 'green' | 'purple' | 'orange';
}

const KPICard = ({ title, value, change, trend, icon: Icon, color = 'blue' }: KPICardProps) => {
    const colorStyles = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        purple: 'bg-purple-50 text-purple-600',
        orange: 'bg-orange-50 text-orange-600',
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <div className={clsx('p-3 rounded-xl', colorStyles[color])}>
                    <Icon className="w-6 h-6" />
                </div>
                {change && (
                    <span className={clsx(
                        'text-sm font-medium px-2 py-1 rounded-full',
                        trend === 'up' ? 'bg-green-50 text-green-600' :
                            trend === 'down' ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600'
                    )}>
                        {change}
                    </span>
                )}
            </div>

            <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
    );
};

export default KPICard;

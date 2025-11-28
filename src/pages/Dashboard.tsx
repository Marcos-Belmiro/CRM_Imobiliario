import { Building2, Users, Wallet } from 'lucide-react';
import KPICard from '../components/KPICard';
import PropertyCard from '../components/PropertyCard';
import { mockProperties } from '../data/mockProperties';

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Welcome back, Belmiro</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                    + Add Property
                </button>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <KPICard
                    title="Total Properties"
                    value={mockProperties.length}
                    change="+2 this month"
                    trend="up"
                    icon={Building2}
                    color="blue"
                />
                <KPICard
                    title="Active Leads"
                    value="45"
                    change="+12% vs last month"
                    trend="up"
                    icon={Users}
                    color="purple"
                />
                <KPICard
                    title="Total Revenue"
                    value="R$ 1.2M"
                    change="Pending closure"
                    trend="neutral"
                    icon={Wallet}
                    color="green"
                />
            </div>

            {/* Recent Properties Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-900">Recent Properties</h2>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockProperties.slice(0, 6).map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onClick={() => console.log('Property clicked:', property.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

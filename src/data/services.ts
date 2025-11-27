import { Drill, Shovel, Truck, Mountain } from 'lucide-react';
import blastingImage from '@/assets/services/mountain-blasting.webp';
import excavationImage from '@/assets/services/graving.webp';
import transportImage from '@/assets/services/mass-transport.webp';
import quarryImage from '@/assets/services/purchasing.webp';
import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
    {
        title: 'Rock Blasting',
        description: 'From drilling to large-scale production jobs.',
        icon: Drill,
        image: blastingImage,
        details: 'Professional controlled blasting operations for construction and quarry projects.'
    },
    {
        title: 'Excavation',
        description: 'Groundwork, leveling, drainage, and trenching.',
        icon: Shovel,
        image: excavationImage,
        details: 'Complete earthmoving services for residential, commercial, and industrial projects.'
    },
    {
        title: 'Mass Transport',
        description: 'Fast delivery of gravel, bark, stone, and other fill materials.',
        icon: Truck,
        image: transportImage,
        details: 'Reliable transportation of construction materials with our modern fleet.'
    },
    {
        title: 'Quarry',
        description: 'Gravel and crushed stone production, including custom crushing.',
        icon: Mountain,
        image: quarryImage,
        details: 'High-quality aggregates and stone products for construction projects.'
    },
];

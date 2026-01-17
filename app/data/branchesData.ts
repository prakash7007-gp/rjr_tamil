
import branchesRaw from './branches.json';

export interface Branch {
    id: string;
    city: string;
    address: string;
    mapUrl: string;
    doctorName: string;
    doctorImage: string;
    phone: string;
}

export interface Region {
    name: string;
    count: number;
    branches: Branch[];
}

export const branchesData: Region[] = branchesRaw.map((region: any) => ({
    name: region.state,
    count: region.branches.length,
    branches: region.branches
}));

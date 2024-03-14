interface Position {
    id: number;
    position: string;
    employeeId: number;
    restaurantId: number;
    services: string[];
    createdAt: string;
    updatedAt: string;
}

interface Applicant {
    id: number;
    name: string;
    email: string;
    experience: string[];
    phoneNumber: number;
    address: string;
    skillTags: string[];
    hourlyRate: number;
    imageUrl: string;
    availability: any[];
    createdAt: string;
    updatedAt: string;
}

export interface Employee {
    id: number;
    restaurantId: number;
    name: string;
    email: string;
    experience: string[];
    phoneNumber: number;
    address: string;
    skillTags: string[];
    hourlyRate: number;
    efficiency: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    positionId: number;
    applicantId: number | null;
    position: Position;
    applicant: Applicant | null;
}

export interface Waiter {
    name: string;
    servedOrders: number;
}

export interface Chef {
    name: string;
    servedOrders: number;
}

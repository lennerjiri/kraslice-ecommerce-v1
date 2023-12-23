interface IFoundUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    role: number;
    status: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

interface IFoundUserPasswordOptional {
    _id: string;
    username: string;
    email: string;
    password?: string;
    role: number;
    status: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

interface ISignCandidate {
    data: {
        email: string;
        password: string;
    };
}

export { IFoundUser, ISignCandidate, IFoundUserPasswordOptional };

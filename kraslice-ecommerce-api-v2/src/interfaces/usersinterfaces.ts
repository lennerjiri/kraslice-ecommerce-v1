interface IUser {
    data: {
        _id: string;
        username: string;
        email: string;
        password?: string;
        role: number;
        status: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        __v?: number;
    };
}

interface INewUser {
    data: {
        _id?: string;
        username?: string;
        email?: string;
        password?: string;
        role?: number;
        status?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        __v?: number;
    };
}

interface ICreatedUser {
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

interface IUpdateUser {
    data: {
        _id?: string;
        username?: string;
        email?: string;
        password?: string;
        role?: number;
        status?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        __v?: number;
    };
}

export { IUser, INewUser, ICreatedUser, IUpdateUser };

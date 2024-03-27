interface IPropertyInfo {
    propertyName: string,
    description: string,
    propertyType: string,
    listedIn: string,
    price: string,
}

export type {
    IPropertyInfo,
}

interface IProfileInfo  {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    bio: string
}

export type {
    IProfileInfo
}

export interface picturePromiseType {
    data: {
        image_url: string,
    }
}

export interface picturesGroupType {
    [key: string]: itemsType
}

interface itemsType {
    items: string[]
}


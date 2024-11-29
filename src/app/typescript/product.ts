export interface Shoes {
    nameOfproduct: string,
    price: number,
    description: string,
    folderName: string, 
    imageDisplay: string,
    listOfDetailedImage: string[],
    imageFileType: string,
    numberOfcolors: number,
    listOfcolors: string[],
    origin: string[],
    linkMain: string,
    listOfsize: number[];
    local_id: number;
}

export function createShoes(shoes : Partial<Shoes>) : Shoes {
    return {
        local_id: -1,
        listOfsize: [40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5],
        nameOfproduct: shoes.nameOfproduct ?? "Default Name",  // Fallback value
        price: shoes.price ?? 0,  // Fallback value
        description: shoes.description ?? "Default Description",  // Fallback
        folderName: shoes.folderName ?? "default-folder",
        imageDisplay: shoes.imageDisplay ?? "default-image.jpg",
        listOfDetailedImage: shoes.listOfDetailedImage ?? [],
        imageFileType: shoes.imageFileType ?? "jpg",
        numberOfcolors: shoes.numberOfcolors ?? 1,
        listOfcolors: shoes.listOfcolors ?? ["Default Color"],
        origin: shoes.origin ?? ["Unknown"],
        linkMain: shoes.linkMain ?? "default-link",
    };
}
import {allPicturesType} from "../../redux/reducers/types";

export interface picturesItemType {
    picture: string,
    tag: string
}

export interface picturesBlockType {
    pictureBlock: allPicturesType[]
}
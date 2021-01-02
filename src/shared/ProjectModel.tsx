import {ProjectFileModel} from "./ProjectFileModel";

export type ProjectModel = {
    id: string,
    name: string,
    thumb?: string,
    url?: string,
    apidoc?: string,
    github: string,
    wordpress: string,
    npm: string,
    files?: ProjectFileModel[],
    gallery?: string[],
    about?: string,
    readme?: string,
    tags?: string[],
    featured: boolean,
    portfolio_hide?: boolean,
    unrestricted_files?: boolean
}
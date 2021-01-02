import {ProjectFileModel} from "./ProjectFileModel";

export type ProjectModel = {
    id: string,
    name: string,
    thumb: string,
    url: string | undefined | null,
    apidoc: string | undefined | null,
    github: string | undefined | null,
    wordpress: string | undefined | null,
    npm: string | undefined | null,
    files: ProjectFileModel[],
    gallery: string[],
    about: string | undefined | null,
    readme: string | undefined | null,
    tags: string[],
    featured: boolean,
    portfolio_hide?: boolean,
    unrestricted_files: boolean
}
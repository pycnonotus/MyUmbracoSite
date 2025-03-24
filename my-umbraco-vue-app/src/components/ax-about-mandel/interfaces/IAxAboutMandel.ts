export interface IAxAboutMandel {
    contentType?: string;
    id?: string;
    properties: AxAboutMandelProperties;
}

export interface AxAboutMandelProperties {
    title: string;
    description: string;
    link: LinkItem[];
    units: UnitsCollection;
}

export interface UnitsCollection {
    items: UnitItem[];
}

export interface UnitItem {
    content: AboutMandelFooterItem;
    settings: any | null; // or define a more specific type if available
}

export interface AboutMandelFooterItem {
    contentType: string;
    id: string;
    properties: AboutMandelFooterItemProperties;
}

export interface AboutMandelFooterItemProperties {
    logo: MediaItem[];
    title: string;
    description: string;
    image: MediaItem[];
    link: LinkItem[];
}

export interface MediaItem {
    properties: MediaProperties;
    focalPoint: any | null;  // adjust if you have a specific type for the focal point
    crops: any[];            // or a more specific interface if known
    id: string;
    name: string;
    mediaType: string;
    url: string;
    extension: string;
    width: number;
    height: number;
    bytes: number;
}

export interface MediaProperties {
    umbracoFile: string;
    umbracoWidth: number;
    umbracoHeight: number;
    umbracoBytes: number;
    umbracoExtension: string;
    alt: string;
    credit: string;
}

export interface LinkItem {
    url: string ;
    queryString: string | null;
    title: string;
    target: string | null;
    destinationId: string | null;
    destinationType: string | null;
    route: any | null;       // adjust if a route interface is known
    linkType: string;
}

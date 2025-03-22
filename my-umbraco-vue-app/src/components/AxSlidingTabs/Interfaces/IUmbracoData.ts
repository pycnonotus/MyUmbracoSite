export interface IUmbracoData<T> {
    contentType: string;
    id: string;
    properties: T;
}

export interface TabsSliderProperties {
    mainTitle: string;
    enableAutoTransition: boolean;
    tabs: Tabs;
}

export interface Tabs {
    items: TabItemContainer[];
}

export interface TabItemContainer {
    content: TabItemContent;
    settings: any; // This may be refined if settings has a specific structure
}

export interface TabItemContent {
    contentType: string;
    id: string;
    properties: TabItemProperties;
}

export interface TabItemProperties {
    image: ImageItem[];
    title: string;
    description: string;
    link: LinkItem[];
}

export interface ImageItem {
    properties: ImageProperties;
    focalPoint: any; // Adjust if you expect a specific type (e.g., a coordinate object)
    crops: any[]; // Replace with a specific type if available
    id: string;
    name: string;
    mediaType: string;
    url: string;
    extension: string;
    width: number;
    height: number;
    bytes: number;
}

export interface ImageProperties {
    umbracoFile: string;
    umbracoWidth: number;
    umbracoHeight: number;
    umbracoBytes: number;
    umbracoExtension: string;
    alt: string;
    credit: string;
}

export interface LinkItem {
    url: string | null;
    queryString: string | null;
    title: string;
    target: string | null;
    destinationId: string | null;
    destinationType: string | null;
    route: Route | null;
    linkType: string;
}

export interface Route {
    path: string;
    startItem: StartItem;
}

export interface StartItem {
    id: string;
    path: string;
}

import type {TabItemProperties} from "./IUmbracoData.ts";

export interface IAxSlidingTabsItem {
    isActive: boolean;
    item: TabItemProperties;
}

export type IAxSlidingTabsItemCollection = Omit<IAxSlidingTabsItem, 'isActive'>[];
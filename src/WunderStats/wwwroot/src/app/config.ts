import { inject } from "aurelia-framework";
import { WunderlistApi } from "../services/WunderlistApi";
import { customElement } from "aurelia-framework";

export interface IComboboxItem {
    value: any;
    name: any;
}

@inject(WunderlistApi)
@customElement("app:config")
export class Config {
    constructor(private wunderlistApi: WunderlistApi) {

    }
}
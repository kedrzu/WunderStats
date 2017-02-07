﻿import { inject } from "aurelia-framework";
import { HttpClient } from 'aurelia-fetch-client';
import { buildQueryString } from "aurelia-path";

const localStorageKey = "Wunderlist-AccessToken";
const clientId = "f0213e52799e3070a4ca";

export class WunderlistApi {

    private accessTokenValue: string;
    private client: HttpClient;

    constructor() {
        this.accessTokenValue = window.localStorage.getItem(localStorageKey);
        this.client = new HttpClient();
        this.configClient();
    }

    private configClient() {
        this.client.configure(config => {
            console.log(this.accessToken, clientId);
            config
                .withBaseUrl("https://a.wunderlist.com/api/v1/")
                .withDefaults({
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "X-Access-Token": this.accessToken,
                        "X-Client-ID": clientId
                    }
                });
        });
    }

    public get accessToken() {
        return this.accessTokenValue;
    }

    public set accessToken(value: string) {
        this.accessTokenValue = value;
        window.localStorage.setItem(localStorageKey, value);
    }

    public getLists(): Promise<Wunderlist.ITaskList[]> {
        return this.get<Wunderlist.ITaskList[]>("lists");
    }

    public getTasks(listId: number) {
        return this.get<Wunderlist.ITask[]>("tasks", { list_id: listId });
    }

    public getCompletedTasks(listId: number) {
        return this.get<Wunderlist.ITask[]>("tasks", { list_id: listId, completed: true });
    }

    private get<T>(resource: string, params?: IDictionary<any>): Promise<T> {
        if (params) 
            resource = `${resource}?${buildQueryString(params)}`;

        return this.client.fetch(resource).then(r => r.json<T>());
    }
}

import { inject } from "aurelia-framework";
import { HttpClient } from 'aurelia-fetch-client';

const localStorageKey = "Wunderlist-AccessToken";
const clientId = "f0213e52799e3070a4ca";

@inject()
export class WunderlistApi {

    private accessTokenValue: string;
    private client : HttpClient;

    constructor() {
        this.accessTokenValue = window.localStorage.getItem(localStorageKey);
        this.client = new HttpClient();
    }

    get accessToken() {
        return this.accessTokenValue;
    }

    set accessToken(value: string) {
        this.accessTokenValue = value;
        window.localStorage.setItem(localStorageKey, value);
    }
}
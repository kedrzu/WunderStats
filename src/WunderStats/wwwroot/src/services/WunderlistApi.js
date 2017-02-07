import { HttpClient } from 'aurelia-fetch-client';
import { buildQueryString } from "aurelia-path";
const localStorageKey = "Wunderlist-AccessToken";
const clientId = "f0213e52799e3070a4ca";
export class WunderlistApi {
    constructor() {
        this.accessTokenValue = window.localStorage.getItem(localStorageKey);
        this.client = new HttpClient();
        this.configClient();
    }
    configClient() {
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
    get accessToken() {
        return this.accessTokenValue;
    }
    set accessToken(value) {
        this.accessTokenValue = value;
        window.localStorage.setItem(localStorageKey, value);
    }
    getLists() {
        return this.get("lists");
    }
    getTasks(listId) {
        return this.get("tasks", { list_id: listId });
    }
    getCompletedTasks(listId) {
        return this.get("tasks", { list_id: listId, completed: true });
    }
    get(resource, params) {
        if (params)
            resource = `${resource}?${buildQueryString(params)}`;
        return this.client.fetch(resource).then(r => r.json());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3VuZGVybGlzdEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIld1bmRlcmxpc3RBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVoRCxNQUFNLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQztBQUNqRCxNQUFNLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQztBQUV4QyxNQUFNO0lBS0Y7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sWUFBWTtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNO2lCQUNELFdBQVcsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDL0MsWUFBWSxDQUFDO2dCQUNWLE1BQU0sRUFBRSxLQUFLO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRTtvQkFDTCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVztvQkFDbEMsYUFBYSxFQUFFLFFBQVE7aUJBQzFCO2FBQ0osQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFFBQVE7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUIsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxNQUFjO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFxQixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0saUJBQWlCLENBQUMsTUFBYztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBcUIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU8sR0FBRyxDQUFJLFFBQWdCLEVBQUUsTUFBeUI7UUFDdEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ1AsUUFBUSxHQUFHLEdBQUcsUUFBUSxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFekQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNKIn0=
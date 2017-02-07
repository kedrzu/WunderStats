var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from "aurelia-framework";
import { WunderlistApi } from "../services/WunderlistApi";
import { TaskJournal } from "../services/TaskJournal";
import { customElement } from "aurelia-framework";
let Config = class Config {
    constructor(wunderlistApi, journal) {
        this.wunderlistApi = wunderlistApi;
        this.journal = journal;
    }
};
Config = __decorate([
    inject(WunderlistApi, TaskJournal),
    customElement("app:config")
], Config);
export { Config };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVNsRCxJQUFhLE1BQU0sR0FBbkI7SUFDSSxZQUFvQixhQUE0QixFQUFVLE9BQXFCO1FBQTNELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYztJQUUvRSxDQUFDO0NBQ0osQ0FBQTtBQUpZLE1BQU07SUFGbEIsTUFBTSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7SUFDbEMsYUFBYSxDQUFDLFlBQVksQ0FBQztHQUNmLE1BQU0sQ0FJbEI7U0FKWSxNQUFNIn0=
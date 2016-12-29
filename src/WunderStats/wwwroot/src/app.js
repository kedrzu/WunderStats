var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";
let App = class App {
    configureRouter(config, router) {
        this.router = router;
        config.title = "AureliaTSapp";
        config.map([
            { route: ["", "todos"], moduleId: "./views/values", nav: true, title: "Values" },
        ]);
    }
};
App = __decorate([
    inject(Router)
], App);
export { App };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsSUFBYSxHQUFHLEdBQWhCO0lBR0ksZUFBZSxDQUFDLE1BQVksRUFBRSxNQUFjO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDUCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1NBRW5GLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFBO0FBWlksR0FBRztJQURmLE1BQU0sQ0FBQyxNQUFNLENBQUM7R0FDRixHQUFHLENBWWY7U0FaWSxHQUFHIn0=
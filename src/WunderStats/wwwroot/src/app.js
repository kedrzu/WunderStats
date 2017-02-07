var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";
let App = class App {
    constructor() {
        this.items = [
            { value: "male", name: "Male" },
            { value: "female", name: "Female" },
        ];
        this.gender = "female";
    }
    addGender() {
        if (this.customGender) {
            this.items.push({ value: this.customGender.toLowerCase(), name: this.customGender });
            this.customGender = null;
        }
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsSUFBYSxHQUFHLEdBQWhCO0lBREE7UUFJVyxVQUFLLEdBQUc7WUFDWCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUMvQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtTQUN0QyxDQUFDO1FBRVEsV0FBTSxHQUFZLFFBQVEsQ0FBQztJQW9CekMsQ0FBQztJQWpCYSxTQUFTO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBVyxFQUFFLE1BQWM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsTUFBTSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7UUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNQLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7U0FFbkYsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKLENBQUE7QUE1QlksR0FBRztJQURmLE1BQU0sQ0FBQyxNQUFNLENBQUM7R0FDRixHQUFHLENBNEJmO1NBNUJZLEdBQUcifQ==
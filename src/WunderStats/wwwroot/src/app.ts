﻿
import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";

@inject(Router)
export class App {
    router: Router;
     
    configureRouter(config : any, router: Router) {
        this.router = router;

        config.title = "AureliaTSapp";
        config.map([
            { route: ["", "todos"], moduleId: "./views/values", nav: true, title: "Values" },

        ]);
    }
}
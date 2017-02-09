import { Aurelia } from "aurelia-framework";
import "fetch";
import "jquery";
import "moment";
import "semantic/semantic.js";
import promise from "promise-polyfill";

if (!(window as any).Promise)
    (window as any).Promise = promise;

export function configure(aurelia: Aurelia) {
    aurelia.use
        .basicConfiguration()
        .feature("src/ui")
        .feature("src/app");

    aurelia.start().then(a => {
        a.setRoot("src/app");
    });
}    
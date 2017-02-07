import { Aurelia } from "aurelia-framework";

export function configure(aurelia: Aurelia) {
    aurelia.use
        .basicConfiguration()
        .feature("src/ui")
        .feature("src/app");

    aurelia.start().then(a => {
        a.setRoot("src/app");
    });
}    
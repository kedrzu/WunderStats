var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable } from "aurelia-framework";
import { bindingMode } from "aurelia-framework";
import { customElement } from "aurelia-framework";
let Field = class Field {
};
__decorate([
    bindable
], Field.prototype, "label", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], Field.prototype, "value", void 0);
Field = __decorate([
    customElement('ui:field')
], Field);
export { Field };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdsRCxJQUFhLEtBQUssR0FBbEI7Q0FPQyxDQUFBO0FBSkc7SUFEQyxRQUFRO29DQUNZO0FBR3JCO0lBREMsUUFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO29DQUNoQztBQU5aLEtBQUs7SUFEakIsYUFBYSxDQUFDLFVBQVUsQ0FBQztHQUNiLEtBQUssQ0FPakI7U0FQWSxLQUFLIn0=
﻿
import { View } from "aurelia-templating";
import { bindable } from 'aurelia-framework';
import { bindingMode } from 'aurelia-framework';

export interface IComboboxItem {
    value: any;
    name: any;
}

export class Combobox {

    protected combo: any;
    
    @bindable
    public items: IComboboxItem[];

    @bindable({ defaultBindingMode: bindingMode.twoWay })
    public value: any;
    
    attached() {
        var combo = $(this.combo) as any;
        combo.dropdown();
    }
    
}
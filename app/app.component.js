import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    template: "<h1>Hello {{name}}</h1>"
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map
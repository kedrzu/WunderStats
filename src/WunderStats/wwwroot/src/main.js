import "fetch";
import "jquery";
import "moment";
import "semantic/semantic.js";
import promise from "promise-polyfill";
if (!window.Promise)
    window.Promise = promise;
export function configure(aurelia) {
    aurelia.use
        .basicConfiguration()
        .feature("src/ui")
        .feature("src/app");
    aurelia.start().then(a => {
        a.setRoot("src/app");
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxPQUFPLENBQUM7QUFDZixPQUFPLFFBQVEsQ0FBQztBQUNoQixPQUFPLFFBQVEsQ0FBQztBQUNoQixPQUFPLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBRXZDLEVBQUUsQ0FBQyxDQUFDLENBQUUsTUFBYyxDQUFDLE9BQU8sQ0FBQztJQUN4QixNQUFjLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUV0QyxNQUFNLG9CQUFvQixPQUFnQjtJQUN0QyxPQUFPLENBQUMsR0FBRztTQUNOLGtCQUFrQixFQUFFO1NBQ3BCLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDakIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXhCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyJ9
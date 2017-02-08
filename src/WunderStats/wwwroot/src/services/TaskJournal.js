var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from "aurelia-framework";
import { WunderlistApi } from "./WunderlistApi";
let TaskJournal = class TaskJournal {
    constructor(wunderlistApi) {
        this.wunderlistApi = wunderlistApi;
        this.lists = {};
        this.tasks = {};
        this.days = {};
        this.loaded = this.wunderlistApi
            .getLists()
            .then(lists => {
            for (let list of lists) {
                this.lists[list.id] = list.revision;
            }
            var promises = lists.map(list => {
                this.lists[list.id] = list.revision;
                return this.loadTasks(list.id).then(() => console.log(this.days));
            });
            return Promise.all(promises);
        });
    }
    loadTasks(listId) {
        return this.wunderlistApi
            .getCompletedTasks(listId)
            .then(tasks => {
            // zapisujemy informacje o taskach
            for (let task of tasks) {
                // wyciąga samą datę ze stringa formatu ISO 8601
                var date = task.completed_at.substr(0, 10);
                this.tasks[task.id] = {
                    revision: task.revision,
                    date: date
                };
                if (this.days.hasOwnProperty(date) === false) {
                    this.days[date] = 1;
                }
                else {
                    this.days[date]++;
                }
            }
        });
    }
};
TaskJournal = __decorate([
    inject(WunderlistApi)
], TaskJournal);
export { TaskJournal };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza0pvdXJuYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYXNrSm91cm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUWhELElBQWEsV0FBVyxHQUF4QjtJQVFJLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTnhDLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLFVBQUssR0FBMkIsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBd0IsRUFBRSxDQUFDO1FBSzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWE7YUFDM0IsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUFDLEtBQUs7WUFDUCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3hDLENBQUM7WUFFRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBRXBDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFpQixDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLFNBQVMsQ0FBQyxNQUFjO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYTthQUNwQixpQkFBaUIsQ0FBQyxNQUFNLENBQUM7YUFDekIsSUFBSSxDQUFDLEtBQUs7WUFFUCxrQ0FBa0M7WUFDbEMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDckIsZ0RBQWdEO2dCQUNoRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRTNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUNsQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3ZCLElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUM7Z0JBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN0QixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUVKLENBQUE7QUFsRFksV0FBVztJQUR2QixNQUFNLENBQUMsYUFBYSxDQUFDO0dBQ1QsV0FBVyxDQWtEdkI7U0FsRFksV0FBVyJ9
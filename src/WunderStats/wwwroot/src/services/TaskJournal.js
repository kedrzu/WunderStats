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
                var date = this.formatDate(moment(task.completed_at));
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
    getData(from, to) {
        var samples = [];
        for (var date = from; date <= to; date.add(1, "day")) {
            var dateStr = this.formatDate(date);
            samples.push({
                date: date,
                value: this.days[dateStr] || 0
            });
        }
        return samples;
    }
    formatDate(date) {
        return date.format("DD-MM-YYYY");
    }
};
TaskJournal = __decorate([
    inject(WunderlistApi)
], TaskJournal);
export { TaskJournal };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza0pvdXJuYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYXNrSm91cm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUWhELElBQWEsV0FBVyxHQUF4QjtJQVFJLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTi9CLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLFVBQUssR0FBMkIsRUFBRSxDQUFDO1FBQ25DLFNBQUksR0FBd0IsRUFBRSxDQUFDO1FBSzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWE7YUFDM0IsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUFDLEtBQUs7WUFDUCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3hDLENBQUM7WUFFRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBRXBDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFpQixDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLFNBQVMsQ0FBQyxNQUFjO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYTthQUNwQixpQkFBaUIsQ0FBQyxNQUFNLENBQUM7YUFDekIsSUFBSSxDQUFDLEtBQUs7WUFFUCxrQ0FBa0M7WUFDbEMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBRXRELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUNsQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3ZCLElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUM7Z0JBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN0QixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFtQixFQUFFLEVBQWlCO1FBQ2xELElBQUksT0FBTyxHQUFjLEVBQUUsQ0FBQztRQUUzQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDVCxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2pDLENBQUMsQ0FBQztRQUNSLENBQUM7UUFFQSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyxVQUFVLENBQUMsSUFBbUI7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNKLENBQUE7QUFsRVksV0FBVztJQUR2QixNQUFNLENBQUMsYUFBYSxDQUFDO0dBQ1QsV0FBVyxDQWtFdkI7U0FsRVksV0FBVyJ9
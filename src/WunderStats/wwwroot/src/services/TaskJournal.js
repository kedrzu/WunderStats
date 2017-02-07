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
        this.wunderlistApi
            .getLists()
            .then(lists => {
            for (let list of lists) {
                this.lists[list.id] = list.revision;
                this.loadTasks(list.id).then(() => console.log(this.days));
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza0pvdXJuYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYXNrSm91cm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUWhELElBQWEsV0FBVyxHQUF4QjtJQU1JLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSnhDLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ2hDLFVBQUssR0FBMkIsRUFBRSxDQUFDO1FBQ25DLFNBQUksR0FBd0IsRUFBRSxDQUFDO1FBR25DLElBQUksQ0FBQyxhQUFhO2FBQ2IsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUFDLEtBQUs7WUFDUCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9ELENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTyxTQUFTLENBQUMsTUFBYztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWE7YUFDcEIsaUJBQWlCLENBQUMsTUFBTSxDQUFDO2FBQ3pCLElBQUksQ0FBQyxLQUFLO1lBRVAsa0NBQWtDO1lBQ2xDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLGdEQUFnRDtnQkFDaEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRztvQkFDbEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUN2QixJQUFJLEVBQUUsSUFBSTtpQkFDYixDQUFDO2dCQUVGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FFSixDQUFBO0FBekNZLFdBQVc7SUFEdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQztHQUNULFdBQVcsQ0F5Q3ZCO1NBekNZLFdBQVcifQ==
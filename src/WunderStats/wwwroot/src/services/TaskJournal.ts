import { inject } from "aurelia-framework";
import { WunderlistApi } from "./WunderlistApi";

interface ITaskInfo {
    revision: number;
    date: string;
}

@inject(WunderlistApi)
export class TaskJournal {

    private lists: IDictionary<number> = {};
    private tasks: IDictionary<ITaskInfo> = {};
    private days: IDictionary<number> = {};

    constructor(private wunderlistApi: WunderlistApi) {
        this.wunderlistApi
            .getLists()
            .then(lists => {
                for (let list of lists) {
                    this.lists[list.id] = list.revision;
                    this.loadTasks(list.id).then(() => console.log(this.days));
                }
            });
    }

    private loadTasks(listId: number) {
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
                    } else {
                        this.days[date]++;
                    }
                }
            });
    }

}
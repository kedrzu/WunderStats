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
    public readonly  days: IDictionary<number> = {};

    public readonly loaded: Promise<any>;

    constructor(private wunderlistApi: WunderlistApi) {
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

                return Promise.all(promises) as Promise<any>;
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
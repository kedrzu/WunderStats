import { inject } from "aurelia-framework";
import { TaskJournal } from "../services/TaskJournal";
import { customElement } from "aurelia-framework";
import { select, scaleLinear, scaleBand, max } from "d3";

interface IChartSample {
    date: string;
    tasks: number;
}


@inject(TaskJournal)
@customElement("app:tasks-chart")
export class TasksChart {

    protected chart: HTMLElement;

    constructor(private journal: TaskJournal) {

        journal.loaded.then(() => this.renderChart());


    }

    private renderChart() {

        var width = 800;
        var height = 600;

        var x = scaleBand().range([0, width]);
        var y = scaleLinear().range([height, 0]);

        var data: IChartSample[] = [];
        for (let date in this.journal.days)
            data.push({
                date: date,
                tasks: this.journal.days[date]
            });

        x.domain(data.map(d => d.date));
        y.domain([0, max(data.map(d => d.tasks))]);

        var svg = select(this.chart)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.date))
            .attr("width", x.step())
            .attr("y", d => y(d.tasks))
            .attr("height", d => height - y(d.tasks));
    }
}
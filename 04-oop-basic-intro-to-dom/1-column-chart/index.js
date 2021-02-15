export default class ColumnChart {
  chartHeight = 50;

  constructor({
    data = [], 
    label = '', 
    value = 0, 
    link = ''
  } = {}) {
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.render();    
  }

  get template () {
    return `
    <div class="${!this.data.length ? 'column-chart_loading' : ''} dashboard__chart_${this.label}">
    <div class="column-chart" style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">
      ${this.label.charAt(0).toUpperCase() + this.label.slice(1)}
        ${this.link ? '<a href="/sales" class="column-chart__link">View all</a>' : '' }
        </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
        ${this.chartContainer(this.data)}
        </div>
      </div>
    </div>
  </div>`;
  }
  
  chartContainer(data) {
    return data.length ? data.map(el => this.createCharts(el, data)).join('') : this.svgTemplate;
  }
  
  createCharts = (chart, data) =>`
  <div style="--value: ${Math.floor((chart * this.chartHeight) / Math.max(...data))}" 
  data-tooltip="${Math.round((chart * 100) / Math.max(...data))}%">
  </div>`;
  
  get svgTemplate() { 
    return `
  <svg>
     <use href="./charts-skeleton.svg"></use>
  </svg>`;}

  render() { 
    const element = document.createElement('div');    
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  update(data) {
    this.chartContainer(data);
  }
  remove () {
    this.element.remove();
  }
  
  destroy() {
    this.remove();
  }
}
  
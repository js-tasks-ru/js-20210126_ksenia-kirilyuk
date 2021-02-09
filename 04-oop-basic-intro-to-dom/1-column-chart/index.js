export default class ColumnChart {
  constructor({data = [], label = '', value = 0, link = ''} = {}) {
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.render();     
  }
  createChart = chart =>`
  <div style="--value: ${chart}" data-tooltip="${(chart * 100) / 50}"></div>
  `;
  createSvg = `
  <svg>
     <use href="./charts-skeleton.svg"></use>
  </svg>
`;
  render() {
    const element = document.createElement('div'); 
    element.innerHTML = `
    <div class="dashboard__chart_${this.label}">
    <div class="column-chart" style="--chart-height: 50">
      <div class="column-chart__title">
      ${this.label.charAt(0).toUpperCase() + this.label.slice(1)}
        ${this.link ? '<a href="/sales" class="column-chart__link">View all</a>' : '' }
        </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
        ${this.data.length ? this.data.map(el => this.createChart(el)).join('') : this.createSvg}
        </div>
      </div>
    </div>
  </div>
      `;
    this.element = element.firstElementChild;
  }
  remove () {
    this.element.remove();
  }
  
  destroy() {
    this.remove();
  }
}
  
export default class CountSelector {
  constructor(container) {
    this._container = document.querySelector(`.${container}`);
    this._btnsChangeCount = this._container.querySelectorAll(`.js-change-count`);
    this._input = this._container.querySelector(`.js-count-input`);
  }

  _onClickChangeBtns(evt) {
    if (evt.target.dataset.direction === `up`) {
      this._input.stepUp();
    } else {
      this._input.stepDown();
    }
  }

  _setHandlers() {
    this._btnsChangeCount.forEach((btn) =>
      btn.addEventListener(`click`, this._onClickChangeBtns.bind(this)));
  }

  init() {
    this._setHandlers();
  }
}

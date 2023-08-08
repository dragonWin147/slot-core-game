import { _decorator, Component, error, Label, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("HelloComponent")
export class HelloComponent extends Component {
  @property(Label)
  lbHello: Label = null;
  start() {
    error("Đây là lớp core, bạn xem thôi đừng sửa ");
  }

  setText() {
    this.lbHello.string = "My core";
  }
}

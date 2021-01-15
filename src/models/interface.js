export default class TodoRequest {
  name;
  avatar;
  description;
  start_time;
  end_time

  constructor(props) {
    this.name = props.name || "";
    this.avatar = props.avatar || "";
    this.description = props.description || "";
    this.start_time = props.start_time || "";
    this.end_time = props.end_time || ""
  }
}

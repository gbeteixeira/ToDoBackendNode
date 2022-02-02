export interface ITask {
  macaddress: string;
  type: Number;
  title: string;
  description: string;
  when: Date;
  done?: Boolean;
  created?: Date;
}
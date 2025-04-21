export type Machine = {
  name: string;
  status: MachineStatus;
  icon: string;
};

export enum MachineStatus {
  Running = 'Running',
  Alarm = 'Alarm',
  Warning = 'Warning'
}

export const StatusColorMap: Record<MachineStatus, string> = {
  [MachineStatus.Running]: '#dcdcdc',
  [MachineStatus.Alarm]: '#fe3636',
  [MachineStatus.Warning]: '#ff9704'
};

export const StatusIconMap: Record<MachineStatus, string> = {
  [MachineStatus.Running]: 'settings_backup_restore',
  [MachineStatus.Alarm]: 'error',
  [MachineStatus.Warning]: 'warning'
};

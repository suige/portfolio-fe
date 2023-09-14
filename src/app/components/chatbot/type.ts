type ID = string;
export type TriggerID = string;
export type TextStep = {
  type: 'text';
  id: ID;
  message: string;
  trigger: TriggerID;
  user?: boolean;
};

type Option = {
  id: ID;
  value: number;
  label: string;
  trigger: TriggerID;
};

export type OptionsStep = {
  type: 'options';
  id: ID;
  options: Option[];
};

export type Message = TextStep | OptionsStep;

export type Steps = Record<TriggerID, Message>;

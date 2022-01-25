import Task from './Task';

export default {
  title: 'Task',
  component: Task,
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
   task: {
     id: 1,
     name: "Sample Task",
     status: Task.STATUS.DEFAULT
   }
};

export const Archived = Template.bind({});
Archived.args = {
   task: {
     id: 1,
     name: "Sample Task",
     status: Task.STATUS.ARCHIVED
   }
};

export const Pinned = Template.bind({});
Pinned.args = {
   task: {
     id: 1,
     name: "Sample Task",
     status: Task.STATUS.PINNED
   }
};

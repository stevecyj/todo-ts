import { v4 as uuidV4 } from 'uuid';

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#task-form');
const input = document.querySelector<HTMLInputElement>('#task-title');

interface Task {
  id: string;
  title: string;
  completed: boolean;
  createAt: Date;
}

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input?.value == '' || input?.value == null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createAt: new Date(),
  };
  addItemToList(newTask);
});

const addItemToList = (task: Task) => {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
};

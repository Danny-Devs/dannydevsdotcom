import { uuid } from 'vue-uuid'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid.v1(),
          userAssigned: null,
        },
        {
          description: '',
          name: 'second task',
          id: uuid.v1(),
          userAssigned: null,
        },
        {
          description: '',
          name: 'third task',
          id: uuid.v1(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'in progress',
      tasks: [
        {
          description: '',
          name: 'pixel art',
          id: uuid.v1(),
          userAssigned: null,
        },
        {
          description: '',
          name: 'vue dev',
          id: uuid.v1(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'wash dishes',
          id: uuid.v1(),
          userAssigned: null,
        }
      ]
    }
  ],
}
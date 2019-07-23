export const initialState = {
    todo: [
      {
        name: 'Code',
        id: 123,
        completed: false
    },
      {
        name: 'Eat',
        id: 124,
        completed: false
      },
      {
        name: 'Sleep',
        id: 1235,
        completed: false
      },
      {
        name: 'Drink',
        id: 1246,
        completed: false
      },
      {
        name: 'Clean',
        id: 1237,
        completed: false
      },
      {
        name: 'Shower',
        id: 1248,
        completed: false
      }
    ]
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const newItem = {
          name: action.payload,
          id: Date.now(),
          completed: false
        };
        return {
          ...state,
          todo: [...state.todo, newItem]
        };


      case 'TOGGLE_ITEM':
        return {
          ...state,
          todo: state.todo.map(item => {
            if (action.payload === item.id) {
              return {
                ...item,
                completed: !item.completed
              };
            }
           
            return item;
          })
        };


      case 'CLEAR_COMPLETED':
        return {
          ...state,
          todo: state.todo.filter(item => !item.completed)
        };
      default:
        return state;
    }
  };
  
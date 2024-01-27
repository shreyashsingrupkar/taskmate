export const ShowTask = (props) => {
  const handleEdit = (id) => {
    const seletedTask = props.tasklist.find((todo) => todo.id === id);
    props.setTask(seletedTask);
  };

  const handleDelete = (id) => {
    const updatedTasklist = props.tasklist.filter((todo) => todo.id !== id);
    props.setTasklist(updatedTasklist);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{props.tasklist.length}</span>
        </div>
        <button
          onClick={() => {
            props.setTasklist([]);
            props.setTask({});
          }}
          className="clearAll"
        >
          Clear All
        </button>
      </div>
      <ul>
        {props.tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

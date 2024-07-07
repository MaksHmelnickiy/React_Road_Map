import { useDispatch, useSelector } from "react-redux";
import { INote, INotes, addNote, deleteNote, refreshNote } from "./actionCreator";
import React from "react";
import { Filter } from "./filter";

export const Notes = () => {
  const notes = useSelector((state: INotes) => state.notes);
  const filter = useSelector((state: INotes) => state.filter);
  const [editingID, setEditingID] = React.useState<number | null>(null);
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const tag = formData.get('tag') as string;

    if (title && content && tag) {
      dispatch(addNote(title, content, tag));
      form.reset(); // Сброс формы после добавления заметки
    } else {
      alert('Please fill in all fields');
    }
  };

  const onChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const id = formData.get('id') as string;
    dispatch(refreshNote(Number(id), content, title));
    setEditingID(null);
  };

  const onDelete = (id: number) => {
    dispatch(deleteNote(id));
    setEditingID(null); // Сброс редактирования после удаления заметки
  };

  const onEdit = (id: number) => {
    setEditingID(prevID => (prevID === id ? null : id)); // Переключение режима редактирования
  };

  const filteredNotes = notes.filter(note => {
    if (filter === 'ALL') return true;
    return note.tag === filter;
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul>
        {filteredNotes.map((item: INote, index) => (
          <li key={index} style={{ padding: '10px', border: '1px solid gray', marginBottom: '10px' }}>
            <form onSubmit={e => onChange(e)}>
              <input type="text" defaultValue={item.id.toString()} name="id" hidden />
              <div><b>ID:</b> {item.id}</div>
              {editingID === item.id ? (
                <>
                  <div><b>Title:</b> <input type="text" name="title" defaultValue={item.title} /></div>
                  <div><b>Content:</b> <input type="text" name="content" defaultValue={item.content} /></div>
                  <p><button type="submit">Apply</button></p>
                </>
              ) : (
                <>
                  <div><b>Title:</b> {item.title}</div>
                  <div><b>Content:</b> {item.content}</div>
                </>
              )}
              <div><b>Tag:</b> {item.tag}</div>
              <br />
              <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
              <button type="button" onClick={() => onEdit(item.id)}>
                {editingID === item.id ? 'Hide Change' : 'Change'}
              </button>
            </form>
          </li>
        ))}
      </ul>
      <form style={{ marginTop: '50px', border: '1px solid gray', padding: '10px' }} onSubmit={e => onSubmit(e)}>
        <input type="text" placeholder="Title" name="title" />
        <br />
        <input type="text" placeholder="Content" name="content" />
        <br />
        <input type="text" placeholder="Tag" name="tag" />
        <button type="submit">ADD Note</button>
      </form>
      <Filter />
    </div>
  );
};

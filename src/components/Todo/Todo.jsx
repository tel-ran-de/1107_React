//taskTitle и taskDescripttion и  doneFlg
export const Todo = ({ taskTitle, taskDescripttion, doneFlg }) => {
  return (
    <div
      style={{
        textDecoration: doneFlg ? 'line-through' : '',
        color: doneFlg ? 'grey' : '',
      }}
    >
      <h1>{taskTitle}</h1>
      <p>{taskDescripttion}</p>
    </div>
  )
}

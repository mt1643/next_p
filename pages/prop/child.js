
function Child(props) {
    return (
      <div>
        <ul>
          {props.news.map((item) => {
            return (
              <li>
                id:{item.id}, title:{item.title}, content:{item.content}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default Child;
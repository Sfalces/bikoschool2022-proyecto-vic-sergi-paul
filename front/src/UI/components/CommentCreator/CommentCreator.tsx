import "./CommentCreator.css";
import { UserContext } from "../../../core/infrastructure/userContext";
import { useContext } from "react";

export const CommentCreator = () => {

  const { user } = useContext(UserContext);

  if (user !== undefined) {
    return(
      <div className="comments_containter">
        <div className="input_container">
          <div>
            <img src={user.token.image} className="profileimage" alt=""></img>
          </div>
          <div>
            <input
              type="text"
              placeholder="¿Algo que comentar?"
              className="comment">
            </input>
          </div>
        </div>
        <div>
          <button className="postear"> Comentar</button>  
        </div> 
      </div>
  )
  }
  return(
      <div className="comments_containter">
        <div className="input_container">
          <div>
            <div className="profileimage" ></div>
          </div>
          <div>
            <input
              type="text"
              placeholder="¿Algo que comentar?"
              className="comment">
            </input>
          </div>
        </div>
        <div>
          <button className="postear"> Comentar</button>  
        </div> 
      </div>
  )
}

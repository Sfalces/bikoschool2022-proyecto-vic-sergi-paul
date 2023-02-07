import "./CommentCreator.css";
import { UserContext } from "../../../core/infrastructure/userContext";
import { useContext } from "react";

export const CommentCreator = () => {

  const { user } = useContext(UserContext);
  
  const profimg = user ? user.token.image : undefined

  if (user !== undefined) {
    return <></>;
  }
  return(
      <div>
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
          <button></button>  
        </div> 
      </div>
  )
}

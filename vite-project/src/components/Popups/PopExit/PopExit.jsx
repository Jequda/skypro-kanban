import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { StyledButtonNo } from "../../../styled/common/Common.styled";

export default function PopExit({ logout }) {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit">
            <div className="pop-exit__form-group">
              <button
                onClick={logout}
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
              >
                <span>Да, выйти</span>{" "}
              </button>
              <Link to={appRoutes.MAIN}>
                <StyledButtonNo>Нет, остаться </StyledButtonNo>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { StyledButtonNo } from "../../../styled/common/Common.styled";

function PopExit(logout) {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <Link to={appRoutes.LOGIN}>
                <span
                  onClick={logout}
                  className="pop-exit__exit-yes _hover01"
                  id="exitYes"
                >
                  Да, выйти{" "}
                </span>
              </Link>
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

export default PopExit;

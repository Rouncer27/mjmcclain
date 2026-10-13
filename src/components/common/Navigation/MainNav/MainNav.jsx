import MainNavItem from "./MainNavItem.jsx";
import "./mainNav.scss";

const MainNav = (props) => {
  console.log(props);
  return (
    <div className="main-nav">
      <nav role="navigation" aria-label="primary" className="main-nav-top">
        <ul className="main-nav-top-list">
          {props.menuItems.map((item, index) => {
            if (!item.parentId) {
              const currentPage = props.pathname === item.uri;
              return (
                <MainNavItem
                  currentPage={currentPage}
                  pathname={props.pathname}
                  item={item}
                  key={index}
                />
              );
            } else {
              return null;
            }
          })}
          {props.phoneNumber ? (
            <li className="main-nav-top-list-item phone-number">
              <a href={`tel: ${props.phoneNumber.phoneNumber}`}>
                {props.phoneNumber.phoneNumberDisplay}
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;

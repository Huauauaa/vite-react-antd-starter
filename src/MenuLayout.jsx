import { useLocation, Outlet, useNavigate } from 'react-router-dom';

function MenuLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentMenu = location.pathname;
  const onMenuClick = ({ key }) => {
    if (location.pathname === key) {
      return;
    }
    navigate(key, { replace: true });
  };

  return (
    <>
      <Menu
        onClick={onMenuClick}
        mode="horizontal"
        selectedKeys={[currentMenu]}
      >
        <Menu.Item key="/">Home</Menu.Item>
        <Menu.Item key="/about">About</Menu.Item>
      </Menu>

      <Outlet />
    </>
  );
}

MenuLayout.propTypes = {};

MenuLayout.defaultProps = {};

export default MenuLayout;

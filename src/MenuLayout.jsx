import { useHistory } from 'react-router-dom';

function MenuLayout({ children }) {
  const history = useHistory();
  const currentMenu = history.location.pathname;
  const onMenuClick = ({ key }) => {
    if (history.location.pathname === key) {
      return;
    }
    history.push(key);
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

      {children}
    </>
  );
}

MenuLayout.propTypes = {
  children: PropTypes.node,
};

MenuLayout.defaultProps = {
  children: null,
};

export default MenuLayout;

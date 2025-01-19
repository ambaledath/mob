import TabPanel, { Item } from "devextreme-react/tab-panel";
import { Page1, Page2, Page3 } from "../../pages";

const Header = () => {
  return (
    <header className={"header-component"}>
      <TabPanel animationEnabled={false}>
        <Item title="Employee" icon="floppy">
          <Page1 />
        </Item>
        <Item title="Notes" icon="comment">
          <Page2 />
        </Item>
        <Item title="Role" icon="isnotblank">
          <Page3 />
        </Item>
      </TabPanel>
    </header>
  );
};

export default Header;

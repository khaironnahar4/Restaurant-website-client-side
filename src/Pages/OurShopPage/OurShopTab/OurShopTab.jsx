import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurShopCart from "../OurShopCard/OurShopCart";

function OurShopTab() {
    
    
  return (
    <Tabs>
      <TabList className="flex justify-center items-center">
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
      </TabList>

      <TabPanel>
        <OurShopCart category="salad"></OurShopCart>
      </TabPanel>

      <TabPanel>
      <OurShopCart category="pizza"></OurShopCart>
      </TabPanel>

      <TabPanel>
      <OurShopCart category="soup"></OurShopCart>
      </TabPanel>

      <TabPanel>
      <OurShopCart category="dessert"></OurShopCart>
      </TabPanel>

      <TabPanel>
      <OurShopCart category="drinks"></OurShopCart>
      </TabPanel>
    </Tabs>
  );
}

export default OurShopTab;

import { useAsync, useFetchAndLoad } from '@/hooks';
import { LayoutContainer } from '@/styled-components';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const Component1 = () => {

  return <div></div>;
};

function Component2() {
  return <div></div>;
}

export const DashboardSuperFix = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  return (
    <LayoutContainer>
      <div style={{ fontSize: '3rem' }}>
        <div>Buenas buenas mi gente !</div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ fontSize: '3rem' }} label="Item One" {...a11yProps(0)} />
          <Tab style={{ fontSize: '3rem' }} label="Item Two" {...a11yProps(1)} />
        </Tabs>
        <div role="tabpanel"> {value === 0 ? <Component1 /> : <Component2 />}</div>
      </div>
    </LayoutContainer>
  );
};

export default DashboardSuperFix;

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

const page = () => {
  return (
    <div className='m-6'>
    <Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>LOGIN</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.400' }}>SIGNUP</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
   <Login/>
    </TabPanel>
    <TabPanel>
  <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}

export default page

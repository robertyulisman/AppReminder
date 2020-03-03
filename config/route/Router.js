import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Dashboard from '../../src/Pages/Dashboard';
import JenisPuasa from '../../src/Pages/JenisPuasa';
import Menu2 from '../../src/Pages/Menu2';
import Menu3 from '../../src/Pages/Menu3';
import About from '../../src/Pages/About';
import drawerContentComponents from '../../src/components/drawerContentComponents';

const Router = createDrawerNavigator(
  {
    Dashboard,
    JenisPuasa,
    Menu2,
    Menu3,
    About,
  },
  {
    contentComponent: drawerContentComponents,
  },
);

export default createAppContainer(Router);

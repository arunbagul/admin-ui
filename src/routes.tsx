import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdHome, MdLock } from 'react-icons/md';

// Admin
import DashboardPage from 'views/admin/default';
import ProfilePage from 'views/admin/profile';
import TablesPage from 'views/admin/dataTables';

// Auth
import SignInPage from 'views/auth/signIn';

const routes = [
	{
		name: 'Dashboard',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: DashboardPage
	},
	{
		name: 'DataTables',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/tables',
		component: TablesPage
	},
	{
		name: 'Profile',
		layout: '/admin',
		path: '/profile',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: ProfilePage
	},
	{
		name: 'Sign In',
		layout: '/auth',
		path: '/sign-in',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignInPage
	}
];

export default routes;

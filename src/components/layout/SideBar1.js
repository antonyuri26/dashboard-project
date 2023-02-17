import React from 'react';

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import { navActions } from '../../store/index';
import { modalActions } from '../../store/index';
import { sideNavActions } from '../../store/index';
import { useSelector } from 'react-redux';

import MainContent from './MainContent';
import Billing from '../dashboard/Billing';
import Settings from '../dashboard/Settings';

const LinkItems = [
  { name: 'Dashboard', icon: FiHome, url: '', id: 'dashboard' },
  { name: 'Tables', icon: FiTrendingUp, url: '/', id: 'tables' },
  { name: 'Billing', icon: FiCompass, url: '/', id: 'billing' },
  { name: 'Settings', icon: FiSettings, url: '/', id: 'settings' },
];

const LinkItemsbottom = [
  { name: 'Profile', icon: FiHome, url: '/', id: 'profile' },
  { name: 'Newsletter', icon: FiHome, url: '/', id: 'newsletter' },
  { name: 'Sign Out', icon: FiCompass, url: '/', id: 'signout' },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isBillingOpen = useSelector(state => state.sidnav.isBillingOn);
  const isSettingOpen = useSelector(state => state.sidnav.isSettingOn);

  let pageShow = '';
  if (isBillingOpen) {
    pageShow = <Billing />;
  }

  if (isSettingOpen) {
    pageShow = <Settings />;
  }

  if (isBillingOpen === false && isSettingOpen === false) {
    pageShow = <MainContent />;
  }

  return (
    <Box minH="100%" bg={useColorModeValue('white.100', 'white.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* {children} */}
        {pageShow}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <>
      {/* UPPER SIDEBAR */}
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Dashboard
          </Text>
          <CloseButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map(link => (
          <NavItem key={link.name} icon={link.icon} id={link.id}>
            {link.name}
          </NavItem>
        ))}

        {/* LOWER SIDEBAR */}

        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Account
          </Text>
          <CloseButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onClose}
          />
        </Flex>

        {LinkItemsbottom.map(link => (
          <NavItem key={link.name} icon={link.icon} id={link.id}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </>
  );
};

const NavItem = ({ icon, id, children, ...rest }) => {
  //handling clicks on sideBar
  const navigate = useNavigate();
  const dispatchAuth = useDispatch();
  const dispatchNav = useDispatch();
  const dispatchMod = useDispatch();
  const dispatchSideNav = useDispatch();

  const sideBarClickHandler = id => {
    switch (id) {
      case 'dashboard':
        dispatchSideNav(sideNavActions.sideNavHandler('dashboard'));
        navigate('/dashboard');
        break;
      case 'tables':
        dispatchMod(modalActions.modalHandler('table'));
        break;
      case 'billing':
        dispatchSideNav(sideNavActions.sideNavHandler('billing'));
        break;
      case 'settings':
        dispatchSideNav(sideNavActions.sideNavHandler('settings'));
        break;
      case 'profile':
        dispatchMod(modalActions.modalHandler('profile'));
        break;
      case 'newsletter':
        dispatchMod(modalActions.modalHandler('newsletter'));
        break;
      case 'signout':
        dispatchAuth(authActions.logOut());
        dispatchNav(navActions.navChange());
        window.localStorage.removeItem('token');
        navigate('/signin');
        break;
      default:
      // code block
    }
  };

  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      onClick={() => sideBarClickHandler(id)}
      id={id}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
        {/* {isModalOpen && <ModalBox onClose={closeModalHandler} />} */}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';
import { Link as ReactRouter } from 'react-router-dom';
import { authActions, navActions } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

import { ImStatsBars2 } from 'react-icons/im';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineShop } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';

import logo from '../../images/logo.png';

export default function MainNavigation(props) {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const dispatchAuth = useDispatch();
  const dispatchNav = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const logoOnClickHandler = () => {
    dispatchNav(navActions.navChange('reset'));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const signInHandler = id => {
    dispatchNav(navActions.navChange(id));
    navigate('/signin');
  };

  const signupHandler = id => {
    dispatchNav(navActions.navChange('reset'));
    navigate('/signup');
  };

  const signOutHandler = () => {
    dispatchAuth(authActions.logOut());
    dispatchNav(navActions.navChange());
    window.localStorage.removeItem('token');
    navigate('/signin');
  };

  const backToDashHandler = () => {
    navigate('/dashboard');
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        position={!isAuth && 'fixed'}
        width={!isAuth ? '70%' : '100%'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          {!isAuth && (
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          )}
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <Link as={ReactRouter} to="/" onClick={logoOnClickHandler}>
              {/* LOGO  */}
              <Img src={logo} alt="Logo" w={8} h={8} />
            </Link>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} pt="1">
            <DesktopNav navPageChangeHandler={props.navPageChangeHandler} />
          </Flex>
        </Flex>

        {!isAuth ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button
              as={'a'}
              fontSize={'md'}
              fontWeight={400}
              variant={'link'}
              onClick={() => signInHandler('signin')}
              cursor={'pointer'}
            >
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              href={'#'}
              _hover={{
                bg: 'blue.300',
              }}
              onClick={() => signupHandler('signup')}
            >
              Sign Up
            </Button>
          </Stack>
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              href={'#'}
              _hover={{
                bg: 'blue.300',
              }}
              onClick={backToDashHandler}
            >
              Dashboard
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              href={'#'}
              _hover={{
                bg: 'blue.300',
              }}
              onClick={signOutHandler}
            >
              Log Out
            </Button>
            {/* AVATAR */}
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuDivider />
                  <MenuItem>Log Out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            {/* AVATAR */}
          </Stack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

//Nav Links (Themes Pricing Documentation)
const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const navigateNav = useNavigate();
  const isAuth1 = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const scrollOnClick = id => {
    if (id === 'themes') {
      dispatch(navActions.navChange(id));
      navigateNav('/themes');
    }

    if (id === 'signin') {
      dispatch(navActions.navChange(id));
      navigateNav('/signin');
    }

    if (id === 'signup') {
      dispatch(navActions.navChange(id));
      navigateNav('/signup');
    }

    if (id === 'features') {
      navigateNav('/');
      dispatch(navActions.navChange(id));
    }

    if (id === 'pricing') {
      navigateNav('/');
      dispatch(navActions.navChange(id));
    }
  };

  if (!isAuth1) {
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map(navItem => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  id={navItem.id}
                  fontSize={'md'}
                  fontWeight="bold"
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                  onClick={() => {
                    scrollOnClick(navItem.id);
                  }}
                >
                  {navItem.label}
                  {navItem.icon}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map(child => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  }
};

//Nav Links dropdown Menu (Components)
const DesktopSubNav = ({ label, href, subLabel, icon }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box pb="25px">{icon}</Box>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.400' }}
            fontWeight={600}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Components',
    icon: <ChevronDownIcon paddingleft="3px" w={5} h={5} />,
    children: [
      {
        label: 'Application',
        subLabel: 'Trending Design to inspire you',
        href: '/application',
        icon: <ImStatsBars2 paddingleft="3px" w={8} h={8} />,
      },
      {
        label: 'E-Commerce',
        subLabel: 'Up-and-coming Designers',
        href: '/ecommerce',
        icon: <AiOutlineShoppingCart paddingleft="3px" w={8} h={8} />,
      },
      {
        label: 'Marketing',
        subLabel: 'Up-and-coming Designers',
        href: '/marketing',
        icon: <AiOutlineShop paddingleft="3px" w={8} h={8} />,
      },
      {
        label: 'Community',
        subLabel: 'Up-and-coming Designers',
        href: '/community',
        icon: <BsPeople paddingleft="3px" w={6} h={6} />,
      },
    ],
  },

  {
    label: 'Features',
    id: 'features',
  },
  {
    label: 'Pricing',
    id: 'pricing',
  },
  {
    label: 'Themes',
    href: '/themes',
    id: 'themes',
  },
];

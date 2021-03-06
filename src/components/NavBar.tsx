import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Flex,
  Heading,
  Button,
  useColorMode,
  Avatar,
  Tooltip,
} from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, AppState } from '../store'
import { logout } from '../store/system/actions'

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const loggedIn = useSelector((state: AppState) => state.system.loggedIn)
  const user = useSelector((state: AppState) => state.system.user)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Flex as="nav" align="center" justify="space-between" p={4} boxShadow="lg">
      <Link to="/">
        <Heading as="span">Authsite</Heading>
      </Link>
      <Flex align="center">
        {loggedIn ? (
          <Link to="/me">
            <Flex align="center">
              <Tooltip hasArrow  label={user?.name} aria-label={user?.name}>
                <Avatar
                  justifySelf="center"
                  size="sm"
                  name={user?.name}
                  // src="/pictures/default-profile-pic.jpg"
                />
              </Tooltip>
            </Flex>
          </Link>
        ) : null}

        <Button ml={2} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>

        {loggedIn ? (
          <Button ml={2} onClick={() => dispatch(logout())}>
            Logout
          </Button>
        ) : (
          <>
            <Link to="/login">
              <Button ml={2}>Login</Button>
            </Link>
            <Link to="/register">
              <Button ml={2} colorScheme="purple">
                Register
              </Button>
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default NavBar

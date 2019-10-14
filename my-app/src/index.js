import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Icon, Image, Grid, List, Input, Label } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src={"//cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749"} centered />
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid centered container>

            <Dropdown item text="MEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="WOMEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="KIDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="BRAND" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item fitted>SALE</Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src={"https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/24837428_10155273996755885_8755345908872996362_o.jpg?_nc_cat=110&_nc_oc=AQl7KMyF--7qUY_dB6m7Ix4jkGx5O-_L3vqCHlgBUMKsHgwIQfDwLpfXqD3bTswuC_TdEX967-CFclXTW3a9lrBd&_nc_ht=scontent-lax3-1.xx&oh=555b49984da88f7d4fa6448703b2e664&oe=5E3B3637"} fluid />
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns={3}>
          <Grid.Column>
            NAVIGATION
            <hr/>
            <List>
              <List.Item>About us</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Store Locations</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column>
            MAIN MENU
            <hr/>
            <List>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column>
            CONNECT
            <hr/>
            <List>
              <List.Item>Sign up for the latest updates</List.Item>
              <Input  placeholder='Enter email address'/><Label color='black'>Join</Label>
            </List>
          </Grid.Column>
        </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
    };
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount() {
    this.funcUser();
  }

  async funcUser() {
    this.setState({
      loading: true,
    });
    const { name } = await getUser();
    this.setState({
      name,
      loading: false,
    });
  }

  renderHeader() {
    const { name } = this.state;
    return (
      <header data-testid="header-component">
        <h2 data-testid="header-user-name">{`Olá ${name}`}</h2>
        <Link to="/album">Album</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
      </header>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        { loading ? <Loading /> : this.renderHeader() }
      </div>
    );
  }
}

export default Header;

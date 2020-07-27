import React, { Component } from 'react';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import countries from '../config/countries';
import formatAccess from '../Components/Utils/utils/formatAccess';

class UserList extends Component {
  componentDidMount() {
    this.props.usersGetList();
  }
  getFlag(country) {
    const flag = countries.map((e) => e.name).indexOf(country);
    return flag;
  }
  render() {
    return (
      <div>
        <SectionTitle title="User List" />
        <SectionTitlePostsTitle text="Table of users" />
        <table className="table table-striped">
          <tr>
            <td>Username</td>
            <td>Email</td>
            <td>Location</td>
            <td>Created</td>
            <td>Access Level</td>
          </tr>

          {this.props.usersReducer
            ? this.props.usersReducer.list.map((l) => {
                return (
                  <tr>
                    <td>{l.username}</td>
                    <td>{l.email}</td>
                    <td>
                      {l.location} {countries[this.getFlag(l.location)].flag}
                    </td>
                    <td>{l.createdOn}</td>
                    <td>
                      {l.accessLevel} (
                      {formatAccess.accessLabel.get(l.accessLevel)})
                    </td>
                  </tr>
                );
              })
            : ''}
        </table>
      </div>
    );
  }
}

export default UserList;

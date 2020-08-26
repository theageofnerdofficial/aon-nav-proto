import React, { Component } from 'react';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import countries from '../config/countries';
import formatAccess from '../Components/Utils/utils/formatAccess';
import FontIcon from '../Components/FontIcon/FontIcon';
import ModifyBtn from '../Components/Button/ModifyBtn';

class UserList extends Component {
  componentDidMount() {
    console.log(this.props);
    if (this.props.usersGetList) {
      this.props.usersGetList();
    }
  }
  getFlag(country) {
    const flag = countries.map((e) => e.name).indexOf(country);
    return flag;
  }
  render() {
    return (
      <div>
        <SectionTitle title="User List" />
        <SectionTitlePostsTitle
          text={`
           Registered Users (${
             this.props.usersReducer ? this.props.usersReducer.list.length : 0
           })`}
        />
        <table className="table table-striped">
          <tr>
            <th>User</th>
            <th>Access Level</th>
            <th className="text-center" width="150px">
              Modify
            </th>
          </tr>

          {this.props.usersReducer
            ? this.props.usersReducer.list.map((l) => {
                return (
                  <tr>
                    <td>
                      <ul className="p-0 m-0" style={{ listStyleType: 'none' }}>
                        <li>
                          <span className="text-muted">
                            {FontIcon('faUser')}
                          </span>
                          &nbsp;
                          {l.username}
                        </li>
                        <li>
                          <span className="text-muted">{FontIcon('faAt')}</span>
                          &nbsp;{l.email}
                        </li>
                        <li>
                          {countries[this.getFlag(l.location)].flag}&nbsp;
                          {l.location}{' '}
                        </li>
                        <li>
                          <small className="font-italic font-weight-light">
                            Joined:&nbsp;
                            {new Date(l.createdOn)
                              .toLocaleDateString('en-UK')
                              .toString()}
                          </small>
                        </li>
                      </ul>
                      <br />
                    </td>

                    <td>
                      {l.accessLevel} (
                      {formatAccess.accessLabel.get(l.accessLevel)})&nbsp;
                      <span className="text-muted">
                        {l.accessLevel >= 2 ? FontIcon('faWrench') : ''}
                      </span>
                    </td>
                    <td>
                      <ModifyBtn
                        fontIcon="faCaretUp"
                        color="success"
                        label="Promote"
                      />
                      <ModifyBtn
                        fontIcon="faCaretDown"
                        color="danger"
                        label="Demote"
                      />

                      <ModifyBtn
                        fontIcon="faBan"
                        color="danger"
                        label="Ban User"
                      />
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

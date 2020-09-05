import React, { Component } from 'react';
import AdminThumb from './AdminThumb';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
class Admin extends Component {
  componentDidMount() {
    console.log(this.props.Link);
  }
  render() {
    return (
      <div>
        <SectionTitle title="Admin" />
        <div style={{ transform: 'scale(1)' }}>
          <SectionTitlePostsTitle text="Content Scheduler" />
          <div className="col-12 row p-0 m-0">
            <AdminThumb
              fontIcon="faCalendar"
              label="Content Scheduler"
              link="/admin/scheduler"
              Link={this.props.Link}
            />
          </div>
          <SectionTitlePostsTitle text="Sources" />
          <div className="col-12 row p-0 m-0">
            <AdminThumb
              fontIcon="faTasks"
              label="Sources List"
              link="/admin/getsources"
              Link={this.props.Link}
            />
            <AdminThumb
              fontIcon="faPlus"
              label="Add source"
              link="/admin/addsource"
              Link={this.props.Link}
            />
            <AdminThumb
              fontIcon="faTwitter"
              label="Services"
              link="/admin/apis"
              Link={this.props.Link}
            />
          </div>
        </div>
        <br />
        <SectionTitlePostsTitle text="Users" />
        <div className="col-12 row p-0 m-0">
          <AdminThumb
            fontIcon="faTasks"
            label="User List"
            link="/admin/userlist"
            Link={this.props.Link}
          />
          <AdminThumb
            fontIcon="faFileAlt"
            label="Review User Submissions"
            link="/admin/usersubmissions"
            Link={this.props.Link}
          />
        </div>
        <br />
        <SectionTitlePostsTitle text="Quizzes" />
        <div className="col-12 row p-0 m-0">
          <AdminThumb
            fontIcon="faTasks"
            label="Quiz List"
            link="/admin/quizlist"
            Link={this.props.Link}
          />
          <AdminThumb
            fontIcon="faPlus"
            label="Add Quiz"
            link="/admin/addquiz"
            Link={this.props.Link}
          />
        </div>
      </div>
    );
  }
}

export default Admin;

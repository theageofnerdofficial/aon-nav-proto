/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import LoaderCentered from '../Loader/LoaderCentered';
import Post from './Post';

class Posts extends Component {
  render() {
    const { allData } = this.props;
    const dataHasLength = () => allData && allData.length > 0;
    return dataHasLength() ? (
      allData.map((d, index) => {
        return (
          <React.Fragment>
            <Post
              id={d.id}
              created_at={d.created_at}
              created_time_from={d.created_time_from}
              source_data={d.source_data}
              description={d.description ? d.description : null}
              profile_pic_url={d.profile_pic_url ? d.profile_pic_url : null}
              entities_media={d.entities_media ? d.entities_media : null}
              extended_entities_media={
                d.extended_entities_media ? d.extended_entities_media : null
              }
              preview_img_arr={d.preview_img_arr ? d.preview_img_arr : null}
              source={d.source}
              text={d.text}
              userData={d.user}
            />
          </React.Fragment>
        );
      })
    ) : (
      <LoaderCentered />
    );
  }
}

export default Posts;

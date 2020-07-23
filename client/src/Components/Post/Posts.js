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
    {
      return dataHasLength() ? (
        allData.map((d, index) => {
          return (
            <LazyLoad
              height={300}
              key={`ll-post-${index}`}
              offset={[-100, 100]}
              placeholder={<LoaderCentered />}
            >
              <Post
                id={d.id}
                created_at={d.created_at}
                description={d.description ? d.description : null}
                entities_media={d.entities_media ? d.entities_media : null}
                extended_entities_media={
                  d.extended_entities_media ? d.extended_entities_media : null
                }
                preview_img_arr={d.preview_img_arr ? d.preview_img_arr : null}
                source={d.source}
                text={d.text}
                userData={d.user}
              />
            </LazyLoad>
          );
        })
      ) : (
        <LoaderCentered />
      );
    }
  }
}

export default Posts;

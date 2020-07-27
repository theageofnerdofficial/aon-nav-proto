import React, { Component } from 'react';
import data from './data.json';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';
import SectionTitle from './Components/SectionTitle/SectionTitle';

class Sources extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionTitle title="Sources" />
        <br />
        <SectionTitlePostsTitle text="Gaming Sources" />
        <table className="table table-striped">
          <tr>
            <th></th>
            <th>Service</th>
            <th>Sources</th>
          </tr>

          {data.categories.gaming.channels.map((channel, index) => {
            return (
              <tr>
                <td>{index + 1}.</td>
                <td>
                  {channel.name} <br />
                  <hr />
                  <small style={{ fontWeight: 300 }}>
                    {channel.description}
                  </small>
                </td>
                <td>
                  <ul>
                    <li>
                      Reddit
                      <ul>
                        <li>URL: {channel.sources[0].reddit.url}</li>
                        <li>
                          Description: {channel.sources[0].reddit.description}
                        </li>
                        <li>Filter by: {channel.sources[0].reddit.filter}</li>
                        <li>
                          Official source:&nbsp;
                          {channel.sources[0].reddit.isOfficial
                            ? 'True'
                            : 'False'}
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Twitter
                      <ul>
                        <li>URL: {channel.sources[1].twitter.url}</li>
                        <li>
                          Description: {channel.sources[1].twitter.description}
                        </li>

                        <li>Filter by: {channel.sources[1].twitter.filter}</li>
                        <li>
                          Official source:&nbsp;
                          {channel.sources[1].twitter.isOfficial
                            ? 'True'
                            : 'False'}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </td>
              </tr>
            );
            // <p>{data.categories.gaming.channels[0].name}</p>
          })}
        </table>
      </React.Fragment>
    );
  }
}

export default Sources;

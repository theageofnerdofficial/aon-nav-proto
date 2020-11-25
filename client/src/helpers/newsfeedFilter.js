/*


1. reddit && twitter && instagram && youtube
2. !reddit && twitter && instagram && youtube
3. !reddit && !twitter && instagram && youtube
4. !reddit && !twitter && !instagram && youtube
5. !reddit && !twitter && !instagram && !youtube
6. !reddit && twitter && instagram && !youtube
7. !reddit && !twitter && instagram && !youtube
8. !reddit && twitter && !instagram && !youtube
9.!reddit && twitter && !instagram && youtube
10.reddit && twitter && !instagram && youtube
11.reddit && !twitter && instagram && !youtube
12.reddit && !twitter && !instagram && !youtube
13.reddit && twitter && !instagram && !youtube
14.reddit && !twitter && instagram && youtube
15. reddit && twitter && instagram && !youtube
16. reddit && !twitter && !instagram && youtube

*/

const newsFeedFilter = (s, hasTweetF, hasRedditF, hasIF) => {
  if (s.twitter && s.reddit && s.instagram) {
    return hasTweetF && hasRedditF && hasIF ? true : false;
    //
    //
    //
  } else if (!s.twitter && s.reddit && s.instagram) {
    return !hasTweetF && hasRedditF && hasIF ? true : false;
    //
    //
  } else if (!s.twitter && !s.reddit && s.instagram) {
    return !hasTweetF && !hasRedditF && hasIF ? true : false;
    //
    //
  } else if (!s.twitter && !s.reddit && !s.instagram) {
    return !hasTweetF && !hasRedditF && !hasIF ? true : false;
    //
    //
  } else if (!s.twitter && !s.reddit && !s.instagram) {
    return !hasTweetF && !hasRedditF && !hasIF ? true : false;
  }
};

export default newsFeedFilter;

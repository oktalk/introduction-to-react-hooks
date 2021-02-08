import React from 'react';
import useFetch from '../useFetch';

const FetchData = ({ apiEndPoint }) => {
  const { loading, data } = useFetch(apiEndPoint);

  return (
    <div>
      {loading && <div className="loader" />}
      {data &&
        data.length > 0 &&
        data.map((blog, index) => {
          if (index > 3) return false;
          return (<p key={blog.id}>{blog.title}</p>)
        })
      }
    </div>
  );
}

export default FetchData;

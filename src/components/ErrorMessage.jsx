import React from 'react';

const ErrorMessage = ({ error }) => {
  return (
    <div class='container alert alert-danger my-5' role='alert'>
      {`An error occurred - ${error}`}
    </div>
  );
};

export default ErrorMessage;

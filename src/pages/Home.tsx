import React from 'react';
import { Link } from "react-router-dom";

import { FrontVar } from '../components/FrontBar';
import { Button } from "react-bootstrap";

export default class Home extends React.Component {
  render() {
    return (
        <>
        <FrontVar />
        <h1>ホーム</h1>
        <div>
          新規登録は<Link to={`/register/`}>こちら</Link>
        </div>
        <div>
          <Link to={"/links"}>リンク集</Link>
        </div>
      </>
    )
  }
};

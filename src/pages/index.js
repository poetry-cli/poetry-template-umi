import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './index.less';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { app = {} } = this.props
    const { user = {} } = app
    return (
      <div className={styles.wrap}>
        <Button>
          poetry-template-umi
        </Button>
      </div>
    );
  }
}

export default connect(({ app }) => ({
  app,
}))(Index);

import React from 'react';
import { PageHeader, Tag, Button, Statistic, Row } from 'antd';
import { GlobalStateContext } from "../App";

import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: props.title,
          version: props.version,
        }
    }

    render() {
        return (
            <div>
            <PageHeader
                onBack={() => null}
                title={this.props.title}
                tags={<Tag color="blue">{this.props.version}</Tag>}
                subTitle="A capitalists dream"
                extra={[
                    <Button key="1" type="primary">Nothing yet</Button>,
                ]}
            >
                <Row>
                    <GlobalStateContext.Consumer>
                        {(state) => (<Statistic title="Balance" prefix="$" value={state.amountMoney} />)}
                    </GlobalStateContext.Consumer>
                </Row>
            </PageHeader>
            </div>
        )
    }
}


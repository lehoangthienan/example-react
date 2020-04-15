import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { Result, Button } from 'antd'

export default () => (
    <Card>
        <Title title="Not Found" />
        <CardContent>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button href='/#' type="primary">Back Home</Button>}
            />
        </CardContent>
    </Card>
);
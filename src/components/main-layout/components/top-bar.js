import { Button, Row, Col, Space, Tooltip, Typography, Popconfirm } from 'antd';
import React from 'react';
import { DownloadOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const TopBar = () => {
    const handleDownload = () => { alert('downloaded'); };
    const handleNewInterview = () => { alert('cleared'); };

    return (
        <Row align="middle">
            <Col span="18">
                <Title
                    style={{ color: '#f5f5f5' }}
                    level={3}
                >
                    Globant - UI Interview Assistant
                </Title>
            </Col>
            <Col span="6">
                <Row justify="end">
                    <Space>
                        <Popconfirm
                            title="Are you sure to delete this interview?"
                            onConfirm={handleNewInterview}
                            onCancel={null}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Tooltip title="Discard all changes">
                                <Button
                                    type="primary"
                                    shape="circle"
                                    danger
                                    icon={<DeleteOutlined />}
                                />
                            </Tooltip>
                        </Popconfirm>
                        
                        <Tooltip title="Download feedback">
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<DownloadOutlined />}
                            />
                        </Tooltip>
                    </Space>
                </Row>
            </Col>
        </Row>
    );
};

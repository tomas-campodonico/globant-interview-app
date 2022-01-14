import { PageHeader, Input, Form, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import englishLevels from '../../data/english.json';

const { TextArea } = Input;
const { Option } = Select;

export const UserInfo = ({ user, updateUser }) => (
    <div>
        <PageHeader
            className="site-page-header"
            title="Candidate information"
        />

        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                label="Candidate name"
                rules={[{ required: true, message: 'Please input the name of the candidate!' }]}
            >
                <Input
                    placeholder="Candidate name"
                    prefix={<UserOutlined />}
                    value={user.name}
                    onChange={({ target }) => updateUser({ ...user, name: target.value })}
                />
            </Form.Item>

            <Form.Item
                label="Level of English"
                rules={[{ required: false }]}
            >
                <Select
                    style={{ width: 230 }}
                    placeholder="Select an option"
                    value={user.englishLevel}
                    onChange={(englishLevel) => updateUser({ ...user, englishLevel })}
                >
                    {englishLevels.map(({ label, value }) =>
                        <Option key={label} value={value}>{label}</Option>
                    )}
                </Select>
            </Form.Item>

            <Form.Item
                label="Background comments"
                rules={[{ required: false }]}
            >
               <TextArea
                placeholder="Comments"
                showCount
                value={user.background}
                maxLength={500}
                style={{ height: 180 }}
                onChange={({ target }) => updateUser({ ...user, background: target.value })}
            /> 
            </Form.Item>
        </Form>
    </div>
);
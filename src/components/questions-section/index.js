import { PageHeader, Input, Form, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

export const QuestionsSection = ({ categoryQuestions, updateQuestions }) => (
    <div>
        <PageHeader
            className="site-page-header"
            title={categoryQuestions.name}
        />

       
    </div>
);
import { Rate, PageHeader, Card, Row, Col, Typography, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const PersonalityTraits = ({ personalityTraits, updatePersonalityTraits }) => {

    // Group traits in groups of 3
    const traits = personalityTraits.reduce((prev, current, index) => {
        if (index % 3 === 0) prev.push([]);
        prev[prev.length - 1].push(current);
        return prev;
    }, []);

    const updateTrait = (trait, value) => {
        trait = { ...trait, value };
        const updated = [...personalityTraits];
        const index = personalityTraits.findIndex((pTrait) => pTrait.id === trait.id);
        updated[index] = trait;
        updatePersonalityTraits(updated);
    }

    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Personality Traits"
            />

            <Card>
                <Row>
                    {traits.map((traitColumn) => (
                        <Col span={12} key={traitColumn[0].id}>
                            <Space size={50} direction="vertical" style={{ width: '100%' }}>
                                {traitColumn.map((trait) => (
                                    <div key={trait.id}>
                                        <Title level={5}>{trait.name} <Tooltip title={trait.help}><QuestionCircleOutlined /></Tooltip></Title>
                                        <Rate
                                            value={trait.value}
                                            onChange={(value) => updateTrait(trait, value)}
                                        /> 
                                    </div>
                                ))}
                            </Space>
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    );
};

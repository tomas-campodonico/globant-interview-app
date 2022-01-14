import { Layout, Menu } from 'antd';
import { TopBar } from './components/top-bar';
import categories from '../../data/questions.json';

const { Header, Content, Sider } = Layout;

export const MainLayout = ({ selected, onSelectionChanged, children }) => {
    const onPhaseSelected = ({ key }) => { onSelectionChanged(key); };

    return (
        <Layout style={{ height: '100vh' }}>
            <Header className="header">
                <TopBar />
            </Header>
            <Layout style={{ height: '100%' }}>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={selected}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={onPhaseSelected}
                    >
                        {categories.map(({ key, name }) => (
                            <Menu.Item onSelect={onPhaseSelected} key={key}>{name}</Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

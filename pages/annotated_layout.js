import React from 'react';
import {Page, Layout, Card, Banner, Button, Form, FormLayout, TextField, Stack, SettingToggle, TextStyle} from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

class AnnotatedLayout extends React.Component {
    state = {
        discount: '10%',
        enabled: false,
    };

    handleSubmit = () => {
        this.setState({
            discount: this.state.discount
        });
        console.log('submission', this.state);
    }

    handleChange = (name) => {
        return (value) => this.setState({ [name]: value});
    }
    handleToogle = () => {
        this.setState(({enabled}) => {
            return { enabled: !enabled}
        });
    }
    render() {
     
       const { discount, enabled } = this.state;
       const contentStatus = enabled ? 'Disabled' : 'Enabled';
       const textStatus = enabled ? 'Enabled' : 'Disabeld';
        return (
            <Page>
                <TitleBar title='Annotated Layout'/>
                <Layout>
                    <Layout.Section>
                        <Banner onDismiss={
                            () => {
                                console.log('Dismissed')
                            }
                        }>A work in progress</Banner>
                    </Layout.Section>
                    <Layout.AnnotatedSection title="Default Discount" description="Add a product to Sample App, it will automatically be discounted">
                        <Card sectioned>
                            <Form onSubmit={this.handleSubmit}>
                                <FormLayout>
                                    <TextField value={discount} onChange={this.handleChange('discount')} label='Discount' type='discount'/>
                                    <Stack distribution="trailing">
                                        <Button primary submit>
                                            Save
                                        </Button>
                                    </Stack>
                                </FormLayout>
                            </Form>
                        </Card>
                    </Layout.AnnotatedSection>
                    <Layout.AnnotatedSection title="Toogle Discount" description="Enable or Disable the discounts for your products">
                        <SettingToggle
                            action={{
                                content: contentStatus,
                                onAction: this.handleToogle,
                            }}
                            enabled={enabled}
                        >
                            this setting is {' '}
                            <TextStyle variation='strong'>{textStatus}</TextStyle>
                        </SettingToggle>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        )
    }
}
export default AnnotatedLayout;

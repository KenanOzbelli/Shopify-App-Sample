import React from 'react';
import {Page, Layout, Card, Banner} from '@shopify/polaris';

class AnnotatedLayout extends React.Component {
    state = {};

    render() {
        return (
            <Page>
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
                            <div>Card</div>
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        )
    }
}

export default AnnotatedLayout;

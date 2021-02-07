import React from 'react';
import {
    Page,
    Layout,
    Banner,
    Stack,
    EmptyState,
} from '@shopify/polaris';
import store from 'store-js';
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';
import ResourceListWithProducts from '../components/ResourceList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
    state = {open: false}

    handleSelection = (resources) => {
        const itemArr = []
        const idArr = []

        resources.selection.map(item => {
            itemArr.push(item);
            idArr.push(item.id)
        })
        this.setState({open: false});
        store.set('items', itemArr);
        store.set('ids', idArr);
    };

    render () {
        const emptyState = !store.get('ids');
        return (
        <Page>
            <TitleBar
            title="Sample App"
            primaryAction={{
                content: 'Select products',
                onAction: () => this.setState({open: true}),
            }}
            />
            <ResourcePicker
            resourceType="Product"
            showVariants={false}
            open={this.state.open}
            initialSelectionIds={store.get('items').filter(item => {return item.id})}
            onSelection={(resources) => this.handleSelection(resources)}
            onCancel={() => this.setState({open: false})}
            />
            {emptyState ? (
            <Layout>
            <EmptyState
                heading="Select products to start"
                action={{
                content: 'Select products',
                onAction: () => this.setState({open: true}),
                }}
                image={img}
            >
                <p>Select products and change their price temporarily</p>
            </EmptyState>
            </Layout>
            ):(
            <ResourceListWithProducts />
            )}
        </Page >
        );

  }
}
export default Index;
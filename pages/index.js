import React, { useState } from 'react';
import {
    Page,
    MediaCard,
    Layout,
    Card,
    Banner,
    Button,
    SkeletonBodyText,
    Stack,
    ButtonGroup
} from '@shopify/polaris';
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';

const Index = () => {
   const [open, setOpen] = useState(false);
   const [Items, setItems] = useState([]);
   const handleSelection = (resource) => {
        setOpen(false);
        setItems(oldResouce => [...oldResouce, resource])
        console.log(resource.selection);
        console.log(Items);
   }

    return (
        <Page title='Cross-Sell' subtitle='Set Products' separator>
            <TitleBar
                title='Sample App'
                primaryAction={{
                    content:'Select Products',
                    onAction: ()=> {setOpen(true)}
                }}
            />
            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={open}
                onSelection={(resource) => {handleSelection(resource)}}
                onCancel={()=> setOpen(false)}
            />
            <Card sectioned>
                <Stack spacing='loose' vertical>
                    <Layout>
                    <Layout.Section fullWidth>
                        <Banner onDismiss={
                            () => {
                                console.log('Dismissed')
                            }
                        }>A work in progress</Banner>
                    </Layout.Section>
                    
                </Layout>
                    <Stack distribution='trailing'>
                            <Button primary={true} onClick={() =>{setOpen(true)}}>Select Products</Button>
                    </Stack>
                </Stack>
            </Card>
        </Page>
    )
}

export default Index;

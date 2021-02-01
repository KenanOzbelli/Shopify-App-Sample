import React, { useState } from 'react';
import {
    Page,
    Layout,
    Banner,
    Button,
    Card,
    SkeletonBodyText,
    Stack,
    ButtonGroup
} from '@shopify/polaris';
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';
import ProductCard from '../components/ProductCard';
const Index = () => {
   const [open, setOpen] = useState(false);
   const [Items, setItems] = useState([]);
   const handleSelection = (resource) => {
        setOpen(false);
        resource.selection.map(item => {
            Items.findIndex(oldItem => oldItem.id === item.id) == -1 ? setItems(oldArray => [...oldArray, item]) : null;
            console.log(item);
        });
   }   
   const handleRemove = (id) => {
        console.log(`${id} needs to be Dismissed`)
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
                initialSelectionIds={Items.filter(item => {return item.id})}
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
                    {Items.map(Product => {
                        return(
                        <Layout.Section oneThird>
                            <ProductCard item={Product} dismiss={handleRemove}/>
                        </Layout.Section>
                        )
                    })}
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

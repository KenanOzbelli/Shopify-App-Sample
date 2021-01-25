import React from 'react';
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

const Index = () => {

    return (
        <Page title='Menu Item' subtitle='Secondary Menu Item' separator>
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
                    <Layout.Section oneThird>
                                <MediaCard portrait title='Test-App' description="Testing The Design of Polaris"
                                    primaryAction={
                                        {
                                            content: "Add a Product",
                                            onAction: () => {
                                                console.log('Product Added')
                                            }
                                        }
                                    }>
                                    <img alt='Mountains' width='100%'
                                        style={
                                            {
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }
                                        }
                                        src="https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=925&format=pjpg&exif=1&iptc=1 1x, https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=1850&format=pjpg&exif=1&iptc=1 2x"/>
                                </MediaCard>
                    </Layout.Section>
                    <Layout.Section oneThird>
                                <MediaCard portrait title='Test-App' description="Testing The Design of Polaris"
                                    primaryAction={
                                        {
                                            content: "Add a Product",
                                            onAction: () => {
                                                console.log('Product Added')
                                            }
                                        }
                                    }>
                                    <img alt='Mountains' width='100%'
                                        style={
                                            {
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }
                                        }
                                        src="https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=925&format=pjpg&exif=1&iptc=1 1x, https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=1850&format=pjpg&exif=1&iptc=1 2x"/>
                                </MediaCard>
                    </Layout.Section>
                    <Layout.Section oneThird>
                                <MediaCard portrait title='Test-App' description="Testing The Design of Polaris"
                                    primaryAction={
                                        {
                                            content: "Add a Product",
                                            onAction: () => {
                                                console.log('Product Added')
                                            }
                                        }
                                    }>
                                    <img alt='Mountains' width='100%'
                                        style={
                                            {
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }
                                        }
                                        src="https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=925&format=pjpg&exif=1&iptc=1 1x, https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=1850&format=pjpg&exif=1&iptc=1 2x"/>
                                </MediaCard>
                    </Layout.Section>
                </Layout>
                    <Stack distribution='trailing'>
                        <ButtonGroup>
                            <Button primary={true}>Add a Product</Button>
                            <span style={{color:'red'}}>
                                <Button outline={true} monochrome>Delete a Product</Button>
                            </span> 
                        </ButtonGroup>
                    </Stack>
                </Stack>
            </Card>
        </Page>
    )
}

export default Index;

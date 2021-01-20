import {useState} from 'react';
import {
    Page,
    MediaCard,
    Layout,
    Card,
    Subheading,
    Banner,
    Button,
    SkeletonBodyText,
    Stack,
    Popover,
    ActionList
} from '@shopify/polaris';

const Index = () => {
    const [Hide, setHide] = useState(true);
    const [Active, setActive] = useState(false);

    return (
        <Page title='Menu Item' subtitle='Secondary Menu Item' separator>
            <Card sectioned>
                <Layout>
                    <Layout.Section fullWidth>
                        <Banner onDismiss={
                            () => {
                                console.log('Dismissed')
                            }
                        }>A work in progress</Banner>
                    </Layout.Section>
                    <Layout.Section oneHalf>
                        <MediaCard portrait title='Test-App' description="Testing The Design of Polaris"
                            primaryAction={
                                {
                                    content: "Add a Product",
                                    onAction: () => {
                                        console.log('Product Added')
                                    }
                                }
                            }
                            popoverActions={
                                    {
                                        content: 'Dismiss',
                                        onAction: () => {
                                            console.log('Dismiss')
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
                        <Card>
                            <Card.Header title='Selection'>
                            <Popover active={Active ? true : false} activator={
                                    <Button onClick={()=>{setActive(true)}} disclosure plain>
                                        Options
                                    </Button>
                            }
                            onClose={()=>{setActive(false)}}
                            >
                            <ActionList items={[{content:'Product Type'}, {content:'Product Setting'}]}/>
                            </Popover>
                            </Card.Header>
                            <Card.Section>
                                <Stack spacing='loose' vertical>
                                    <Subheading>Items</Subheading>
                                    <Button onClick={
                                        () => setHide(!Hide)
                                    }>Click Here to Show Text</Button>
                                    {
                                    Hide ? <SkeletonBodyText/>: <p>And I am Shown</p>
                                } </Stack>
                            </Card.Section>
                        </Card>
                        <Card>
                            <Card.Header title='Items'>
                            </Card.Header>
                            <Card.Section>
                                <Stack spacing='loose' vertical>
                                    <Subheading>Products</Subheading>
                                    <SkeletonBodyText />
                                </Stack>
                            </Card.Section>
                        </Card>
                            <Card title='Save' primaryFooterAction={{content:'Save Your Page'}}>
                                    <p style={{padding:'1rem',textAlign:'center',fontSize:'16px'}}> Save Your Product Here </p>
                            </Card>
                    </Layout.Section>
                </Layout>
            </Card>
        </Page>
    )
}

export default Index;
